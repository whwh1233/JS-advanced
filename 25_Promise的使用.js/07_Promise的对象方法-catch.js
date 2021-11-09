// const promise = new Promise((resolve, reject) => {
//   // reject("nonono");
//   resolve("111");
//   // 另一个写法
//   // throw new Error("nono");
// });

// 1.当executor抛出异常，也会被reject捕获
// promise.then(
//   (res) => {
//     console.log(res);
//   },
//   (err) => {
//     console.log(err);
//     console.log("---------");
//   }
// );

// 2.通过catch方法来实现 reject 的捕获 (不太符合 promise/A+规范)
// promise.catch((err) => {
//   console.log(err);
//   console.log("---------");
// });
// catch捕获的不是then返回的异常，而是promise的异常,除非promise返回的新的promise返回了异常
// promise
//   .then((res) => {
//     // console.log(res);
//     // return new Promise((resolve, reject) => {
//     //   reject("wandan");
//     // });
//     throw new Error("dsjsj");
//   })
//   .catch((err) => {
//     console.log(err);
//     console.log("----------");
//   });

// 3.拒绝捕获的问题
// const promise = new Promise((resolve, reject) => {
//   resolve("111");
//   // reject("aasd");
// });

// promise.then(
//   (res) => console.log(res),
//   (err) => console.log(err)
// );

// promise
//   .then((res) => {
//     return 111;
//   })
//   .then((res) => {
//     console.log(res);
//     throw new Error("sdsds");
//   })
//   .catch((err) => console.log(err));

// 4.catch方法的返回值
const promise = new Promise((resolve, reject) => {
  // resolve("111");
  reject("000");
});

promise
  .then((res) => console.log(res))
  .catch((err) => {
    console.log(err);
    // 这个返回值就代表的是resolve
    return "wuwu";
  })
  .then((res) => console.log("res:", res))
  .catch((err) => console.log("err:", err));
