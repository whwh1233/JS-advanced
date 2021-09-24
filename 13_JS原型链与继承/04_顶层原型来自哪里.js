var obj1 = {
  name: 'wh',
  age: 18
}

var obj2 = new Object()
// obj2.__proto__ 等于 Object 的 prototype
// Object 的 prototype 就是顶层原型，他的上层就再也没有了原型
// Object 是所有类的父类

function Person() {}

var p1 = new Person()
// 仿照 new Person 可以理解顶层对象的原理
//1.在内存中创建对象
//2.赋值 this
//3.把 Person 的 prototype 赋值给 对象的 __proto__
//4.执行函数体
//5.返回对象

console.log(Object.prototype.constructor === Object)
console.log(Object)

console.log(Object.getOwnPropertyDescriptors(Object.prototype))
// console.log(obj1.__proto__)
// console.log(obj1.__proto__.__proto__)
