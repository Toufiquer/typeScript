/*  type Guard  Type Numeric */
type BothT = string | number;
const add = (parm1: BothT, parm2: BothT): BothT => {
  if (typeof parm1 === "number" && typeof parm2 === "number") {
    return parm1 + parm2;
  } else {
    return parm1.toString() + parm2.toString();
  }
};
/* In guard */
type AdminT = {
  name: string;
  role: string;
};
type ClientT = {
  name: string;
};
const isAdmin = (user: AdminT | ClientT): boolean => {
  if ("role" in user) {
    if (user.role === "admin") {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
// sort hand
const isAdmin2 = (user: AdminT | ClientT): boolean =>
  "role" in user ? (user.role === "admin" ? true : false) : false;
const user1 = { name: "user1", role: "admin" };
const user2 = { name: "user1", role: "client" };
// console.log(isAdmin2(user1), " => Line No: 26");
// console.log(isAdmin2(user2), " => Line No: 26");

/* Instanceof Guard */
class Animal {
  name: string;
  species: string;
  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }
}
class Dog extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeBite() {
    return "bite bite";
  }
}
class Cat extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeMewMew() {
    return "Mew Mew";
  }
}
const checkDog = (dog: Animal): dog is Dog => dog instanceof Dog;
const checkCat = (cat: Animal): cat is Cat => cat instanceof Cat;
const dog1 = new Dog("Dog", "dog"); // dog1 is instance of Dog
const cat1 = new Cat("Cat", "cat"); // cat1 is instance of Cat
const isDog = (animal: Animal): boolean => {
  if (animal instanceof Dog) {
    animal.makeBite();
    return true;
  } else {
    return false;
  }
};
const isDog1 = (animal: Animal): boolean => {
  if (checkDog(animal)) {
    animal.makeBite();
    return true;
  } else {
    return false;
  }
};
console.log(isDog(cat1), " => Line No: 72");
