import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function FinanceTipsButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Obtener Recomendaciones</Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle asChild>
            <div className="flex gap-4 items-center">
              <p>Recomendaciones</p>
            </div>
          </DialogTitle>
        </DialogHeader>
        <p>Planifica tus rutas para evitar tráfico y ahorrar combustible.</p>
        <p>Encuentra un equilibrio entre el ocio y el ahorro, priorizando actividades que aporten valor a tu vida.</p>
        <p>Prioriza cocinar en casa en lugar de comer fuera, para ahorrar dinero y controlar la calidad de los alimentos.</p>
      </DialogContent>
    </Dialog>
  );
}
