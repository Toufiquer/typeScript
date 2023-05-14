/*   getter and setter  */
class Balance2 {
  constructor(public name: string, private balance: number) {
    this.name = name;
    this.balance = balance;
  }
  // getter
  get getBalance() {
    return this.balance;
  }

  // setter
  set deposit(amount: number) {
    this.balance = this.balance + amount;
  }
  set withDraw(amount: number) {
    this.balance = this.balance - amount;
  }
}
const account22 = new Balance2("account22", 300);
account22.deposit = 40;
account22.withDraw = 400;
console.log(account22, " => Line No: 21");
