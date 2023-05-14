/* Access Modifiers */
// 1. public
// 2. private
// 3. protected
// 4. readOnly

class BankAccount {
  private private: boolean;
  protected protected: boolean;
  id: number;
  protected secondBalance: number;
  private balance: number;
  name: string;
  constructor(name: string) {
    this.name = name;
    this.id = 444;
    this.balance = 0;
    this.secondBalance = 10;
    this.private = true;
    this.protected = true;
  }
  getBalance() {
    return this.balance;
  }
  addBalance(amount: number) {
    this.balance += amount;
  }
  removeBalance(amount: number) {
    this.balance > 0 &&
      (this.balance - amount <= 0 ? 0 : (this.balance -= amount));
  }
  //   For second balance
  getSecondBalance() {
    return this.secondBalance;
  }
  addSecondBalance(amount: number) {
    this.secondBalance += amount;
  }
  removeSecondBalance(amount: number) {
    this.secondBalance > 0 &&
      (this.secondBalance - amount <= 0 ? 0 : (this.secondBalance -= amount));
  }
}

class StudentAccount extends BankAccount {
  studentBalance: number;
  constructor(name: string, studentBalance: number) {
    super(name);
    this.studentBalance = studentBalance;
  }
}
const banker1 = new BankAccount("Account 1");
console.log(banker1, " => Line No: 38");
const sBanker1 = new StudentAccount("Account 1", 22);

console.log(sBanker1, " => Line No: 51");

//! Deference Between private and protected modifies that protected can access from Inheritance and derive class
