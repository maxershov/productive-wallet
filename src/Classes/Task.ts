/** //TODO
 * Add default price GLOBAL
 * Add enum for priority, type
 * Generate ID 
 *  */

export class Task {
    title: string;

    priority: string;

    price: number;

    type: string;

    ID: number;

    constructor(title: string, price: number) {
        this.type = 'default';
        this.title = title;
        this.price = price;
    }
}

