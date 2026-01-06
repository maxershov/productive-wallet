export class Balance {
  private _amount: number;
  private onBalanceChange?: (newAmount: number) => void;

  constructor(amount: number = 0, onBalanceChange?: (newAmount: number) => void) {
    this._amount = amount;
    this.onBalanceChange = onBalanceChange;
  }

  get amount(): number {
    return this._amount;
  }

  set amount(value: number) {
    this._amount = value;
    this.onBalanceChange?.(this._amount);
  }

  add(value: number): void {
    this.amount += value;
  }

  withdraw(value: number): void {
    this.amount -= value;
  }
}
