import { Injectable } from '@angular/core';
import { TOPIC_01 } from '../../content/topic-01/topic-01.data';
import { type Topic } from '../models/topic.model';
@Injectable({ providedIn: 'root' })
export class ContentService {
  private readonly topics: Topic[] = [TOPIC_01];
  getTopics() {
    return this.topics;
  }
  getTopic(id: string) {
    return this.topics.find(t => t.id === id);
  }
  getLesson(topicId: string, lessonId: string) {
    return this.getTopic(topicId)?.lessons.find(l => l.id === lessonId);
  }
}
