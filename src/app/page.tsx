"use client";

import StartInput, { StartInputType } from "@/actions/start/models/start-input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { zodResolver } from "@hookform/resolvers/zod";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function Home() {

  const form = useForm<StartInputType>({
    resolver: zodResolver(StartInput),
    defaultValues: {
      cedula: "",
    },
    mode: "onChange",
  });

  return (
    <main className="flex flex-col items-center justify-start sm:justify-center w-screen h-screen">
      <div className="flex flex-col items-center gap-2 p-8">
        <div className="w-24 mb-4">
          <Image src="/mortgage.svg" width={512} height={512} alt="" />
        </div>
        <p className="text-center">
          Ingresa tu cédula y deja que empiece la <span className="font-black text-primary">magia</span>:
        </p>
        <Form {...form}>
          <FormField
            control={form.control}
            name="cedula"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputOTP maxLength={10} pattern={REGEXP_ONLY_DIGITS} {...field}>
                    <InputOTPGroup>
                      {Array.from({ length: 10 }).map((_, index) => (
                        <InputOTPSlot key={index} index={index} />
                      ))}
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
              </FormItem>
            )}
          />
        </Form>
        <Button
          disabled={!form.formState.isValid}
          asChild={form.formState.isValid}
          className="w-full mt-4"
        >
          <Link href={`/verification/${form.watch("cedula")}`}>Iniciar</Link>
        </Button>
      </div>
    </main>
  );
}
