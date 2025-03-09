"use client";

import { Button } from "@/components/ui/button";
import { FinanceTest } from "@/lib/models/finance-assistant/finance-test";
import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
  DialogDescription,
} from "@/components/ui/dialog";
import { useEffect } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

const exampleTest: FinanceTest = {
  questions: [
    {
      question: "¿Cuál es la regla 50/30/20?",
      options: [
        "50% gastos fijos, 30% gastos variables, 20% ahorro.",
        "50% ahorro, 30% inversiones, 20% gastos.",
        "50% deudas, 30% ahorro, 20% gastos.",
      ],
      answer: 0,
    },
    {
      question:
        'Verdadero o Falso: "Es recomendable llevar un registro de todos tus gastos, incluso los pequeños."',
      options: ["Verdadero", "Falso"],
      answer: 0,
    },
    {
      question: "¿Qué es el interés compuesto?",
      options: [
        "El interés que se paga solo sobre el capital inicial.",
        "El interés que se calcula sobre el capital inicial y los intereses acumulados.",
        "El interés que se cobra por pagos atrasados.",
      ],
      answer: 1,
    },
    {
      question:
        'Escenario: "Tienes una deuda de tarjeta de crédito con un interés alto. ¿Cuál es la mejor estrategia?"',
      options: [
        "Hacer el pago mínimo cada mes.",
        "Intentar pagar más del mínimo para reducir el capital.",
        "Solicitar otro crédito para pagar la deuda.",
      ],
      answer: 1,
    },
    {
      question: "¿Qué es la diversificación de inversiones?",
      options: [
        "Invertir todo tu dinero en una sola opción.",
        "Repartir tu dinero en diferentes tipos de inversiones para reducir el riesgo.",
        "Invertir solo en opciones de alto riesgo.",
      ],
      answer: 1,
    },
    {
      question: "¿Cuál es la importancia de tener un fondo de emergencia?",
      options: [
        "Para comprar artículos de lujo.",
        "Para cubrir gastos inesperados y evitar deudas.",
        "Para invertir en la bolsa de valores.",
      ],
      answer: 1,
    },
  ],
  score: 0,
};

interface TakeTestButtonProps {
  sumPoints: (points: number) => void;
}

export default function TakeTestButton({sumPoints}: TakeTestButtonProps) {
  const [test, setTest] = useState<FinanceTest>(exampleTest);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [currentValue, setCurrentValue] = useState<string>("");
  const [showCurrentCorrect, setShowCurrentCorrect] = useState<boolean>(false);
  const [currentRemainingTime, setCurrentRemainingTime] = useState<number>(100);
  const [initTest, setInitTest] = useState<boolean>(false);

  function handleAnswer() {
    if (test.questions[currentQuestion].answer === parseInt(currentValue)) {
      setTest((prev) => ({ ...prev, score: prev.score + 1 }));
    }
    setCurrentValue("");
    setShowCurrentCorrect(true);
    if (currentQuestion < test.questions.length - 1) {
      setTimeout(() => {
        setShowCurrentCorrect(false);
        setCurrentQuestion((prev) => prev + 1);
        setCurrentRemainingTime(100);
      }, 1000);
    } else {
      sumPoints(test.score);
      
    }
  }

  useEffect(() => {
    if (currentRemainingTime === 0) {
      handleAnswer();
    }
  }, [currentRemainingTime]);

  useEffect(() => {
    if (!initTest) return;
    const timer = setInterval(() => {
      setCurrentRemainingTime((prev) => prev - 1);
    }, 100);
    return () => clearInterval(timer);
  }, [initTest]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setInitTest(true)}>
          Hacer Test
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="mb-2">
          <DialogTitle>{test.questions[currentQuestion].question}</DialogTitle>
          <DialogDescription asChild>
            <Progress value={currentRemainingTime} />
          </DialogDescription>
        </DialogHeader>
        {currentQuestion < test.questions.length ? (
          <RadioGroup value={currentValue} onValueChange={setCurrentValue}>
            {test.questions[currentQuestion].options.map((option, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-center gap-4 py-3 px-4 border-primary/50 border-1 rounded-lg",
                  showCurrentCorrect &&
                    test.questions[currentQuestion].answer === index
                    ? "bg-secondary/25"
                    : "bg-primary/2.5 hover:bg-primary/5"
                )}
              >
                <RadioGroupItem
                  value={index.toString()}
                  id={index.toString()}
                />
                <Label htmlFor={index.toString()}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
        ) : (
          <p>¡Test completado!</p>
        )}
        <DialogFooter className="mt-2">
          <div className="flex justify-between items-center w-full">
            <p>
              Puntaje: <strong>{test.score}</strong>
            </p>
            {currentQuestion === test.questions.length - 1 ? (
              <DialogClose asChild>
                <Button onClick={handleAnswer}>Finalizar</Button>
              </DialogClose>
            ) : (
              <Button
                variant="outline"
                onClick={handleAnswer}
                disabled={showCurrentCorrect}
              >
                Siguiente
              </Button>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
