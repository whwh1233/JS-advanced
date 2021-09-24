var obj = {
  name: 'wh',
  age: 18
}
console.log(obj.__proto__)
console.log(obj.__proto__.__proto__)

// obj.__proto__.address = 'beijing'
// obj.__proto__ = {
//   height: 188
// }
// obj.__proto__.__proto__ = {
//   address: 'beijing'
// }
// obj.__proto__.__proto__.height = 188
// console.log(obj.name)
// console.log(obj.address)
// console.log(obj.__proto__)
// console.log(obj.__proto__.__proto__)
// console.log(obj.address)
// 从对象中获取address 会触发 [[get]] 操作
// 1.当前对象找
// 2.原型对象(__proto__)找

// prototypeChain   原型链

// obj 的原型对象是 {}
// 无法给 {} 指定原型对象，但可以给 obj 指定原型对象
// {} 的原型对象是 null （顶层的原型对象）
