import Expenses from "@/components/evaluator/sections/expenses";
import FinanceAssistant from "@/components/evaluator/sections/finance-assistant";
import Reputation from "@/components/evaluator/sections/reputation";
import SocialLinking from "@/components/evaluator/sections/social-linking";

export default function Evaluator() {
  return (
    <main className="relative grid grid-cols-2 grid-rows-2 h-screen w-screen">
      <button className="absolute bottom-1/2 right-1/2 translate-1/2 text-primary-foreground rounded-full h-24 w-24 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform bg-primary hover:bg-primary/90">
        Evaluar
      </button>
      <SocialLinking />
      <Expenses />
      <Reputation />
      <FinanceAssistant />
    </main>
  );
}
