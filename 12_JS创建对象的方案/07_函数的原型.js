function foo() {

}

// 函数也是个对象   , 也有隐式原型 [[prototype]]
// console.log(foo.__proto__)

// 因为函数是函数，他会多出来一个 显式原型的属性，叫做 prototype 没有兼容性问题,指向函数的原型对象
console.log(foo.prototype)
// 这个函数最主要的作用  就是 new 作为构造函数调用时，把内部对象的 [[prototype]] 会被赋值为 prototype，
// 也指向函数的原型对象
// this.__proto__ = foo.prototype
var f1 = new foo()
var f2 = new foo()
var f3 = new foo()

console.log(f1.__proto__ === f2.__proto__)
console.log(f2.__proto__ === f3.__proto__)
console.log(f3.__proto__)