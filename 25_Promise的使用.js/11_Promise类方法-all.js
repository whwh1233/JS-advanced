const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1111);
  }, 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(2222);
  }, 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3333);
  }, 3000);
});
// 三个全部返回后输出
// p1.then((res) => console.log(res));

// 按照存放数组的顺序返回，全都fulfilled后再执行then方法
// 意外：拿到结果之前一个promise被reject了,那就执行catch 方法
Promise.all([p2, p1, p3, "111"])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
