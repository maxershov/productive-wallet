import { newTask } from "../../types";

export class Task {
    date: string;
    ID: number;
    type: string;
    userId: number;
    title: string;
    price: number;

    constructor({ title, userId, type, price }: newTask) {
        this.title = title;
        this.userId = userId;
        this.type = type;
        this.price = price;
        this.date = new Date().toString();
    }
}
