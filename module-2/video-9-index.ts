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
  const nothingConvert = (): void =>
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
