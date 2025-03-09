import { cn } from "@/lib/utils";

interface EvaluatorSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function EvaluatorSection({
  title,
  children,
  className
}: EvaluatorSectionProps) {
  return (
    <section className={cn("h-[50vh] sm:h-auto flex flex-col gap-4 p-4 bg-accent hover:bg-background transition-colors border-2 border-background rounded-lg", className)}>
      <h2 className="text-center text-lg font-bold">{title}</h2>
      {children}
    </section>
  );
}
