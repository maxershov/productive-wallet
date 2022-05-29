export type Task = {
    date?: string;
    ID: number;
    type: string;
    userId: number;
    title: string;
    price: number;
}

export type newTask = {
    date?: string;
    type?: string;
    userId: number;
    title: string;
    price?: number;
}
