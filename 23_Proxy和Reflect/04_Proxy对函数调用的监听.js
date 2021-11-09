function foo() {}

// 函数的捕获器
const fooProxy = new Proxy(foo, {
  apply: function (target, thisArg, argArr) {
    console.log("进行了apply操作");
    return target.apply(thisArg, argArr);
  },
  construct: function (target, argArr, newTarget) {
    console.log("new 操作");
    return new target(...argArr);
  },
});

fooProxy.apply("sd");
const p = new fooProxy();
