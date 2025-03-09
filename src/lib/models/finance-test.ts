export interface FinanceTestQuestion {
  question: string;
  options: string[];
  answer: number;
}

export interface FinanceTest {
  questions: FinanceTestQuestion[];
  score: number;
}