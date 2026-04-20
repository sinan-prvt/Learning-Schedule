import { week1 } from './data/week1';
import { week2 } from './data/week2';
import { week3 } from './data/week3';
import { week4 } from './data/week4';
import { week5 } from './data/week5';
import { week6 } from './data/week6';
import { week7 } from './data/week7';
import { week8 } from './data/week8';
import { week9 } from './data/week9';
import { week10 } from './data/week10';

export const roadmapData = [
  week1,
  week2,
  week3,
  week4,
  week5,
  week6,
  week7,
  week8,
  week9,
  week10
];

export const getDayContent = (weekId, dayNumber) => {
  const week = roadmapData.find(w => w.id === weekId);
  return week ? week.days.find(d => d.day_number === dayNumber) : null;
};
