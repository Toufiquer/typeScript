//*** Alis (as) */
// use type as variable feeling 
type UserType = {
  name: string;
  age?: number; // optional
  email: string;
};
const userA1: UserType = {
  name: "User1",
  age: 33,
  email: "user1@example.com",
};

const userA2: UserType = {
  name: "User2",
  age: 33,
  email: "user2@example.com",
};

// *** callback function  */
const calculate = (num1: number, num2: number): number => {
  return num1 + num2;
};
// Calculate With operation which returns number
const calculate2 = (
  num1: number,
  num2: number,
  operation: (n1: number, n2: number) => number
  //   operation: operationType
): number => {
  return operation(num1, num2);
};
console.log(
  calculate2(2, 12, (x, y) => x + y),
  " => Line No: 23"
);

type operationType = (n1: number, n2: number) => string;

//*** Calculate With operation which returns string */
const calculate3 = (
  num1: number,
  num2: number,
  operation: operationType
): string => {
  return operation(num1, num2);
};
console.log(
  calculate3(2, 12, (x, y) => " " + x + y + " "),
  " => Line No: 23"
);

//*** In js Format  */
// const calculate = (num1, num2, fn) => {
//   return fn(num1, num2);
// };
// console.log(
//   calculate(3, 5, (x, y) => x + y),
//   " => Line No: 4"
// );
