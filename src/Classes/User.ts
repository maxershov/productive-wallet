import { Balance } from './Balance';
import { Task as TaskType, User as UserType } from '../../types';
import { getLocalData } from '@/BFF/getLocalData';
import { fetchDataFromDb } from '@/BFF/fetchDataFromDb';
import { saveLocalData } from '@/BFF/saveLocalData';
import { syncDataToDb } from '@/BFF/syncDataToDb';

export class User {
  name: string;

  balance: Balance;

  tasks: TaskType[];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;

  ID: number;

  constructor() {
    this.data = {};
    this.tasks = [];
    this.balance = new Balance(0);
  }

  async getData(): Promise<{
    user: UserType;
    tasks: TaskType[];
  }> {
    this.data = getLocalData();
    this.tasks = this.data.tasks;
    this.balance = new Balance(this.data.user.balance);
    this.name = this.data.user.name;
    return this.data;
  }

  async fetchData(): Promise<void> {
    this.data = await fetchDataFromDb();
    this.tasks = this.data.tasks;
    this.balance = new Balance(this.data.user.balance);
    this.name = this.data.user.name;
    saveLocalData(this.data);
  }

  async syncData(): Promise<void> {
    const dataString = JSON.stringify({ data: this.data });
    syncDataToDb(dataString);
  }

  getID() {
    const IDs = this.tasks.map((task) => task.ID);
    return Math.max(...IDs) + 1;
  }

  createTask() {
    const newTask = {
      title: 'NEW TASK',
      type: '',
      price: 0,
      ID: this.getID(),
      userId: 0,
    };
    this.tasks.push(newTask);
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

    this.deleteTaskByID(ID);

    this.balance.add(addToBalance);
    saveLocalData(this.data);
  }

  completeHabit(ID: number): void {
    const taskToComplete = this.getTaskByID(ID);
    const addToBalance = taskToComplete.price;

    this.balance.add(addToBalance);
    saveLocalData(this.data);
  }
}

export const user = new User();
