function foo() {
  console.log('prototype.constructor是我本身')
}

// 1. constructor 属性
// console.log(foo.prototype)
// // console.log(Object.getOwnPropertyDescriptors(foo.prototype))
// // foo.prototype中有一个  constructor 属性
// // prototype.constructor 指向构造函数本身 
// console.log(foo.prototype.constructor)
// console.log(foo.prototype.constructor.name)

// console.log(foo.prototype.constructor.prototype.constructor.name)

// 2.也可以给 prototype 添加别的属性，让new出来的对象可以访问
foo.prototype.name = 'wh'
foo.prototype.age = 18
var p1 = new foo()
console.log(p1.__proto__)
console.log(p1.name)
console.log(p1.age)
// 2.1 也可以直接把prototype赋值为新的对象
// 这样在内存里会多一个 新的对象，把prototype指向了一个新的对象，不指向，foo.prototype原本的原型对象的
foo.prototype = {
   name:'123',
   age:199,
   constructor:foo
}
var p2 = new foo()
console.log(p2.name)
console.log(p2.age)
console.log(p2.__proto__)
// 真是开发中 通过 Object.defineProperty() 来添加 constructor
