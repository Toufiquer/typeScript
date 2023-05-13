//*** Function Type  */
//normal function
function addNum(num1: number, num2: number): number {
  return num1 + num2;
}

// arrow function
const addNum2 = (num1: number, num2: number): number => num1 + num2;

// method
const user1: {
  name: string;
  balance: number;
  addBalance(num1: number, num2: number): number;
  addExtraBalance(n1: number, n2: number): number;
} = {
  name: "user1",
  balance: 4,
  addBalance(num1, num2 = 2) {
    return this.balance + num1 + num2;
  },
  addExtraBalance: (n1, n2) => n1 + n2,
};
