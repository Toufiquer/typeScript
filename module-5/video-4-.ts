// // Property
// interface Property {
//   name: string;
//   lastName: string;
// }

// // Methods
// interface Method {
//   fullName(): string;
// }

// // create generic interface for class properties
// interface CreateGeneric<TData, TMethod> {
//   data: TData;
//   method: TMethod;
// }

// // create class
// class User implements CreateGeneric<Property, Method> {
//   data: Property;
//   method: Method;
//   constructor(name: string, lastName: string) {
//     this.data = { name, lastName };
//     this.method = { fullName: () => `${name} ${lastName}` };
//   }
// }

// // create inheritance
// const user1 = new User("bob", "Jon");
// console.log(user1.method.fullName(), " => Line No: 31");
// console.log(user1.data.lastName, " => Line No: 31");
