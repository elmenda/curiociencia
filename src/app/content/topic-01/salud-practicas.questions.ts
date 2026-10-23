import { type Question } from '../../core/models/question.model';
import { SALUD_QUESTIONS } from './salud.questions';

// Bancos de práctica diferenciados. Las preguntas del repaso final nunca se toman de aquí.
const range = (from: number, to: number): Question[] =>
  SALUD_QUESTIONS.filter(q => {
    const n = Number(q.id.substring(1));
    return n >= from && n <= to;
  });

export const SALUD_PRACTICAS: Record<string, Question[]> = {
  salud: [...range(1, 4), ...range(11, 12), ...range(14, 16), ...range(19, 25), ...range(29, 29)],
  prevencion: [...range(5, 10), ...range(13, 13), ...range(18, 18), ...range(26, 28), ...range(30, 30)],
  alimentos: range(31, 37),
  'dieta-saludable': range(38, 49),
  'estar-en-forma': range(50, 60),
};
