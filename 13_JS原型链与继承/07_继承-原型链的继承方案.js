// 父类：公共属性和方法
function Person() {
  this.name = 'why'
}
Person.prototype.eating = function () {
  console.log(this.name + 'eating')
}
// 子类：独有的属性和方法
function Student() {
  this.number = 111
}
Student.prototype = new Person()
Student.prototype.reading = function () {
  console.log(this.number + 'reading')
}
var stu = new Student()
console.log(stu.number)
stu.reading()
stu.eating()
