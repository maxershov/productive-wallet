import { Balance } from './Balance';
import { Task as TaskType } from '../../types';
import { getLocalData } from '@/BFF/getLocalData';
import { fetchDataFromDb } from '@/BFF/fetchDataFromDb';
import { Task } from './Task';
import { saveLocalData } from '@/BFF/saveLocalData';

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

  // TODO: DELETE
  logTasks() {
    console.log(this.tasks);
  }

  getData(): void {
    this.data = getLocalData();
    this.tasks = this.data.map((task: TaskType) => new Task(task));
    this.balance = new Balance(0);
    this.name = 'TEST NAME';
  }

  async fetchData(): Promise<void> {
    this.data = await fetchDataFromDb();
    this.tasks = this.data.Tasks.map((task: TaskType) => new Task(task));
    saveLocalData(this.data);
  }

  getTaskByID(id: number): TaskType {
    return this.tasks.find((task) => task.ID === id);
  }

  updateTask(task: TaskType): void {
    const taskIndex = this.tasks.findIndex((taskIn) => taskIn.ID === task.ID);
    this.tasks[taskIndex] = new Task(task);
    
    saveLocalData(this.tasks);
  }
}

export const user = new User();