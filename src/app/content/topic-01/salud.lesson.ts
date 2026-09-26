import type { Lesson } from '../../core/models/lesson.model';

export const SALUD_LESSON: Lesson = {
  id: 'salud',
  title: '¿Qué es la salud?',
  subtitle: 'Estar sano es sentirnos bien por dentro y por fuera',
  description: 'La salud incluye nuestro bienestar físico, mental y social.',
  sections: [
    {
      id: 'concepto-salud',
      title: 'La salud tiene tres partes',
      emoji: '🌟',
      accent: 'purple',
      blocks: [
        {
          type: 'text',
          text: 'Tenemos una buena salud cuando nos sentimos bien física, mental y socialmente. Por eso, estar sano no consiste solamente en no tener una enfermedad.',
        },
        {
          type: 'cards',
          title: 'Las tres partes de la salud',
          items: [
            {
              title: 'Salud física',
              description: 'Tiene que ver con nuestro cuerpo.',
              emoji: '🏃‍♀️',
            },
            {
              title: 'Salud mental',
              description: 'Tiene que ver con cómo nos sentimos.',
              emoji: '😊',
            },
            {
              title: 'Salud social',
              description: 'Tiene que ver con nuestra relación con los demás.',
              emoji: '👫',
            },
          ],
        },
        {
          type: 'important',
          title: '💡 Recuerda',
          text: 'Para hablar de una buena salud debemos tener en cuenta las tres: física, mental y social.',
        },
      ],
    },
    {
      id: 'salud-fisica',
      title: 'Salud física',
      emoji: '🏃‍♀️',
      accent: 'blue',
      blocks: [
        {
          type: 'text',
          text: 'Tenemos una buena salud física cuando nuestro cuerpo funciona correctamente y podemos realizar nuestras actividades sin dolor ni dificultades.',
        },
        {
          type: 'important',
          title: '💡 Pista para recordarlo',
          text: 'Física = CUERPO. Si hablamos de cómo funciona nuestro cuerpo, hablamos de salud física.',
        },
      ],
    },
    {
      id: 'salud-mental',
      title: 'Salud mental',
      emoji: '😊',
      accent: 'yellow',
      blocks: [
        {
          type: 'text',
          text: 'Tenemos una buena salud mental cuando estamos contentos con nosotros mismos y sabemos manejar nuestras emociones.',
        },
        {
          type: 'important',
          title: '💡 Pista para recordarlo',
          text: 'Mental = EMOCIONES. Reconocer cómo nos sentimos y manejar nuestras emociones forma parte de la salud mental.',
        },
      ],
    },
    {
      id: 'salud-social',
      title: 'Salud social',
      emoji: '👫',
      accent: 'green',
      blocks: [
        {
          type: 'text',
          text: 'Tenemos una buena salud social cuando nos relacionamos bien con las demás personas, como nuestra familia, amistades y compañeros.',
        },
        {
          type: 'important',
          title: '💡 Pista para recordarlo',
          text: 'Social = LOS DEMÁS. Si hablamos de convivir y relacionarnos con otras personas, hablamos de salud social.',
        },
      ],
    },
    {
      id: 'servicios-sanitarios',
      title: '¿Dónde nos ayudan a cuidar la salud?',
      emoji: '🏥',
      accent: 'blue',
      blocks: [
        {
          type: 'text',
          text: 'Para solucionar los problemas de salud existen distintos servicios sanitarios. En ellos trabajan profesionales especializados que se encargan de cuidar nuestra salud.',
        },
        {
          type: 'cards',
          title: 'Servicios sanitarios',
          items: [
            {
              title: 'Centros de salud',
              description: 'Podemos acudir a ellos para recibir atención sanitaria.',
              emoji: '🩺',
            },
            {
              title: 'Hospitales',
              description: 'Son otro de los servicios donde se atienden problemas de salud.',
              emoji: '🏥',
            },
            {
              title: 'Servicios de urgencias',
              description: 'Atienden situaciones que necesitan atención urgente.',
              emoji: '🚑',
            },
          ],
        },
        {
          type: 'important',
          title: '💡 Recuerda',
          text: 'Centro de salud, hospital y servicio de urgencias son servicios sanitarios.',
        },
      ],
    },
    {
      id: 'resumen-salud',
      title: '¡Repaso rápido!',
      emoji: '🧠',
      accent: 'purple',
      blocks: [
        {
          type: 'cards',
          title: '¿Lo recuerdas?',
          items: [
            { title: 'Física', description: 'Nuestro cuerpo.', emoji: '🏃‍♀️' },
            {
              title: 'Mental',
              description: 'Cómo nos sentimos y nuestras emociones.',
              emoji: '😊',
            },
            { title: 'Social', description: 'Cómo nos relacionamos con los demás.', emoji: '👫' },
            {
              title: 'Servicios sanitarios',
              description: 'Centros de salud, hospitales y urgencias.',
              emoji: '🏥',
            },
          ],
        },
        {
          type: 'important',
          title: '🌟 Idea clave',
          text: 'Cuidar la salud significa cuidar nuestro cuerpo, nuestras emociones y nuestras relaciones con los demás.',
        },
      ],
    },
  ],
};
