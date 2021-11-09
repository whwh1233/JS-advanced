const obj = { name: "wh", age: 19 };
const objProxy = new Proxy(obj, {
  get: function (target, key) {
    console.log("get");
    return Reflect.get(target, key);
    // return target[key];
  },
  set: function (target, key, value) {
    if (Reflect.set(target, key, value)) {
      console.log("cenggon ");
    }

    target[key] = value;
  },
});
objProxy.name = "1233";
console.log(objProxy.age);
console.log(obj);
