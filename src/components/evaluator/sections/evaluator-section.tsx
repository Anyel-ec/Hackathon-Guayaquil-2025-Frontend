interface EvaluatorSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function EvaluatorSection({
  title,
  children,
}: EvaluatorSectionProps) {
  return (
    <section className="h-[50vh] flex flex-col gap-4 p-4 bg-accent hover:bg-background transition-colors border-2 border-background rounded-lg">
      <h2 className="text-center text-lg font-bold">{title}</h2>
      {children}
    </section>
  );
}
