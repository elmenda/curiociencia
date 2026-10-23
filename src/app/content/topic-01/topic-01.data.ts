import { type Topic } from '../../core/models/topic.model';
import { SALUD_LESSON } from './salud.lesson';
import { PREVENCION_LESSON } from './prevencion.lesson';
import { ALIMENTOS_LESSON } from './alimentos.lesson';
import { DIETA_LESSON } from './dieta.lesson';
import { FORMA_LESSON } from './forma.lesson';
import { SALUD_REPASO } from './salud-repaso.questions';

export const TOPIC_01: Topic = {
  id: 'tema-1',
  number: 1,
  title: '¿Cuidas tu salud?',
  description: 'Aprende qué es la salud, los alimentos, la dieta saludable, el ejercicio y la prevención.',
  emoji: '❤️',
  lessons: [SALUD_LESSON, ALIMENTOS_LESSON, DIETA_LESSON, FORMA_LESSON, PREVENCION_LESSON],
  questions: SALUD_REPASO,
};
