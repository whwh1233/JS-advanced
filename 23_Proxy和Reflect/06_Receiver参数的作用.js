const obj = {
  _name: "wh",
  get name() {
    // 不加 reveiver this 指向 obj
    // 加了receiver this指向 objProxy
    return this._name;
  },
  set name(value) {
    this._name = value;
  },
};

const objProxy = new Proxy(obj, {
  get: function (target, key, receiver) {
    console.log(key, "get");
    console.log(receiver);
    console.log(receiver === objProxy);
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, value, receiver) {
    console.log("receiver");
    Reflect.set(target, key, value, receiver);
  },
});
console.log(objProxy.name);
objProxy.name = "sd";
console.log(objProxy.name);
