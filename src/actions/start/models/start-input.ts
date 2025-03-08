import { REGEXP_ONLY_DIGITS as REGEXP_ONLY_DIGITS_STRING } from "input-otp";
const REGEXP_ONLY_DIGITS = new RegExp(REGEXP_ONLY_DIGITS_STRING);
import z from "zod";

const StartInput = z.object({
  cedula: z
    .string()
    .length(10, "La cédula debe tener 10 dígitos")
    .regex(
      REGEXP_ONLY_DIGITS,
      "Cédula inválida"
    ),
});

export default StartInput;

export type StartInputType = z.infer<typeof StartInput>;
export const startInputFieldsNames = StartInput.keyof()._def.values;
