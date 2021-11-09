// 必等到一个resolve
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(1111);
  }, 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(2222);
  }, 500);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(3333);
  }, 3000);
});

// 如果全都reject，那就输出any自定的一个 reject 错误
// AggregateError: All promises were rejected
Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));
