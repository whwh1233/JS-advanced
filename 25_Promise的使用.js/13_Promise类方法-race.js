// 竞赛
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1111);
  }, 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(2222);
  }, 500);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3333);
  }, 3000);
});

// 第一个是reject
Promise.race([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));
