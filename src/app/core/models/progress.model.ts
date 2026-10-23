export interface TopicProgress {
  topicId: string;
  completedLessons: string[];
  bestScore: number;
  attempts: number;
  totalPoints: number;
  stars: number;
}
export interface QuizResult {
  topicId: string;
  lessonId?: string;
  score: number;
  total: number;
  points: number;
  wrongQuestionIds: string[];
}
