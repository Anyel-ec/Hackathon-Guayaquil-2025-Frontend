"use client";

import { SpinnerDotted } from "spinners-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import React, { useEffect, useState } from "react";

export default function EvaluateButton() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!loading) return;
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [loading]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          onClick={() => setLoading(true)}
          className="fixed sm:absolute top-2 left-2 sm:top-auto sm:left-auto sm:bottom-1/2 sm:right-1/2 sm:translate-y-1/2 sm:translate-x-1/2 text-primary-foreground rounded-full h-20 w-20 sm:h-24 sm:w-24 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform bg-primary hover:bg-primary/90"
        >
          Evaluar
        </button>
      </DialogTrigger>
      <DialogContent
        hideClose
        className="rounded-full w-96 h-96 p-6 bg-primary text-primary-foreground"
      >
        <DialogHeader>
          <DialogTitle className="text-center">¡Magia!</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center gap-2">
          {loading ? (
            <SpinnerDotted
              size={150}
              thickness={100}
              speed={100}
              color="(var(--primary-foreground))"
            />
          ) : (
            <React.Fragment>
              <p className="text-xs">Posible Crédito</p>
              <p className="text-5xl font-black">$ ###.##</p>
              <Button variant="link" className="text-primary-foreground">
                Solicítalo Aquí
              </Button>
            </React.Fragment>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
