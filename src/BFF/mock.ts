import { Task } from 'types';

export const task0: Task = {
  ID: 0,
  type: 'WORK',
  userId: 0,
  title: 'FIRST TASK',
  price: 10,
};

export const task1: Task = {
  ID: 1,
  type: 'HEALTH',
  userId: 0,
  title: 'SECOND TASK',
  price: 50,
};

export const task2: Task = {
  ID: 2,
  type: 'HABIT',
  userId: 0,
  title: 'THIRD TASK',
  price: 35,
};

export const tasks = [task0, task1, task2];