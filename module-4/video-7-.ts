//*  Static  */
class Counter {
  static counter: number = 0;
  increment(): number {
    return (Counter.counter = Counter.counter + 1);
  }
  decrement(): number {
    return (Counter.counter = Counter.counter - 1);
  }
}
const counter1 = new Counter();
const counter2 = new Counter();
// console.log(counter1.increment(), counter2.increment(), " => Line No: 15");
class Counter22 {
  static counter: number = 0;
  static increment(): number {
    return (Counter.counter = Counter.counter + 1);
  }
  static decrement(): number {
    return (Counter.counter = Counter.counter - 1);
  }
}
const counter111 = new Counter22();
const counter112 = new Counter22();
console.log(
  Counter22.increment(),
  Counter22.increment(),
  counter111,
  counter112,
  " => Line No: 15"
);

// static means that is placed in  one memory location
