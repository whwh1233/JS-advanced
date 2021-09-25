// 父类：公共属性和方法
function Person(name, age, friends) {
  this.name = name
  this.age = age
  this.friends = friends
}
Person.prototype.eating = function () {
  console.log(this.name + 'eating')
}

// 子类：独有的属性和方法
function Student(name, age, number, friends) {
  Person.call(this, name, age, friends)
  // this 是student 的对象
  this.number = number
}
var p = new Person()
Student.prototype = Person.prototype
// Student.prototype = p
// Student.prototype.studying = function() {

// }
// 这样添加的时候 就会加到父类上，不符合我们子类继承父类的要求

var stu = new Student('wj', 18, 2000, [1, 2, 3])
console.log(stu)
