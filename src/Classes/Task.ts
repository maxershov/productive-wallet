import { Task as taskType } from "../../types";

export class Task {
  date: string;
  ID: number;
  type: string;
  userId: number;
  title: string;
  price: number;

  constructor({ title, userId, type, price, date, ID }: taskType) {
    console.log("newTask", { title, userId, type, price, ID });
    this.title = title;
    this.userId = userId;
    this.type = type;
    this.price = price;
    this.ID = ID;
    this.date = date || new Date().toString();
  }
}
