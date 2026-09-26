export type LessonAccent = 'blue' | 'yellow' | 'green' | 'purple' | 'orange';
export type LessonBlockType = 'text' | 'important' | 'cards' | 'list';

export interface LessonItem {
  title: string;
  description?: string;
  emoji?: string;
}

export interface LessonBlock {
  type: LessonBlockType;
  title?: string;
  text?: string;
  items?: LessonItem[];
}

export interface LessonSection {
  id: string;
  title: string;
  emoji: string;
  accent: LessonAccent;
  blocks: LessonBlock[];
}

export interface Lesson {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  sections: LessonSection[];
}
