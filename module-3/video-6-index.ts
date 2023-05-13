// *** Generic const
type TNameAge2 = {
  name: string;
  age: number;
};
type TAddress = {
  village: string;
  pCode: number;
};
const createUser = <
  T extends { name: string; age: number; village: string; pCode: number }
>(
  person: T
) => {
  return {
    name: person.name,
    age: person.age,
    village: person.village,
    pCode: person.pCode,
  };
};

const user1 = createUser({
  name: "John",
  age: 25,
  village: "St",
  pCode: 25,
});
