import { Injectable } from '@angular/core';
import { type Question } from '../models/question.model';
@Injectable({ providedIn: 'root' })
export class QuizService {
  createRound(questions: Question[], amount = 10): Question[] {
    return this.shuffle(questions)
      .slice(0, Math.min(amount, questions.length))
      .map(q => ({ ...q, answers: this.shuffle(q.answers) }));
  }
  private shuffle<T>(items: T[]): T[] {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }
}
