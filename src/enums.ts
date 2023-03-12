export const TASK_TYPE = {
  HABIT: 'HABIT',
};

export type FocusValues = 'title' | 'type' | 'price';
type FocusType = {
  [k: string]: FocusValues;
};

export const FOCUS: FocusType = {
  TITLE: 'title',
  TYPE: 'type',
  PRICE: 'price',
};
