function Person() {
  
}

// 因为函数是函数，他会多出来一个 显式原型的属性，叫做 prototype 没有兼容性问题,指向函数的原型对象
// 这个函数最主要的作用  就是 new 作为构造函数调用时，把内部对象的 [[prototype]] 会被赋值为 prototype，
// 也指向函数的原型对象
// 下一行是 new 操作的第二步
// this.__proto__ = foo.prototype
var p1 = new Person()
var p2 = new Person()
// p1.name = 'wh'
p1.__proto__.name = 'whwh'
Person.prototype.name = 'whwhwh'
p2.__proto__.name = '1234456'
console.log(p1.name)
console.log(p2.name)
