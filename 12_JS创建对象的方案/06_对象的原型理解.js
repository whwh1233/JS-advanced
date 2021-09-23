// 每个对象都有一个 [[prototype]]  ，这个属性被称为对象的原型（隐式原型）

// 1.原型的概念
var obj = {
  name:'wj'
}                   //[[prototype]]

var info = {}       //[[prototype]]
// 早期ECMA 没有规范去查看 [[prototye]]
// 部分浏览器提供了这么一个属性,让我们可以查看原型 
// __proto__
console.log(obj.__proto__)
console.log(info.__proto__)

// ECMA 5 之后提供了这个办法   稳定
console.log(Object.getPrototypeOf(obj))

// 2.原型有什么用  （隐式原型）
// 当从一个对象中获取属性，会触发 [[get]] 操作
obj.__proto__.age = 28
console.log(obj.__proto__)

console.log(obj.age)
// 2.1 在当前对象去找这个属性，如果找到直接使用
// 2.2 如果没有找到，会沿着原型去查找，去 [[prototype]] 去查找