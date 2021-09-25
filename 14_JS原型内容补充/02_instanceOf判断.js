var obj = {
  name: 'wjy',
  age: 18,
  height: 188
}
var info = Object.create(obj, {
  address: {
    value: 'beijing',
    enumerable: true,
    writable: true,
    configurable: true
  }
})

console.log(info)
// console.log(obj)
// console.log(info.__proto__)
// 1. hasOwnProperty   可以区分是原型对象还是自己独有的
// console.log(info.hasOwnProperty('address'))
// console.log(info.hasOwnProperty('name'))

// 2.  in  操作符   不管在当前对象还是原型对象
// console.log('address' in info)
// console.log('name' in info)
// // 同 in
// for (var key in info) {
//   console.log(key)
// }

function inheritPrototype(SubType, SuperType) {
  SubType.prototype = Object.create(SuperType.prototype)
  Object.defineProperty(SubType.prototype, 'constructor', {
    value: SubType,
    writable: true,
    enumerable: true,
    configurable: true
  })
}
function Student() {}
function Person() {}
inheritPrototype(Student, Person)
var stu = new Student()
// 3. instanceOf 检测对象的原型链中 是否含有 构造函数的 prototype
console.log(stu instanceof inheritPrototype)
console.log(stu instanceof Object)

// 4. isPrototypeof
