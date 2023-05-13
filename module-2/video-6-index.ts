//***  Default Parameter in ts */
// default is set in last argument
const runFunction = (n1: number, n2: number, n3: number, n4: number = 4) => {
  return n1 + n2 + n3 + n4;
};

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// spread operator
const allArr1 = [...arr1, ...arr2];
arr1.push(...arr1, ...arr2);
// console.log(arr1, " => Line No: 12");

// use void if nothing is return
const greetFriends1 = (f1: string, f2: string, f3: string): void => {
  console.log(`Hi ${f1}, ${f2}, ${f3}`);
};
// const result1 = greetFriends1("Friends1", "Friends2", "Friends3");
// console.log(result1, " => Line No: 20");

const greetFriends2 = (f1: string, f2: string, f3: string): string => {
  console.log(`Hi ${f1}, ${f2}, ${f3}`);
  return f1 + f2 + f3;
};
// const result2 = greetFriends2("Friends1", "Friends2", "Friends3");
// console.log(result2, " => Line No: 20");

// this is rest parameters
const greetFriends3 = (...friends: string[]): string => {
  console.log(friends, " => Line No: 30");
  return friends.reduce((acc, f) => acc + f + " ", " ");
};
// const result3 = greetFriends3("n1", "n2", "n1", "n2", "n1", "n2", "n1", "n2");
// console.log(result3, " => Line No: 34");

// Object and Array destructure
const arr3 = [1, 2, 3, 4];
const [arr4, n4] = arr3;
// console.log(arr4, n4, " => Line No: 40");

const object1 = {
  userName: "user1",
  age: 33,
};
// const { userName: name1, userName, userName: string } = object1;

// console.log(userName, name1, string, " => Line No: 47");
