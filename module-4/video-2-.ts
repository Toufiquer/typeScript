/* Declare class property or Member */
class Animal {
  name: string;
  sepsis: string;
  sound: string;
  constructor(name: string, sepsis: string, sound: string) {
    this.name = name;
    this.sepsis = sepsis;
    this.sound = sound;
  }
  //   can't write arrow function because this is not work here
  makeSound(sound: string = "") {
    console.log(`The ${this.name} sound ${this.sound}`, " => Line No: 13");
  }
}

// Repetitive way to declare class property
class Animal2 {
  constructor(
    public name: string,
    public sepsis: string,
    public sound: string,
    private age?: number
  ) {}
  makeSound(sound: string = "") {
    console.log(
      `The ${this.name} sound ${this.sound} ${sound}`,
      " => Line No: 21"
    );
  }
}

const animal1 = new Animal("Animal 1", "dog", "ghw ghw");
const animal2 = new Animal2("Animal 2", "dog", "ghw ghw");
animal1.makeSound();
animal2.makeSound();
