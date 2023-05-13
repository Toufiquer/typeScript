// *** Generic type
type TNameAge = {
  name: string;
  age: number;
};
type TFamily<H, W> = {
  husband: H;
  wife: W;
};
type TFamily2<A> = {
  [K in keyof A]: A[K];
};
const family1: TFamily<TNameAge, TNameAge> = {
  husband: {
    name: "Husband Name",
    age: 30,
  },
  wife: {
    name: "Wife Name",
    age: 30,
  },
};
const f2: TFamily2<{ A: "A"; B: "B" }> = {
  A: "A",
  B: "B",
};
