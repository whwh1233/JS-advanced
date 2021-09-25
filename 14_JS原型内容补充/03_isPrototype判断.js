function Person() {}
var p = new Person()
// 对比对象与构造函数
console.log(p instanceof Person)
// 对比对象与对象
console.log(Person.prototype.isPrototypeof(p))
