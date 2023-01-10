export type Task = {
  date?: string;
  ID: number;
  type: string;
  userId: number;
  title: string;
  price: number;
};

export type User = {
  name: string;
  balance: number;
};
