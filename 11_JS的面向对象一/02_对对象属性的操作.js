var obj = {
  name:'wh',
  age:8
}
// console.log(obj.name)
// obj.name = '我憨坏唔'
// console.log(obj)
// // delete obj.name
// // console.log(obj)
// // 对属性操作时，进行一些限制
// // 不允许赋值，删除、或不能被遍历出来
// // 但如果通过字面量定义，则不能实现这些限制
// // 通过 Object.defineProperty() 来实现
// for(var key in obj) {
//   console.log(key)
//   console.log(obj[key])
// }
Object.defineProperty(obj,"height",{
  writable:false,
  value:188
})

console.log(obj)