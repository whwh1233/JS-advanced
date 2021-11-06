function foo() {
  this.name = "a";
}

var obj = new foo();
console.log(obj.__proto__.constructor === foo);
// console.log(obj.__proto__ === foo.prototype);
Object.setPrototypeOf(obj, { name: "b" });
console.log(obj);
console.log(obj.__proto__);
// console.log(obj.__proto__ === foo.prototype);
var obj2 = new foo();
console.log(obj2);

var obj3 = new obj.__proto__.constructor();
console.log(obj3);
