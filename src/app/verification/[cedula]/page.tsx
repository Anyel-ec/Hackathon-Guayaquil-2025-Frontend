"use client";

import StartInput, { StartInputType } from "@/actions/start/models/start-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";

export default function Verification() {

  const params = useParams();
  const cedula = params.cedula;

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
        
        <p className="text-center">
          Por favor, <strong>permítenos</strong> verificar tu identidad:
        </p>
        <p>
          TODO: Verificar Biometría de Cédula {cedula}
        </p>
      </div>
    </main>
  );
}
