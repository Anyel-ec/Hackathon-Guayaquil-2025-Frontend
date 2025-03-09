import { Tooltip, TooltipContent } from "@/components/ui/tooltip";
import { Contact } from "@/lib/models/contact";
import { cn } from "@/lib/utils";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import { CircleEllipsis, UserCircle } from "lucide-react";

interface ReputationContactProps {
  index: number;
  total: number;
  contact: Contact;
}

export default function ReputationContact({
  index,
  total,
  contact,
}: ReputationContactProps) {
  const angle: number = (index / total) * 2 * Math.PI;
  const x: string = `calc(4.5rem * ${Math.cos(angle)})`;
  const y: string = `calc(4.5rem * ${Math.sin(angle)})`;

  return (
    <div
      className={cn(
        "absolute rounded-full",
        contact.estado === "Pendiente" ? "bg-accent" : "bg-primary"
      )}
      style={{
        top: `calc(50% - 16px + ${y})`,
        left: `calc(50% - 16px + ${x})`,
      }}
    >
      <Tooltip>
        <TooltipTrigger asChild>
          {contact.estado === "Pendiente" ? (
            <CircleEllipsis color="var(--ring)" size="32px" />
          ) : (
            <UserCircle color="var(--primary-foreground)" size="32px" />
          )}
        </TooltipTrigger>
        <TooltipContent side="top" align="center" sideOffset={4}>
          <div className="flex flex-col items-center">
            <p className="text-primary-foreground font-semibold">
              {contact.cedula}
            </p>
            <p className="text-accent">{contact.estado}</p>
          </div>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
