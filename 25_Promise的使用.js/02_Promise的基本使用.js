function foo() {
  return new Promise((resolve, reject) => {
    // resolve("success");
    reject("failed");
  });
}
const fooPromise = foo();
// resolve会回调then 方法传入的回调函数
// then 方法传入的回调函数会在resolve函数执行的时候回调
// catch方法传入的回调函数会在reject函数执行的时候回调
// then 传入2个参数
fooPromise.then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);
class Person {
  constructor(callback) {
    let foo = () => {};
    let bar = () => {};
    callback(foo, bar);
  }
}
const p = new Person((foo, bar) => {
  foo();
  bar();
});

// 传入的这个函数 成为 executor
// 这个函数可以有两个参数,两个回调函数
// resolve  成功时执行这个回调函数
// reject   失败时回调这个函数

const promise = new Promise((resolve, reject) => {
  // console.log("传入函数直接被执行，被称为 executor");
  // resolve();
});

promise.then(() => console.log("chenggon "));
promise.catch(() => console.log("shiba "));
