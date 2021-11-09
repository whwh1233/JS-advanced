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
  has: function (target, key) {
    console.log("in 操作符");
    return key in target;
  },
  deleteProperty: function (target, key) {
    console.log("删除");
    delete target[key];
  },
});
console.log(objProxy.name);
objProxy.age = 20;
console.log(obj);
console.log("name" in objProxy);
delete objProxy.age;
console.log(obj);
