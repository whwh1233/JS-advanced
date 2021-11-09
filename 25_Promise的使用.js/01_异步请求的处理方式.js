// 回调的方式有很多弊端
// 1. 自己设计好callback的名称，
// 2. 第三方库，必须看源码，才知道怎么才能获取结果，成本太高
function requestData(url, successCallback, failureCallback) {
  // 模拟网络请求
  setTimeout(() => {
    if (url === "wh") {
      let names = [1, 2, 3];
      successCallback(names);
    } else {
      let err = "失败";
      failureCallback(err);
    }
  }, 3000);
}

requestData(
  "wh",
  (res) => console.log(res),
  (err) => console.log(err)
);

// 更好的方案
// 让别人给我一个 Promise 承诺 (规范好了所有的代码逻辑)
function requestData2() {
  return new Promise();
}
