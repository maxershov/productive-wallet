export type Task = {
  ID: number;
  type: string;
  userId: number;
  title: string;
  price: number;
  date?: string;
};

export type User = {
  name: string;
  balance: number;
};
