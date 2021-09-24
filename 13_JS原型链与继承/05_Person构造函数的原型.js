function Person() {}

var p1 = Person()

// console.log(Person.prototype)
// console.log(Object.getOwnPropertyDescriptors(Person.prototype))
console.log(Person.prototype.__proto__ === Object.prototype)
// Object.prototype 就是指向的顶层原型
