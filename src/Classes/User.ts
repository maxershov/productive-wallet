import { Balance } from './Balance';
import { Task as TaskType } from '../../types';
import { getLocalData } from '@/BFF/getLocalData';
import { fetchDataFromDb } from '@/BFF/fetchDataFromDb';
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

  getData(): void {
    this.data = getLocalData();
    this.tasks = this.data.tasks;
    this.balance = new Balance(this.data.user.balance);
    this.name = 'TEST NAME';
  }

  async fetchData(): Promise<void> {
    this.data = await fetchDataFromDb();
    this.tasks = this.data.Tasks;
    saveLocalData(this.data);
  }

  getTaskByID(id: number): TaskType {
    return this.tasks.find((task) => task.ID === id);
  }

  getTaskIndexByID(id: number): number {
    return this.tasks.findIndex((taskIn) => taskIn.ID === id);
  }

  deleteTaskByID(id: number): void {
    const index = this.getTaskIndexByID(id);
    this.tasks.splice(index, 1);
  }

  updateTask(task: TaskType): void {
    const taskIndex = this.getTaskIndexByID(task.ID);
    this.tasks[taskIndex] = task;

    saveLocalData(this.data);
  }

  completeTask(ID: number): void {
    const taskToComplete = this.getTaskByID(ID);
    const addToBalance = taskToComplete.price;

    console.log(this.tasks);
    console.log(this.data.tasks);

    this.deleteTaskByID(ID);

    console.log(this.tasks);
    console.log(this.data.tasks);

    this.balance.add(addToBalance);
    saveLocalData(this.data);
  }
}

export const user = new User();
