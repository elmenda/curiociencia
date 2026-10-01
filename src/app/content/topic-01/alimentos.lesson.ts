import type { Lesson } from '../../core/models/lesson.model';

export const ALIMENTOS_LESSON: Lesson = {
  id: 'alimentos',
  title: 'Nuestros alimentos',
  subtitle: 'Origen y función de los alimentos',
  description: 'Descubre de dónde proceden los alimentos y para qué los necesita nuestro cuerpo.',
  sections: [
    { id: 'que-son', title: '¿Qué nos aportan los alimentos?', emoji: '🍽️', accent: 'orange', blocks: [
      { type: 'text', text: 'Los alimentos son los productos que comemos y bebemos. Nos proporcionan materiales para crecer y reparar los tejidos y energía para realizar nuestras actividades diarias.' },
      { type: 'important', title: '💡 Idea clave', text: 'Los alimentos nos aportan materiales y energía.' },
    ]},
    { id: 'origen', title: 'Los alimentos según su origen', emoji: '🌍', accent: 'green', blocks: [
      { type: 'text', text: 'Según su procedencia, los alimentos pueden ser de origen animal, vegetal o mineral.' },
      { type: 'cards', title: 'Los tres orígenes', items: [
        { title: 'Origen animal', description: 'Carne, huevos, leche y pescado.', emoji: '🐟' },
        { title: 'Origen vegetal', description: 'Cereales, frutas, verduras y hortalizas.', emoji: '🥕' },
        { title: 'Origen mineral', description: 'El agua y la sal.', emoji: '💧' },
      ]},
      { type: 'important', title: '🧠 Truco', text: 'Animal = procede de animales. Vegetal = procede de plantas. Mineral = como el agua y la sal.' },
    ]},
    { id: 'funcion', title: 'Los alimentos según su función', emoji: '⚙️', accent: 'purple', blocks: [
      { type: 'text', text: 'También podemos clasificar los alimentos según la función principal que realizan en nuestro organismo.' },
      { type: 'cards', title: 'Tres funciones', items: [
        { title: 'Energéticos', description: 'Dan energía para realizar actividades físicas y pensar. Ejemplos: arroz, pasta, pan y aceites.', emoji: '⚡' },
        { title: 'Constructores', description: 'Aportan materiales para crecer y reparar tejidos. Ejemplos: leche, frutos secos, carne, pescado y huevos.', emoji: '🧱' },
        { title: 'Reguladores', description: 'Aportan sustancias que ayudan a que el organismo funcione correctamente. Ejemplos: frutas, verduras y hortalizas.', emoji: '🍎' },
      ]},
      { type: 'important', title: '💡 Recuerda', text: 'Energéticos = energía. Constructores = crecer y reparar. Reguladores = funcionar correctamente.' },
    ]},
    { id: 'repaso-alimentos', title: '¡Repaso de alimentos!', emoji: '🌟', accent: 'yellow', blocks: [
      { type: 'list', title: 'Dos formas de clasificarlos', items: [
        { title: 'Según su origen: animal, vegetal y mineral', emoji: '🌍' },
        { title: 'Según su función: energéticos, constructores y reguladores', emoji: '⚙️' },
      ]},
    ]},
  ],
};
