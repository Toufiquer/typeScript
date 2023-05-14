//** Abstraction */
interface IAbstraction {
  run(): void;
}
class Abstraction implements IAbstraction {
  run(): void {
    console.log("Abstraction", " => Line No: 7");
  }
}
abstract class Abstraction22 implements IAbstraction {
  run() {
    console.log("22", " => Line No: 12");
  }
  abstract secondRun(): void;
}
// can't create an instance of Abstraction22
// const instance = new Abstraction22(); // send error

class NewAbstraction22 implements Abstraction22 {
  run(): void {}
  secondRun(): void {}
}
