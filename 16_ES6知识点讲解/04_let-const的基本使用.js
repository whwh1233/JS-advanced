var foo = "bar";
let bar = "bar";
// const 常量，恒量
const name = "abc";
// 1.const本质上是传递的值不能被修改，
// 但如果传递的是引用类型，（内存地址）
const obj = {
  name: "wh",
  age: 19,
};
obj.name = "wjwj";
console.log(obj);
// 2.var 可以重复声明，let/const不可以
var o1 = "11";
var o1 = 11;
let o11 = 12;
// let o11 = 23;
