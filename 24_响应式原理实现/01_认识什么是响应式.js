// let m = 2;
// function auto() {
//   console.log(m);
//   console.log(m + 2);
// }

// m = 299;

// 对象的响应式
let obj = {
  name: "wh",
  age: 19,
};
const newName = obj.name;
console.log(obj.name);
console.log(obj.age);
obj.name = "whwh";
