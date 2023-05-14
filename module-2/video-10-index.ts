//**  nullable */
const searchName = (value: string | null) => {
  if (value === null) {
    console.log("Nothing to search", " => Line No: 4");
  } else {
    console.log("searching...", " => Line No: 6");
  }
};
// searchName("");
// console.log(
//   parseFloat("55.99999999999999"),
//   parseInt("55.5"),
//   " => Line No: 10"
// );

// ** unknown */
const carSpeed = (value: unknown) => {
  const nothingConvert = () =>
    console.log("Nothing to convert", " => Line No: 25");
  if (typeof value === "number") {
    const result = (value * 1000) / 3600;
    console.log(result, " => Line No: 19");
  } else if (typeof value === "string") {
    const [v1, unit] = value.split(" ");
    const converted = parseFloat(v1);
    if (!isNaN(converted)) {
      const result = (converted * 1000) / 3600;
      console.log(result, " => Line No: 19");
    } else {
      nothingConvert();
    }
  } else {
    nothingConvert();
  }
};
// carSpeed("55");
// carSpeed(55);
// carSpeed("true");
// carSpeed(true);
// console.log(isNaN(parseFloat("55")), " => Line No: 36");

// ** never
function throwError(message: string): never {
  throw new Error(message);
}
// throwError("Line  is broken");

// ** Nullish Coalescing operator ??, is depended on null and undefined
const age = 13;
const isAdult = age >= 18 ? true : false;
// console.log(isAdult, " => Line No: 51");
interface IBook {
  id: number;
  book: string;
  author: string;
}
type Manus = {
  name: string;
  age: number;
  city?: {};
  books?: IBook[];
  location?: "";
};
const man1: Manus = {
  name: "Human1",
  age: 20,
  city: { name: "London", age: 33 },
  books: [{ id: 1, book: "Book name", author: "John" }],
};
const manLocation1 = man1?.location ?? " by ?? set value";
const manLocation2 = man1?.location ? " by ? true" : " by ? false";
// console.log({ manLocation1, manLocation2 }, " => Line No: 65");
