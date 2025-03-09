"use client";

import { useState } from "react";
import EvaluatorSection from "../evaluator-section";
import TakeTestButton from "./take-test-button";

export default function FinanceAssistant() {
  const [score, setScore] = useState<number>(0);

  return (
    <EvaluatorSection title="Asistente Financiero">
      <div className="flex flex-col items-center">
        <p className="text-6xl text-primary font-black">{score}</p>
        <p className="text-xs">Puntaje</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm text-primary text-center">
          {score > 0
            ? "No hay más tests por el momento."
            : "¡Tienes un test disponible!"}
        </p>
        {score === 0 && (
          <TakeTestButton sumPoints={(points) => setScore(score + points)} />
        )}
      </div>
    </EvaluatorSection>
  );
}
