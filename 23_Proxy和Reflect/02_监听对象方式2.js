const obj = {
  name: "wh",
  age: 18,
};

const objProxy = new Proxy(obj, {
  // 获取值时的捕获器
  get: function (target, key) {
    console.log(target[key], `${key}被访问了`, target);
    return target[key];
  },
  // 修改值时的捕获器
  set: function (target, key, newValue) {
    console.log("aaa");
    target[key] = newValue;
  },
});
console.log(objProxy.name);
objProxy.age = 20;
console.log(obj);
