"use client";

import saveCedula from "@/actions/scoring/save-cedula";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Webcam from "react-webcam";
import { SpinnerCircularSplit } from "spinners-react";

export default function Verification() {
  const router = useRouter();

  const params = useParams<{ cedula: string }>();
  const cedula = params.cedula;

  setTimeout(() => {
    // TODO: save cedula in cookie simulating a proper JWT and backend-based verification
    saveCedula(cedula).then(() => {
      router.push(`success`);
    });
  }, 3000);

  return (
    <main className="flex flex-col items-center justify-start sm:justify-center w-screen h-screen">
      <div className="flex flex-col items-center gap-4 p-8">
        <p className="text-center">
          Por favor, <strong>permítenos</strong> verificar tu identidad:
        </p>
        <div className="relative">
          <div
            style={{
              mask: "radial-gradient(calc(var(--spacing) * 33),#0000 calc(100% - 1px),#000)",
            }}
            className="absolute m-auto bg-background h-80 w-full"
          />
          <div className="absolute m-auto flex items-center justify-center h-80 w-full z-50">
            <SpinnerCircularSplit
              size="calc(var(--spacing) * 80)"
              thickness={50}
              speed={100}
              color="var(--primary)"
              secondaryColor="rgba(0, 0, 0, 0.44)"
            />
          </div>
          <Webcam className="h-80" />
        </div>
      </div>
    </main>
  );
}
