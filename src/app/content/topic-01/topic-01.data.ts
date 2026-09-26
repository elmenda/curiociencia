import { type Topic } from '../../core/models/topic.model';
import { SALUD_LESSON } from './salud.lesson';
import { PREVENCION_LESSON } from './prevencion.lesson';
import { SALUD_QUESTIONS } from './salud.questions';
export const TOPIC_01: Topic = {
  id: 'tema-1',
  number: 1,
  title: '¿Cuidas tu salud?',
  description: 'Descubre qué significa estar sano y cómo podemos prevenir problemas de salud.',
  emoji: '❤️',
  lessons: [SALUD_LESSON, PREVENCION_LESSON],
  questions: SALUD_QUESTIONS,
};
