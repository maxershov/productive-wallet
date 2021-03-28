export class Task {
    title: string;

    type: string;

    ID: number;

    constructor(title: string) {
        this.type = 'default';
        this.title = title;
    }
}


