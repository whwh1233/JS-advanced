// Promise有哪些对象方法
// console.log(Object.getOwnPropertyDescriptors(Promise.prototype));
const promise = new Promise((resolve, reject) => {
  resolve("haha");
});
// 1.同一个promise可以被多次调用then方法
// 当调用resolve时，所有的then都会被调用
// promise.then((res) => {
//   console.log(res);
// });
// promise.then((res) => {
//   console.log(res);
// });
// promise.then((res) => {
//   console.log(res);
// });

// 2.then方法传入的回调函数可以有返回值
// 2.1 如果是个普通值，那会被作为一个新的Promise的resolve值
// 即，then方法本身就有返回值，是一个promise
// promise
//   .then((res) => {
//     console.log(res);
//     return "这是被then返回的promise包装后的res值：aaa";
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   // 没有返回值 默认是 undefined
//   .then((res) => {
//     console.log(res);
//   });
// 2.2 如果返回的就是一个promise
// promise
//   .then((res) => {
//     console.log(res);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("1111");
//       }, 3000);
//     });
//   })
//   .then((res) => {
//     console.log(res);
//   });
// 2.3 如果返回的是一个对象，thenable
promise
  .then((res) => {
    console.log(res);
    return {
      then: function (resolve, reject) {
        resolve(222);
      },
    };
  })
  .then((res) => {
    console.log(res);
  });
