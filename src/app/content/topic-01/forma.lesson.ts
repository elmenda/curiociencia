import type { Lesson } from '../../core/models/lesson.model';

export const FORMA_LESSON: Lesson = {
  id: 'estar-en-forma',
  title: 'Estamos en forma',
  subtitle: 'Ejercicio físico y posturas correctas',
  description: 'Descubre por qué el ejercicio es saludable y cómo cuidar la postura.',
  sections: [
    { id: 'beneficios', title: 'Beneficios del ejercicio físico', emoji: '🏃', accent: 'green', blocks: [
      { type: 'text', text: 'Hacer ejercicio es un hábito saludable y aporta muchos beneficios para la salud.' },
      { type: 'list', title: 'El ejercicio...', items: [
        { title: 'Fortalece los huesos y los músculos.', emoji: '💪' },
        { title: 'Es bueno para el corazón y los pulmones.', emoji: '❤️' },
        { title: 'Ayuda a relajarse y a dormir bien.', emoji: '😴' },
        { title: 'Aumenta la agilidad, el equilibrio, la elasticidad, la fuerza y la resistencia.', emoji: '🤸' },
        { title: 'Ayuda a mantener un peso adecuado.', emoji: '⚖️' },
        { title: 'Nos hace sentir bien y nos ayuda a superarnos.', emoji: '🌟' },
      ]},
    ]},
    { id: 'seguridad', title: 'Hacer ejercicio con seguridad', emoji: '🛡️', accent: 'orange', blocks: [
      { type: 'list', title: 'Para prevenir lesiones', items: [
        { title: 'Haz ejercicios de calentamiento antes de empezar.', emoji: '🔥' },
        { title: 'Usa el equipo y las protecciones necesarios.', emoji: '⛑️' },
        { title: 'Descansa cuando te sientas muy fatigado.', emoji: '🧘' },
        { title: 'Haz ejercicios de estiramiento al terminar.', emoji: '🙆' },
      ]},
    ]},
    { id: 'postura', title: 'Cuidamos nuestra postura', emoji: '🪑', accent: 'blue', blocks: [
      { type: 'text', text: 'La espalda soporta buena parte del peso de nuestro cuerpo. Mantener posturas correctas ayuda a prevenir dolores y lesiones.' },
      { type: 'list', title: 'Posturas saludables', items: [
        { title: 'Al lavarnos en el lavabo: espalda recta y rodillas ligeramente flexionadas.', emoji: '🚿' },
        { title: 'Mochila tradicional: los dos tirantes bien ajustados para repartir el peso.', emoji: '🎒' },
        { title: 'Al sentarnos: pies apoyados en el suelo y espalda recta contra el respaldo.', emoji: '🪑' },
        { title: 'Al dormir: de lado o bocarriba, cabeza apoyada en la almohada y rodillas flexionadas.', emoji: '🛏️' },
      ]},
      { type: 'important', title: '💡 Idea clave', text: 'Una buena postura también es una forma de prevenir problemas de salud.' },
    ]},
    { id: 'ocio', title: 'Un ocio saludable', emoji: '🎨', accent: 'purple', blocks: [
      { type: 'text', text: 'El tiempo libre también ayuda a cuidar la salud. Podemos combinar actividades físicas, culturales y de ocio electrónico.' },
      { type: 'cards', title: 'Tipos de ocio', items: [
        { title: 'Ocio deportivo', description: 'Jugar en el parque, ir de excursión o practicar deporte.', emoji: '⚽' },
        { title: 'Ocio cultural', description: 'Leer, visitar un museo o ir al cine.', emoji: '📚' },
        { title: 'Ocio electrónico', description: 'Por ejemplo, jugar a la consola, dedicándole un tiempo controlado.', emoji: '🎮' },
      ]},
      { type: 'important', title: '🌟 Ocio saludable', text: 'Es saludable cuando realizamos actividades variadas y dedicamos solo un tiempo controlado al ocio electrónico.' },
    ]},
  ],
};
