// ** * Generic with function
type TFunction = <T, X>(num: T, num2: X) => [T, X];
const toggle = <X, Y>(x: X, y: Y): [X, Y] => [x, y];
const nameOfPeople = toggle<number, number>(1, 2);
console.log(nameOfPeople, " => Line No: 5");
