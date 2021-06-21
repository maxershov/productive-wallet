import { Balance } from './Balance';
import { Task } from '../../types';
import { getTasks } from '../Backend';

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

    getTasks() {
        return getTasks();
    }

    addTask(title: string, price: number) {

    }
}

