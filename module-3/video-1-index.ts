let newName: number | string = "my name";
// ** type assertion
const updateName = (newName as string).toUpperCase();
// console.log(newName, updateName, " => Line No: 2");
newName = 444;
(newName as number).toFixed(0);

// console.log(newName, " => Line No: 2");

const kgToGram = (kg: number | string): number | string => {
  if (typeof kg === "string") {
    return parseFloat(kg) * 1000;
  }
  if (typeof kg === "number") {
    return kg * 1000;
  } else {
    return "Nothing to convert please provide a valid string or number";
  }
};
console.log(kgToGram(5), " => Line No: 19");
const result = kgToGram("2") as number;
const result33 = <number>kgToGram("2");
// const result2: number = kgToGram("2"); // wrong, result2 don't know what is return.

type CustomType = string;
const result3 = <CustomType>kgToGram("2");
console.log(kgToGram("5") as number, " => Line No: 19");
type CustomTypeError = {
  message: string;
};
try {
} catch (error) {
  console.log((error as CustomTypeError).message, " => Line No: 29");
  console.log((<CustomTypeError>error).message, " => Line No: 29");
}
// <> is not worked in tsx
