import StartInput, { StartInputType } from "@/actions/start/models/start-input";
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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Contact, ContactStatus } from "@/lib/models/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogDescription } from "@radix-ui/react-dialog";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { PlusCircle } from "lucide-react";
import { useForm } from "react-hook-form";

interface AddReputationContactProps {
  total: number;
  addContact: (contact: Contact) => void;
}

export default function AddReputationContactButton({
  total,
  addContact,
}: AddReputationContactProps) {
  const angle: number = 0;
  const x: string = `calc(4.5rem * ${Math.cos(angle)})`;
  const y: string = `calc(4.5rem * ${Math.sin(angle)})`;

  const form = useForm<StartInputType>({
    resolver: zodResolver(StartInput),
    defaultValues: {
      cedula: "",
    },
    mode: "onChange",
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className={
            "absolute rounded-full bg-background hover:bg-accent transition-colors cursor-pointer"
          }
          style={{
            top: `calc(50% - 16px + ${y})`,
            left: `calc(50% - 16px + ${x})`,
          }}
        >
          <PlusCircle color="var(--secondary-foreground)" size="32px" />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Añadir Contacto de Reputación</DialogTitle>
          <DialogDescription>
            Solicita a un conocido tuyo que respalde tu reputación.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            className="flex flex-col items-center"
            onSubmit={form.handleSubmit((data) => {
              addContact({
                cedula: data.cedula,
                estado: ContactStatus.Pending,
              });
              form.reset();
            })}
          >
            <FormField
              control={form.control}
              name="cedula"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cédula de tu conocido:</FormLabel>
                  <FormControl>
                    <InputOTP
                      maxLength={10}
                      pattern={REGEXP_ONLY_DIGITS}
                      {...field}
                    >
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
            <DialogClose asChild>
              <Button
                type="submit"
                disabled={!form.formState.isValid}
                className="w-full mt-4"
              >
                Solicitar Respaldo
              </Button>
            </DialogClose>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
