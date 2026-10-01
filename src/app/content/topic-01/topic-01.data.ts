import { type Topic } from '../../core/models/topic.model';
import { SALUD_LESSON } from './salud.lesson';
import { PREVENCION_LESSON } from './prevencion.lesson';
import { SALUD_QUESTIONS } from './salud.questions';
import { ALIMENTOS_LESSON } from './alimentos.lesson';
import { DIETA_LESSON } from './dieta.lesson';
import { FORMA_LESSON } from './forma.lesson';
export const TOPIC_01: Topic = {
  id: 'tema-1',
  number: 1,
  title: '¿Cuidas tu salud?',
  description: 'Descubre qué significa estar sano, cómo alimentarnos bien, prevenir problemas y mantenernos en forma.',
  emoji: '❤️',
  lessons: [SALUD_LESSON, PREVENCION_LESSON, ALIMENTOS_LESSON, DIETA_LESSON, FORMA_LESSON],
  questions: SALUD_QUESTIONS,
};
