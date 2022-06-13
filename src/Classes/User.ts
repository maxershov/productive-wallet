import { Balance } from "./Balance";
import { Task as TaskType } from "../../types";
import {
  addTask,
  getDataFromLocalStorage,
  saveDataToLocalStorage,
} from "../BFF";
import { Task } from "./Task";

export class User {
  name: string;

  balance: Balance;

  tasks: TaskType[];

  data: any;

  ID: number;

  constructor() {
    this.data = getDataFromLocalStorage();
    console.log(this.data);

    this.name = this.data.name;
    this.balance = new Balance(this.data.balance.amount);
    this.tasks = this.data.Tasks.map((task: TaskType) => new Task(task));
  }

  getData() {
    return getDataFromLocalStorage();
  }

  getTaskByID(id: number): TaskType {
    return this.tasks.find((task) => task.ID === id);
  }

  saveData(data: string) {
    saveDataToLocalStorage(data);
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
