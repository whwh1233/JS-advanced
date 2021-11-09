// 封装一个响应式的函数  watchFn
const reactiveFns = [];

class Depend {
  constructor() {
    this.reactiveFns = [];
  }
  addDepend(reactiveFn) {
    this.reactiveFns.push(reactiveFn);
  }
  // 直接notify就可以执行了
  notify() {
    this.reactiveFns.forEach((fn) => fn());
  }
}

// 每个属性都对应这么一个对象
const depend = new Depend();
function watchFns(fn) {
  depend.addDepend(fn);
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
depend.notify();
