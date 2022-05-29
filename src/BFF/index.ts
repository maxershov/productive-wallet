import { Task } from '../../types';

export function getTasks(): Task[] {
    return [{
        date: '2021-06-19T21:00:00.000Z',
        ID: 1,
        type: 'TASK',
        user: 'Max',
        title: 'First Task'
    },
    {
        date: '2021-06-19T22:00:00.000Z',
        ID: 2,
        type: 'TASK',
        user: 'John',
        title: 'Second Task'
    }
    ]
}

export function addTask(task: Task): Task[] {
    return [...this.getTasks(), task];
}

export function getUser(): any {

}

export function getBalance(): any {

}