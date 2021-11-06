{
}

// switch ,if ,for 语句的代码都是块级作用域
// if (true) {
//   var foo = "foo";
//   let bar = "bar";
// }
// var color = "red";
// switch (color) {
//   case "red":
//     console.log("Hongse");
//     let baz = "baz";
//     break;
// }
// console.log(foo);
// // console.log(bar);
// console.log(baz);
// for (var i = 0; i < 10; i++) {
//   console.log("hello world", i);
// }

// console.log(i);

for (let i = 0; i <= 10; i++) {
  // 相当于 let i = 0
  console.log("hello world", i);
}

console.log(i);
