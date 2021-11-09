// 转成 promise 的对象
// function foo() {
//   const obj = { name: "wh" };
//   return new Promise((resolve, reject) => {
//     resolve(obj);
//   });
// }

// foo().then((res) => console.log(res));

// 代码同上 ，一个意思
const promise = Promise.resolve({ name: "wh" });
promise.then((res) => console.log(res));
