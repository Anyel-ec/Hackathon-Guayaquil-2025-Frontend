import { REGEXP_ONLY_DIGITS as REGEXP_ONLY_DIGITS_STRING } from "input-otp";
const REGEXP_ONLY_DIGITS = new RegExp(REGEXP_ONLY_DIGITS_STRING);
import z from "zod";

const ExpenseInput = z.object({
  total: z.string().regex(REGEXP_ONLY_DIGITS, "Por favor, ingresa una cantidad válida"),
});

export default ExpenseInput;

export type ExpenseInputType = z.infer<typeof ExpenseInput>;
export const expenseInputFieldsNames = ExpenseInput.keyof()._def.values;
