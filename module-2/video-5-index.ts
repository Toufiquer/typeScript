//*** Object Type  */
const user11: {
  readonly readOnlyVacation: string;
  fixName: "Fix Name";
  name: string;
  age: number;
  email: string;
  isAdmin?: boolean;
} = {
  readOnlyVacation: "Read Only Access",
  fixName: "Fix Name",
  name: "User Name",
  age: 33,
  email: "user@example.com",
  isAdmin: true,
};
// Can't change the readOnlyVacation
// user.readOnlyVacation = "Some thing new"
user11.age = 34;
