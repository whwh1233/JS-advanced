function Person(name,age,height) {
  this.name = name
  this.age = age
  this.height = height
}

Person.prototype.eating = function() {
  console.log(this.name + 'eating')
}
Person.prototype.running = function() {
  console.log(this.name + 'running')
  // this 在调用时，，被p1调， 就是 p1.name
  // this 动态绑定，运行时绑定
}

var p1 = new Person('wh',18,188)
var p2 = new Person('whwh',28,288)
var p3 = new Person('whwhwh',38,388)

console.log(p1.__proto__)
console.log(p1.name)
p1.eating()
p3.running()
console.log(p1.eating === p2.eating)