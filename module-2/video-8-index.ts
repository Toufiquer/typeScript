//** Union (|)  and intersection (&)*/

// enum (Bad Practice)
enum level {
  n11 = "Name1",
  n12 = "Name2",
}

type NobDeveloper = {
  name: string;
};
type juniorDeveloper = {
  name: string;
  experience: number;
  position: string;
};

// intersection
type Boss = juniorDeveloper & {
  company: string;
  taxId: string;
  nextLevel: level.n11;
};
const newDeveloper: NobDeveloper | juniorDeveloper = {
  name: "Ahmed",
  position: "New Here",
  experience: 77,
};
const bossDeveloper: Boss = {
  name: "Ahmed Developer",
  experience: 4,
  position: "4",
  company: "boss developer",
  taxId: "boss developer",
  nextLevel: level.n11,
};
