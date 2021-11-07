// 空值合并运算   ？？
// let foo = undefined;
// let foo = "";
let foo = "aa";
// const bar = foo || "no value";
const bar = foo ?? "no value";
console.log(foo);
console.log(bar);
