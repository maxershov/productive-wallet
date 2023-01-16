import { user } from './User';

export class Balance {
  amount: number;

  constructor(amount: number) {
    this.amount = amount || 0;
  }

  getAmount(): number {
    return this.amount;
  }

  add(value: number): void {
    this.amount += value;
    user.data.user.balance = this.amount;
  }

  withdraw(value: number): void {
    this.amount -= value;
    user.data.user.balance = this.amount;
  }
}
