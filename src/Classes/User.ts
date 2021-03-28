import { Balance } from './Balance';
import { Task } from './Task';

export class User {
    name: string;

    balance: Balance;

    tasks: Task[];

    ID: number;

    constructor(name: string) {
        this.name = name;
        this.balance = new Balance();
        this.tasks = [];
    }

    addTask(title: string, price: number) {
        const newTask = new Task(title, price);
        this.tasks.push(newTask);
    }
}

