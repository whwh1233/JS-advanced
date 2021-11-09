// 封装一个响应式的函数  watchFn
const reactiveFns = [];
function watchFns(fn) {
  reactiveFns.push(fn);
}

// 对象的响应式
let obj = {
  name: "wh",
  age: 19,
};
watchFns(function foo() {
  const newName = obj.name;
  console.log("你好");
  console.log(obj.name);
});

watchFns(function () {
  console.log("另一个响应式");
});
function bar() {
  console.log("不需要响应式执行");
}
obj.name = "whwh";
reactiveFns.forEach((e) => e());
