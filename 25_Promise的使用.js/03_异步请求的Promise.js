function requestData(url) {
  // 模拟网络请求
  // 异步请求代码放入executor中
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "wh") {
        let names = [1, 2, 3];
        resolve();
      } else {
        let err = "失败";
        reject();
      }
    }, 3000);
  });
}

const promise = requestData("wwsh");
// promise
//   .then(() => {
//     console.log("成功");
//   })
//   .catch(() => {
//     console.log("请求失败");
//   });
// 也可以用 then 传入两个函数
promise.then(
  () => {
    console.log("成功");
  },
  () => {
    console.log("请求失败");
  }
);
