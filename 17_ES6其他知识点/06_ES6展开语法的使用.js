const names = ["a", "b", "c"];
const name = "wh";
const info = {
  name: "wh",
  age: 19,
};
// 1.函数调用时
function foo(x, y, z) {
  console.log(x, y, z);
}
// 展开数组或者是字符串
foo(...names);
foo(...name);
// 2.构造数组时

const newArray = [...names, ...name];
console.log(newArray);
// 3.  ES2018 ES9 构建对象字面量时候使用展开语法
const obj = { ...info, address: "beijing", ...names };
console.log(obj);
