// Async on TypeScript
const createPromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data = "This is data";
    if (data) {
      resolve(data);
    } else {
      reject("Error");
    }
  });
};
const globalData = { name: "Global Data", age: 500 };
const globalDataString = JSON.stringify(globalData);
interface IName {
  name: string;
  age: number;
}
interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: string;
}
const fetchData = async (): Promise<ITodo> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/5");
  const result = await data.json();
  return result;
};

const getData = async (): Promise<void | ITodo> => {
  const result = await fetchData();
  console.log(result, " => Line No: 33");
};
getData();
console.log(createPromise(), " => Line No: 12");
