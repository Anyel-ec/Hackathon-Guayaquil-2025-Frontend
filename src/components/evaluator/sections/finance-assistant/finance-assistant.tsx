"use client";

import { useState } from "react";
import EvaluatorSection from "../evaluator-section";
import TakeTestButton from "./take-test-button";
import Expense, { AreaDeConsumo } from "@/lib/models/finance-assistant/expense";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { Button } from "@/components/ui/button";
import { Apple, Car, Clapperboard, Home, ScanHeart, School } from "lucide-react";
import AddExpenseButton from "./add-expense-button";
import FinanceTipsButton from "./tips-button";

export default function FinanceAssistant() {
  const [score, setScore] = useState<number>(0);

  const [expenses, setExpenses] = useState<Expense[]>([
    { area: AreaDeConsumo.Alimentacion, total: 10 },
    { area: AreaDeConsumo.Educacion, total: 10 },
    { area: AreaDeConsumo.Ocio, total: 10 },
    { area: AreaDeConsumo.Salud, total: 10 },
    { area: AreaDeConsumo.Transporte, total: 10 },
    { area: AreaDeConsumo.Vivienda, total: 10 },
  ]);

  function addExpense(expense: Expense): void {
    setExpenses([
      ...expenses.map((oldExpense) => {
        if (oldExpense.area === expense.area) {
          return { ...expense, total: oldExpense.total + expense.total };
        }
        return oldExpense;
      }),
    ]);
  }

  return (
    <EvaluatorSection
      title="Asistente Financiero"
      className="h-[100vh] sm:row-span-2"
    >
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
      <div className="flex-1 flex flex-col items-center justify-end gap-4">
        <div className="grid grid-rows-2 grid-cols-3 md:flex gap-2">
          <AddExpenseButton
            area={AreaDeConsumo.Alimentacion}
            icon={<Apple />}
            addExpense={addExpense}
          />
          <AddExpenseButton
            area={AreaDeConsumo.Educacion}
            icon={<School />}
            addExpense={addExpense}
          />
          <AddExpenseButton
            area={AreaDeConsumo.Ocio}
            icon={<Clapperboard />}
            addExpense={addExpense}
          />
          <AddExpenseButton
            area={AreaDeConsumo.Salud}
            icon={<ScanHeart />}
            addExpense={addExpense}
          />
          <AddExpenseButton
            area={AreaDeConsumo.Transporte}
            icon={<Car />}
            addExpense={addExpense}
          />
          <AddExpenseButton
            area={AreaDeConsumo.Vivienda}
            icon={<Home />}
            addExpense={addExpense}
          />
        </div>
        <ResponsiveContainer width="100%" height="55%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={expenses}>
            <PolarGrid />
            <PolarAngleAxis dataKey="area" />
            <PolarRadiusAxis />
            <Radar
              name="Expenses"
              dataKey="total"
              stroke="var(--primary)"
              fill="var(--primary)"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
        <FinanceTipsButton />
      </div>
    </EvaluatorSection>
  );
}
