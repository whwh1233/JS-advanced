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

console.log(Object.prototype.__proto__)

// console.log(obj1.__proto__)
// console.log(obj1.__proto__.__proto__)

// obj.__proto__.address = 'beijing'
// obj.__proto__ = {
//   height: 188
// }
// obj.__proto__.__proto__ = {
//   address: 'beijing'
// }
// obj.__proto__.__proto__.height = 188
// console.log(obj.name)
// console.log(obj.address)
// console.log(obj.__proto__)
// console.log(obj.__proto__.__proto__)
// console.log(obj.address)
// 从对象中获取address 会触发 [[get]] 操作
// 1.当前对象找
// 2.原型对象(__proto__)找

// prototypeChain   原型链

// obj 的原型对象是 {}
// 无法给 {} 指定原型对象，但可以给 obj 指定原型对象
// {} 的原型对象是 null （顶层的原型对象）
