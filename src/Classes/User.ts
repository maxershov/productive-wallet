import { Balance } from './Balance';
import { Task as TaskType } from '../../types';
import { addTask, getData } from '../BFF';
import { newTask } from "../../types";
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
        return getData();
    }

    addTask(task: TaskType) :Promise<TaskType[]> {
        return addTask(task);
    }
}

