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

// 还是要把父类指定一下，不然 __proto__ 指向 Object
// 这样就可以拥有 p.__proto__ 指向的 Person.prototype 的方法了
//  stu.__proto__ 指向 Student.prototype 即 p
// 沿着原型链就可以找到了
Student.prototype = p

var stu = new Student('wh', 18, 100, ['a', 'c'])
var stu2 = new Student('wh', 18, 100, ['a', 'c', 'b'])
console.log(stu.friends)
stu.friends.push('cvv')
console.log(stu.friends)
console.log(stu.__proto__.__proto__)

console.log(stu2)

// 解决原型链实现继承的三个弊端（借用构造函数）
// 1. 打印 student 对象，有些属性是看不到的   （继承的属性 stu.name）
// 2. 引用的属性会相互影响，基础数据类型不会
// 3. 在前面实现类的过程中，都没有传递参数，不好传

// 借用构造函数的弊端
// 1. Person 函数被调用了两次
// 2. stu的原型对象多了几个属性，但没有必要存在
