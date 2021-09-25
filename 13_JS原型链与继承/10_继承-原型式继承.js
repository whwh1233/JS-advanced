var obj = {
  name: 'why',
  age: 18
}
// 1.原型继承式函数
// function createObject1(o) {
//   var newObj = {}
//   Object.setPrototypeOf(newObj, o)
//   return newObj
// }

// 2.把对象设置为一个函数的原型，
// new 这个函数 创建出来的对象的原型就是指向这个对象
function createObject(o) {
  function Fn() {}
  Fn.prototype = o
  var newObj = new Fn()
  return newObj
}
// var info = createObject(obj)
// 3. 提供的新 API
var info = Object.create(obj)
// info.__proto__ = obj
console.log(info.__proto__)
