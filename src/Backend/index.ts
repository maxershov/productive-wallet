import { Task } from '../../types';

export function getTasks(): Task[] {
    return [{
        Date: '2021-06-19T21:00:00.000Z',
        ID: 1,
        Type: 'TASK',
        User: 'Max',
        Text: 'Second Task'
    },
    {
        Date: '2021-06-19T22:00:00.000Z',
        ID: 2,
        Type: 'TASK',
        User: 'John',
        Text: 'Second Task'
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