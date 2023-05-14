/**
 *! Pick, Omit
 *! Partial
 *! Required
 *! ReadOnly
 *! Record
 *  */

/@ Pick */;
type Person = {
  name: string;
  email: string;
  age: number;
};

type EmailT = Pick<Person, "email">;
type BothT = Pick<Person, "name" | "age">;

/@  Partial */;
// to make all property as optional
type Property = {
  a: string;
  b: string;
  c: string;
};

type OProperty = Partial<Property>;
// type OProperty = {
//   a?: string;
//   b?: string;
//   c?: string;
// };

/@ Required  */;
// to make all property as required
type PropertyR = {
  a?: string;
  b: string;
  c?: string;
};
type RProperty = Required<PropertyR>;

// type RProperty = {
//   a: string;
//   b: string;
//   c: string;
// };

/@ ReadOnly  */;
// to make all property as readOnly
type PropertyReadOnly = {
  a: string;
  b: string;
  c: string;
};
type ReadProperty = Readonly<PropertyReadOnly>;
// type ReadProperty = {
//   readonly a: string;
//   readonly b: string;
//   readonly c: string;
// };

/@ Record */;

type myObj = Record<"a" | "b" | "c" | "d", string>;
// type myObj = {
//   a: string;
//   b: string;
//   c: string;
//   d: string;
// };
