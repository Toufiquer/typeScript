//**  Generic Type

// Normally we declare the type like this
type TArray1 = Array<string>;
type TArray2 = Array<number>;

type GenericType<T> = Array<T>;
type TTuple<A, B> = [A, B];
const allNumbers: GenericType<number> = [1, 2, 3];
const allNumbers2: GenericType<string> = ["1", "2", "3"];
const allTypes: GenericType<unknown> = [allNumbers, "TArray1", 23, {}, true, 0];

//***  Generic Type as parameter
type TSimple = {
  name: string;
  age: number;
};
const userArr: GenericType<TSimple> = [
  { name: "name", age: 22 },
  { name: "name", age: 22 },
  { name: "name", age: 22 },
  { name: "name", age: 22 },
];
