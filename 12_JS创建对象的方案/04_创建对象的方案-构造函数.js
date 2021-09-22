// 约定俗称的规范：构造函数的首字母大写， 别的函数使用驼峰标识
//  （普通函数和构造函数的外表看起来没有区别 ）
function Person(name,age,address) {
  this.name = name
  this.age = age
  this.address = address
  this.eating = function() {
    console.log('eating')
  }
  this.running = function() {
    console.log('running')
  }
}

var p1 = new Person('wh',18,'beijing')
console.log(p1)
console.log(p1.__proto__.constructor)
console.log(p1.__proto__)