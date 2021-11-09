// resolve参数可以有不同的形式
// 1.普通的值或者对象
// 2.Promise对象
//  那么当前promise的状态会由传入promise来决定（状态的移交）
// 3.如果传入了一个对象，并且对象有 then 方法
//  那么也会执行这个then方法，并且由该then 方法来决定后续的状态
// const newPromise = new Promise((resolve, reject) => {
//   // resolve("aaa");
//   reject("bb");
// });
// 传入 promise
// new Promise((resolve, reject) => {
//   resolve(newPromise);
// }).then(
//   (res) => {
//     console.log(res);
//   },
//   (err) => {
//     console.log(err);
//   }
// );
// 传入一个带有then方法的对象   即 thenable的对象
const obj = {
  then: function (resolve, reject) {
    console.log("自动执行并且决定promise的状态");
    // resolve("aaa");
    reject("bnnn");
  },
};
new Promise((resolve, reject) => {
  resolve(obj);
}).then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);
