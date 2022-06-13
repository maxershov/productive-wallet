import { Balance } from "./Balance";
import { Task as TaskType } from "../../types";
import {
  addTask,
  getData,
  getDataFromLocalStorage,
  saveDataToLocalStorage,
} from "../BFF";

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

  getTasks(fromBackend: boolean) {
      // TODO: move to new method
    if (fromBackend) {
      return getData();
    }
    return getDataFromLocalStorage();
  }

  saveData(data: string) {
    saveDataToLocalStorage(data);
  }

  addTask(task: TaskType): Promise<TaskType[]> {
    return addTask(task);
  }
}
