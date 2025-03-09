import Expenses from "@/components/evaluator/sections/expenses";
import FinanceAssistant from "@/components/evaluator/sections/finance-assistant";
import Reputation from "@/components/evaluator/sections/reputation";
import SocialLinking from "@/components/evaluator/sections/social-linking";

export default function Evaluator() {
  return (
    <main className="relative grid sm:grid-cols-2 sm:grid-rows-2 sm:h-screen sm:w-screen">
      <button className="fixed sm:absolute top-2 left-2 sm:top-auto sm:left-auto sm:bottom-1/2 sm:right-1/2 sm:translate-y-1/2 sm:translate-x-1/2 text-primary-foreground rounded-full h-20 w-20 sm:h-24 sm:w-24 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform bg-primary hover:bg-primary/90">
        Evaluar
      </button>
      <SocialLinking />
      <Expenses />
      <Reputation />  
      <FinanceAssistant />
    </main>
  );
}
