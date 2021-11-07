// 逻辑赋值运算
// 1. ||= 逻辑或
// 2. &&= 逻辑与
// 3. ??= 逻辑空

// let m = undefined;
// // m = m || "ok";
// m ||= "okvalue";
// console.log(m);

// let obj = {
//   name: "wh",
//   age: 18,
//   foo() {
//     console.log("存在");
//     return "存在";
//   },
// };
// // 存在则执行
// // obj.foo = obj.foo && obj.foo();
// // console.log(obj);

// obj &&= obj.foo;
// console.log(obj);
let message = "";
// ??= 与 ||= 对于空字符串的判断赋值不同
// message ??= "defaule";
message ||= "de";
console.log(message);
