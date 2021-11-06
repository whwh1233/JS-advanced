class Person {
  // 其实相当于写在了函数的原型上
  running() {
    console.log(this.name, "running");
  }
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this._address = "北京";
  }
  // 类的访问器方法
  get address() {
    return this._address;
  }
  set address(newValue) {
    this._address = newValue;
  }
  // 类的静态方法（类方法） 可以通过类名直接访问
  static randomPerson() {
    console.log("我是Person的静态方法");
    return new Person("", Math.floor(Math.random() * 10));
  }
}

let p = new Person("wh");
console.log(Person.prototype.running);
console.log(Object.getOwnPropertyDescriptors(Person.prototype));
console.log(p);
console.log(p.address);
p.address = "上海";
console.log(p.address);

p.running();
console.log(Person.randomPerson());

// 对象的访问器对象 ？ 访问器描述符
var obj = {
  _name: "wh",
  get name() {
    return this.name;
  },
  set name(newValue) {
    this._name = newValue;
  },
};
