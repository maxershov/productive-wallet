export class Balance {

    amount: number;

    constructor(amount: number) {
        this.amount = amount || 0;
    }

    getAmount(): number {
        return this.amount;
    }

    add(value: number) {
        this.amount += value;
    }

    withdraw(value: number) {
        this.amount -= value;
    }
}


