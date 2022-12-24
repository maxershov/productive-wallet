import { Balance } from './Balance';
import { Task as TaskType } from '../../types';
import { getLocalData } from '@/BFF/getLocalData';
import { fetchData } from '@/BFF/fetchData';
import { Task } from './Task';

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
    this.tasks = this.data.map((task: TaskType) => new Task(task));
    this.balance = new Balance(0);
    this.name = 'TEST NAME';
  }

  async syncData(): Promise<void> {
    this.data = await fetchData();
    this.tasks = this.data.Tasks.map((task: TaskType) => new Task(task));
    this.balance = new Balance(0);
    this.name = 'TEST NAME';
  }

  getTaskByID(id: number): TaskType {
    return this.tasks.find((task) => task.ID === id);
  }

  updateTask(task: TaskType): void {
    const taskIndex = this.tasks.findIndex((taskIn) => taskIn.ID === task.ID);
    this.tasks[taskIndex] = new Task(task);
  }
}
