import type { Lesson } from '../../core/models/lesson.model';

export const DIETA_LESSON: Lesson = {
  id: 'dieta-saludable',
  title: 'La dieta saludable',
  subtitle: 'Elegir alimentos variados y adecuados',
  description: 'Aprende qué tipos de alimentos encontramos y cómo formar una dieta saludable.',
  sections: [
    { id: 'tipos', title: 'Tipos de alimentos', emoji: '🛒', accent: 'green', blocks: [
      { type: 'cards', title: 'Según cómo se preparan', items: [
        { title: 'Naturales o mínimamente procesados', description: 'No tienen ingredientes añadidos o solo han pasado procesos sencillos para facilitar su consumo o conservación.', emoji: '🍅' },
        { title: 'Procesados', description: 'Son alimentos a los que se añaden sustancias como sal, azúcar, aceite o conservantes.', emoji: '🧀' },
        { title: 'Ultraprocesados', description: 'Se elaboran industrialmente a partir de otros alimentos y cambian mucho respecto a los alimentos de origen.', emoji: '🍩' },
      ]},
      { type: 'important', title: '💡 Para una dieta saludable', text: 'Conviene consumir principalmente alimentos naturales o mínimamente procesados y evitar los ultraprocesados.' },
    ]},
    { id: 'que-es-dieta', title: '¿Qué es la dieta?', emoji: '🥗', accent: 'blue', blocks: [
      { type: 'text', text: 'La dieta es la cantidad y el tipo de alimentos que una persona toma cada día. Es saludable cuando aporta las sustancias que nuestro cuerpo necesita.' },
      { type: 'important', title: '⚠️ Atención', text: 'Dieta no significa “comer para adelgazar”. Todas las personas tenemos una dieta: es lo que comemos habitualmente.' },
    ]},
    { id: 'plato', title: '¿Cómo lleno mi plato?', emoji: '🍽️', accent: 'orange', blocks: [
      { type: 'list', title: 'Recomendaciones importantes', items: [
        { title: 'Tomar cada día muchas frutas y verduras, mejor enteras que en zumos o batidos.', emoji: '🍓' },
        { title: 'Elegir pan, pasta y arroz integrales.', emoji: '🌾' },
        { title: 'Usar aceites vegetales, como el aceite de oliva, y evitar grasas animales como la mantequilla.', emoji: '🫒' },
        { title: 'Consumir legumbres con frecuencia.', emoji: '🫘' },
        { title: 'Preferir pescado o aves y reducir carne roja y embutidos.', emoji: '🐟' },
        { title: 'No abusar de huevos, leche y derivados.', emoji: '🥚' },
        { title: 'Beber cada día entre 1,5 y 2 litros de agua y no sustituirla por otras bebidas.', emoji: '💧' },
      ]},
    ]},
    { id: 'azucar', title: 'Cuidado con el exceso de azúcar', emoji: '🍬', accent: 'purple', blocks: [
      { type: 'text', text: 'Nuestro organismo obtiene de forma natural el azúcar que necesita de los alimentos de una dieta saludable. Tomar demasiado azúcar puede favorecer problemas como el sobrepeso o las caries.' },
      { type: 'important', title: '💡 Recuerda', text: 'Cereales azucarados, bollos, chucherías y otros dulces ultraprocesados suelen contener grandes cantidades de azúcar, por lo que es mejor evitarlos.' },
    ]},
  ],
};
