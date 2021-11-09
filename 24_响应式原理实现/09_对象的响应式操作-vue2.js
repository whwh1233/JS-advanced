// 封装一个响应式的函数  watchFn
const reactiveFns = [];

class Depend {
  constructor() {
    this.reactiveFns = new Set();
  }
  addDepend(reactiveFn) {
    this.reactiveFns.add(reactiveFn);
  }
  // 直接notify就可以执行了
  depend() {
    if (activeReactiveFn) {
      this.reactiveFns.add(activeReactiveFn);
    }
  }
  notify() {
    this.reactiveFns.forEach((fn) => fn());
  }
}

// 每个属性都对应这么一个对象
const depend = new Depend();
// 首先找到 depend （怎么找，执行一次函数）
let activeReactiveFn = null;
function watchFns(fn) {
  activeReactiveFn = fn;
  fn();
  // activeReactiveFn = null;
  // depend.addDepend(fn);
}

const targetMap = new WeakMap();
// 封装一个获取depend 的函数
function getDepend(target, key) {
  // 根据对象获取map的过程
  let map = targetMap.get(target);
  if (!map) {
    map = new Map();
    targetMap.set(target, map);
  }
  // 根据key获取depend
  let depend = map.get(key);
  if (!depend) {
    depend = new Depend();
    map.set(key, depend);
  }
  return depend;
}
// 对象的响应式
let obj = {
  name: "wh",
  age: 19,
};
// 监听对象的属性变化
const objProxy = reactive(obj);

watchFns(function foo() {
  console.log("你好");
});

watchFns(function () {
  console.log("另一个响应式");
});
function bar() {
  console.log("不需要响应式执行");
}

const info = {
  address: "北京",
};

// 一个响应式的函数
const infoProxy = reactive(info);
watchFns(() => {
  console.log(infoProxy.address, "-0------------");
});
infoProxy.address = "sjsjsj";

function reactive(obj) {
  Object.keys(obj).forEach((key) => {
    let value = obj[key];
    Object.defineProperty(obj, key, {
      get: function () {
        const depend = getDepend(obj, key);
        depend.depend();
        return value;
      },
      set: function (newValue) {
        value = newValue;
        const depend = getDepend(obj, key);
        depend.notify();
      },
    });
  });
  return obj;
  // return new Proxy(obj, {
  //   get: function (target, key, receiver) {
  //     const depend = getDepend(target, key);
  //     // depend.addDepend(activeReactiveFn);
  //     depend.depend();
  //     return Reflect.get(target, key, receiver);
  //   },
  //   set: function (target, key, newValue, receiver) {
  //     Reflect.set(target, key, newValue, receiver);
  //     const depend = getDepend(target, key);
  //     console.log(depend);
  //     depend.notify();
  //   },
  // });
}
