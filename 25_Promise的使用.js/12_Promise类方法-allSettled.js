// 所有结果都被敲定
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

// 必执行then，
Promise.allSettled([p2, p1, p3, "111"])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
