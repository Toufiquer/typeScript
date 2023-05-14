/* Inheritance */
class Person000 {
  public name: string;
  constructor(name: string, public age: number) {
    this.name = name;
  }
  doSleep(hour: number): string {
    return `${this.name}  is sleeping ${hour}`;
  }
}
class Person100 extends Person000 {
  constructor(name: string, age: number, address: string) {
    super(name, age);
  }
  doWalk(hour: number): string {
    return `hours is ${hour}`;
  }
}
const P1 = new Person100("P1", 33, "Dhaka");
const aaa = P1.doSleep(4);
console.log(aaa, " => Line No: 21");
