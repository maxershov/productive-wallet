import { Balance } from './Balance';
import { Task as TaskType } from '../../types';
import { getTasks } from '../BFF';
import { Task } from '../Classes/Task';

export class User {
    name: string;

    balance: Balance;

    tasks: TaskType[];

    ID: number;


    constructor(name: string) {
        this.name = name;
        this.balance = new Balance();
        this.tasks = [];
    }

    getTasks() {
        return getTasks();
    }

    addTask(title: string, price: number, type: string) {
        const newTask = new Task({ title, price, userId: this.ID, type  });
        this.tasks = [...this.tasks, newTask];
    }
}

