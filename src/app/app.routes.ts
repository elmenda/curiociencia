import { type Routes } from '@angular/router';
export const routes: Routes = [
  { path: '', loadComponent: () => import('./features/home/home').then(m => m.Home) },
  {
    path: 'tema/:topicId',
    loadComponent: () => import('./features/topic/topic').then(m => m.TopicPage),
  },
  {
    path: 'tema/:topicId/aprender/:lessonId',
    loadComponent: () => import('./features/lesson/lesson').then(m => m.LessonPage),
  },
  {
    path: 'tema/:topicId/practicar',
    loadComponent: () => import('./features/quiz/quiz').then(m => m.QuizPage),
  },
  {
    path: 'tema/:topicId/resultado',
    loadComponent: () => import('./features/result/result').then(m => m.ResultPage),
  },
  { path: '**', redirectTo: '' },
];
