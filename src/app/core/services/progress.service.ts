import { Injectable, signal } from '@angular/core';
import { type QuizResult, type TopicProgress } from '../models/progress.model';
@Injectable({ providedIn: 'root' })
export class ProgressService {
  private readonly key = 'curio-ciencia-progress-v1';
  private readonly state = signal<Record<string, TopicProgress>>(this.load());
  readonly progress = this.state.asReadonly();
  get(topicId: string): TopicProgress {
    return (
      this.state()[topicId] ?? {
        topicId,
        completedLessons: [],
        bestScore: 0,
        attempts: 0,
        totalPoints: 0,
        stars: 0,
      }
    );
  }
  completeLesson(topicId: string, lessonId: string) {
    const p = this.get(topicId);
    if (!p.completedLessons.includes(lessonId)) {
      this.save({ ...p, completedLessons: [...p.completedLessons, lessonId] });
    }
  }
  saveQuiz(result: QuizResult) {
    const p = this.get(result.topicId);
    const pct = result.total ? Math.round((result.score / result.total) * 100) : 0;
    const stars = pct >= 90 ? 3 : pct >= 70 ? 2 : pct >= 50 ? 1 : 0;
    this.save({
      ...p,
      bestScore: Math.max(p.bestScore, pct),
      attempts: p.attempts + 1,
      totalPoints: p.totalPoints + result.points,
      stars: Math.max(p.stars, stars),
    });
    sessionStorage.setItem('curio-ciencia-last-result', JSON.stringify(result));
  }
  lastResult(): QuizResult | null {
    try {
      return JSON.parse(
        sessionStorage.getItem('curio-ciencia-last-result') ?? 'null',
      ) as QuizResult | null;
    } catch {
      return null;
    }
  }
  private save(p: TopicProgress) {
    const next = { ...this.state(), [p.topicId]: p };
    this.state.set(next);
    localStorage.setItem(this.key, JSON.stringify(next));
  }
  private load(): Record<string, TopicProgress> {
    try {
      return JSON.parse(localStorage.getItem(this.key) ?? '{}') as Record<string, TopicProgress>;
    } catch {
      return {};
    }
  }
}
