"use client";

import ExpenseInput, {
  ExpenseInputType,
} from "@/actions/start/models/expense-input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Expense, { AreaDeConsumo } from "@/lib/models/finance-assistant/expense";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface AddExpenseButtonProps {
  area: AreaDeConsumo;
  icon: React.ReactNode;
  addExpense: (expense: Expense) => void;
}

export default function AddExpenseButton({
  area,
  icon,
  addExpense,
}: AddExpenseButtonProps) {
  const form = useForm<ExpenseInputType>({
    resolver: zodResolver(ExpenseInput),
    defaultValues: {
      total: "0",
    },
    mode: "onChange",
  });

  function handleSubmit(): void {
    addExpense({ total: parseInt(form.getValues().total), area: area });
    form.reset();
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          {icon}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Agregar Consumo de {area}</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField
              control={form.control}
              name="total"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Total:</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <DialogClose className="mt-4" asChild>
              <Button
                className="w-full"
                disabled={!form.formState.isValid}
                type="submit"
              >
                Aceptar
              </Button>
            </DialogClose>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
