/* Polymorphism */
class First {
  test(): void {
    // set body
    console.log(" first", " => Line No: 4");
  }
}
class Second extends First {
  test(): void {
    // set body
    console.log(" Second", " => Line No: 4");
  }
}
class Third extends First {
  test(): void {
    // set body
    console.log("Third", " => Line No: 4");
  }
}

const first1 = new First();
const first2 = new Second();
const first3 = new Third();
console.log(first1.test(), " => Line No: 13");
console.log(first2.test(), " => Line No: 13");
console.log(first3.test(), " => Line No: 13");
// if we invoke a method. then it will search on his block scope. if it does not found. then it will search on his parents scope or Closer scope
