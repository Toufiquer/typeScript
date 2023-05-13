// ** Conditional types
// A Type is dependent on another Type
type T1 = string;
type T2 = T1 extends string ? null : string;
type T3 = T2 extends string ? string : T1 extends string ? string : null;

type T4 = {
  type1: string;
  type2: string;
};
type conditionT<T, K> = K extends keyof T ? true : false;
type conditionT2 = conditionT<T4, "type1">;
