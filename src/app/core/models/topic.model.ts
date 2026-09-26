import { type Lesson } from './lesson.model';
import { type Question } from './question.model';
export interface Topic {
  id: string;
  number: number;
  title: string;
  description: string;
  emoji: string;
  lessons: Lesson[];
  questions: Question[];
}
