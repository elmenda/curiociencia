import type { Lesson } from '../../core/models/lesson.model';

export const PREVENCION_LESSON: Lesson = {
  id: 'prevencion',
  title: 'La prevención',
  subtitle: 'Cuidarnos antes de que aparezcan problemas',
  description: 'Prevenir consiste en realizar acciones para evitar problemas de salud.',
  sections: [
    {
      id: 'que-es-prevenir',
      title: '¿Qué significa prevenir?',
      emoji: '🛡️',
      accent: 'purple',
      blocks: [
        {
          type: 'text',
          text: 'La prevención consiste en realizar acciones para intentar evitar que aparezcan problemas de salud.',
        },
        {
          type: 'cards',
          title: 'Tres formas de prevención que vamos a recordar',
          items: [
            { title: 'Hábitos saludables', emoji: '🥗' },
            { title: 'Revisiones médicas', emoji: '🩺' },
            { title: 'Vacunas', emoji: '💉' },
          ],
        },
        {
          type: 'important',
          title: '💡 Recuerda',
          text: 'Prevenir es actuar antes para cuidar nuestra salud.',
        },
      ],
    },
    {
      id: 'habitos-saludables',
      title: 'Hábitos saludables',
      emoji: '🥗',
      accent: 'green',
      blocks: [
        {
          type: 'text',
          text: 'Los hábitos saludables son costumbres que ayudan a mantenernos sanos. Alimentarnos bien, hacer ejercicio, descansar y cuidar nuestro cuerpo son ejemplos de hábitos saludables.',
        },
        {
          type: 'list',
          title: 'Algunos ejemplos',
          items: [
            { title: 'Alimentarnos de forma saludable', emoji: '🍎' },
            { title: 'Realizar actividad física', emoji: '🚴' },
            { title: 'Descansar lo necesario', emoji: '😴' },
          ],
        },
        {
          type: 'important',
          title: '💡 Recuerda',
          text: 'Un hábito es algo que hacemos de forma habitual. Si nos ayuda a cuidar la salud, es un hábito saludable.',
        },
      ],
    },
    {
      id: 'revisiones-medicas',
      title: 'Revisiones médicas',
      emoji: '🩺',
      accent: 'blue',
      blocks: [
        {
          type: 'text',
          text: 'Las revisiones médicas permiten comprobar nuestro estado de salud y ayudan a detectar posibles problemas.',
        },
        {
          type: 'important',
          title: '💡 Recuerda',
          text: 'No tenemos que esperar a encontrarnos mal para cuidar nuestra salud. Las revisiones también forman parte de la prevención.',
        },
      ],
    },
    {
      id: 'vacunas',
      title: 'Las vacunas',
      emoji: '💉',
      accent: 'purple',
      blocks: [
        {
          type: 'text',
          text: 'Las vacunas nos ayudan a protegernos frente a algunas enfermedades y forman parte de las medidas de prevención.',
        },
        {
          type: 'important',
          title: '💡 Recuerda',
          text: 'Vacunas = protección frente a algunas enfermedades.',
        },
      ],
    },
    {
      id: 'resumen-prevencion',
      title: '¡Repaso de prevención!',
      emoji: '🌟',
      accent: 'orange',
      blocks: [
        {
          type: 'cards',
          title: 'Tres ideas importantes',
          items: [
            {
              title: 'Hábitos saludables',
              description: 'Costumbres que nos ayudan a mantenernos sanos.',
              emoji: '🥗',
            },
            {
              title: 'Revisiones médicas',
              description: 'Sirven para comprobar nuestro estado de salud.',
              emoji: '🩺',
            },
            {
              title: 'Vacunas',
              description: 'Ayudan a protegernos frente a algunas enfermedades.',
              emoji: '💉',
            },
          ],
        },
        {
          type: 'important',
          title: '🧠 Idea clave',
          text: 'Hábitos saludables + revisiones médicas + vacunas = formas de prevención.',
        },
      ],
    },
  ],
};
