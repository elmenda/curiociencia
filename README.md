# 🔬 CurioCiencia v0.2

Aplicación educativa responsive para Ciencias de la Naturaleza de 4.º de Primaria.

## Esta versión incluye

- Tema 1: **¿Cuidas tu salud?**
- Lección interactiva: salud física, mental y social.
- Lección interactiva: prevención, hábitos saludables, revisiones médicas y vacunas.
- Banco de 18 preguntas; cada partida selecciona 10 y mezcla respuestas.
- Feedback pedagógico al fallar y explicación al acertar.
- Puntuación, estrellas y progreso persistente en `localStorage`.
- Diseño mobile-first compatible con móvil, tablet y escritorio.
- Arquitectura separada entre contenido, modelos, servicios y componentes para añadir nuevos temas sin rehacer el motor.

## Ejecutar

```bash
npm install
npm start
```

Abre `http://localhost:4200`.

## Estructura para ampliar contenido

Los temas están en `src/app/content`. Para el Tema 2 se puede crear `topic-02` con sus lecciones y preguntas y registrarlo en `ContentService`.

## Nota sobre el contenido

El contenido de estudio está redactado específicamente para CurioCiencia a partir de los conceptos facilitados para el Tema 1. No se incluyen fotografías ni reproducciones de las páginas del libro.

## v0.2

- Lecciones por bloques reutilizables.
- Contenido ampliado de las páginas 8-9: salud física, mental y social, servicios sanitarios y prevención.
- Banco de 30 preguntas.
- ESLint, Prettier, VS Code y .gitignore configurados.
