// const promise = new Promise((resolve, reject) => {});

// promise.then(
//   (res) => {},
//   (err) => {}
// );

// 完全等价于下面的代码
// 三个回调，三个状态，  pending,resolve/fulfilled,rejected
new Promise((resolve, reject) => {
  console.log("11111");
  resolve("aaa");
  console.log("11111");
}).then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);
