var obj = {
  name:'wh',
  age:18
}
// 禁止添加属性
// Object.preventExtensions(obj)
// obj.height = 188
// obj.address = 'beijing'
// console.log(obj)

// 禁止对象配置、删除里面的属性
// for(var key in obj) {
//   Object.defineProperty(obj,key,{
//     // 写
//   })
// }
// Object.seal(obj)
// delete obj.name
// console.log(obj)

// 使属性不可修改
Object.freeze(obj)
obj.name = 'hobk'
console.log(obj)