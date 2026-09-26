export type QuestionDifficulty = 'easy' | 'medium' | 'hard';
export interface Answer {
  id: string;
  text: string;
  correct: boolean;
  emoji?: string;
}
export interface Question {
  id: string;
  question: string;
  answers: Answer[];
  explanation: string;
  hint?: string;
  difficulty: QuestionDifficulty;
  points: number;
}
