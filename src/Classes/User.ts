import { Balance } from "./Balance";
import { Task as TaskType } from "../../types";
import {
  addTask,
  getData,
} from "../BFF";
import { Task } from "./Task";

export class User {
  name: string;

  balance: Balance;

  tasks: TaskType[];

  data: any;

  ID: number;

  constructor() {
    this.data = {};
    this.getData();
  }

  async getData() {
    this.data = await getData();
    this.tasks = this.data.Tasks.map((task: TaskType) => new Task(task));
    this.balance = new Balance(this.data.balance.amount);
    this.name = this.data.name;
  }

  getTaskByID(id: number): TaskType {
    return this.tasks.find((task) => task.ID === id);
  }

  saveData(data: string) {
    
  }

  addTask(task: TaskType): Promise<TaskType[]> {
    return addTask(task);
  }

  updateTask(task:TaskType) {
      console.log(task.title)
    const taskIndex = this.tasks.findIndex(task => task.ID === task.ID);
    this.tasks[taskIndex] = new Task(task);

    console.log(this.tasks);
  }
}
