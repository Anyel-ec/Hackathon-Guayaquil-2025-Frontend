import EvaluateButton from "@/components/evaluator/evaluate-button";
import Expenses from "@/components/evaluator/sections/expenses";
import FinanceAssistant from "@/components/evaluator/sections/finance-assistant/finance-assistant";
import Reputation from "@/components/evaluator/sections/reputation/reputation";
import SocialLinking from "@/components/evaluator/sections/social-linking/social-linking";

export default function Evaluator() {
  return (
    <main className="relative grid sm:grid-cols-2 sm:grid-rows-2 sm:h-screen sm:w-screen">
      <EvaluateButton />
      <SocialLinking />
      <Expenses />
      <Reputation />  
      <FinanceAssistant />
    </main>
  );
}
