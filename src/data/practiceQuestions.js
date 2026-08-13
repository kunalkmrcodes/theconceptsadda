import { class10Practice } from './practiceClass10.js';
import { class9Practice } from './practiceClass9.js';

export const allPracticeQuestions = {
  10: class10Practice,
  9: class9Practice
};

export function getChapterQuestions(classNum, chapterId) {
  const chapters = allPracticeQuestions[classNum] || [];
  return chapters.find(c => c.id === chapterId) || null;
}
