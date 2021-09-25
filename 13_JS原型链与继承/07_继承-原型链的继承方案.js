// 父类：公共属性和方法
function Person() {
  this.name = 'why'
  this.friends = ['a', 'b']
}
Person.prototype.eating = function () {
  console.log(this.name + 'eating')
}
// 子类：独有的属性和方法
function Student() {
  this.number = 111
}
var pp = new Person()

// 把 Person 对象该有的属性 放到了 Student 的原型对象上
Student.prototype = pp
// 继续给 pp 加 Student 该有的方法
Student.prototype.reading = function () {
  console.log(this.number + 'reading')
}
var stu = new Student()
var stu2 = new Student()
console.log(stu.number)
stu.reading()
stu.eating()

console.log(stu.name)
console.log(stu.friends)
// 获取引用，修改引用中的值，会相互影响
stu.friends.push('v')
// 不会在原型上加， 而是给stu添加一个新的属性
stu.name = ';;;;'
console.log(stu2.friends)
console.log(stu2.name)
console.log(stu.name)
// console.log(Object.getOwnPropertyDescriptors(stu))

// 原型链实现继承的三个弊端
// 1. 打印 student 对象，有些属性是看不到的   （继承的属性 stu.name）
// 2. 引用的属性会相互影响，基础数据类型不会
// 3. 在前面实现类的过程中，都没有传递参数，不好传

// 综上所述，原型链实现继承在工程中不会实现
