function Person(name, age, height) {
  this.name = name
  this.age = age
  this.height = height
}
Person.prototype.eating = function () {
  console.log('eating')
}
Person.prototype.running = function () {
  console.log('running')
}

function Student(name, age, height, number, score) {
  Person.call(this, name, age, height)
  this.number = number
  this.score = score
}
// 实现一个工具函数来实现下面的功能
function inheritPrototype(SubType, SuperType) {
  SubType.prototype = Object.create(SuperType.prototype)
  Object.defineProperty(SubType.prototype, 'constructor', {
    value: SubType,
    writable: true,
    enumerable: true,
    configurable: true
  })
}
inheritPrototype(Student, Person)
// var p = new Person()
// Student.prototype = p
// Student.prototype = Object.create(Person.prototype)
// Object.defineProperty(Student.prototype, 'constructor', {
//   value: Student,
//   writable: true,
//   enumerable: true,
//   configurable: true
// })
Student.prototype.studying = function () {
  console.log('studying ')
}
var stu = new Student('wh', 18, 188, 1000, 100)
console.log(stu)
stu.studying()
stu.running()
