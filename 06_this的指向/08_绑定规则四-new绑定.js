// js 中的函数可以当做一个构造函数来使用
// 即  可以使用 new 来创建对象
// 用 new 来调用函数 会发生什么
// 1. 创建一个全新的对象
// 2. 新对象 执行 prototype 连接
// 3. 新对象 被绑定到函数调用的this上
// 4. 如果函数没有返回其他对象，表达式会返回这个新对象
function Person(name,age) {
  this.name = name
  this.age = age
  console.log(this)
}

// 这个就叫做 new 绑定，  把函数当做了一个构造器   this = 创建出来的对象，这个过程就是new 绑定
var p1 = new Person('wh1',18)
var p2 = new Person('wh2',20)