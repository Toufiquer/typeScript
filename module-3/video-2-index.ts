// ** interface and type alis 
interface IPeople {
  name: string;
  age: number;
  address: string;
}
interface IPeoples extends IPeople {
  email: string;
  number: number;
}

const IPeople: IPeoples = {
  name: "Toufiquer Rahman",
  age: 23,
  address: "Dhaka",
  email: "abc@gmail.com",
  number: 123,
};

// *** type
type TPeople = { name: string; age: number };
type TPerson = { email: string; number: number };
type TMan = TPeople &
  TPerson & {
    address: string;
  };
const TMan = {
  name: "Toufiquer Rahman",
  age: 23,
  email: "abc@gmail.com",
  number: 123,
  address: "Dhaka",
};

// *** Alis with array
type TArray = number[];
const numberArr: TArray = [1, 2, 3];
