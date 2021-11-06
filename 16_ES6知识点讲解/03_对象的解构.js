var obj = {
  name: "wh",
  age: 19,
};
var { name, age } = obj;
console.log(name);
console.log(age);

var { age } = obj;
console.log(age);
var { name: newName } = obj;
console.log(newName);
var { address = "aaa" } = obj;
console.log(address);

function foo(info) {
  console.log(info.name);
}
foo(obj);
// 对于函数参数的解构
function bar({ name }) {
  console.log(name);
}

bar(obj);
