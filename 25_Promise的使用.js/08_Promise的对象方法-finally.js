// finally 不接受参数
const promise = new Promise((resolve, reject) => {
  resolve("aaa");
  // reject("bnn");
});

promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err))
  .finally(() => console.log("结束"));
