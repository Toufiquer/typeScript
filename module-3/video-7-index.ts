//**   Genetic-keyof-const  **/
type TPerson = {
  name: string;
  age: number;
};
const findKey = <X, Y extends keyof X>(parm: X, key: Y) => {
  return parm[key];
};
console.log(
  findKey({ name: "Name of Person", age: 33 }, "name"),
  " => Line No: 9"
);
