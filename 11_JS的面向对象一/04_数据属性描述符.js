var obj = {
  name:'wh',
  age:18
}
// name 和 age 虽然没有被属性描述符描述，但也拥有对应的特性
// value:赋值的值
// configuration ： true
// enumeratble：true
// writable:true


// 数据属性描述符
Object.defineProperty(obj,"address",{
  value:'北京',
  // // 不可删除/ 也不可修改
  // configurable:false,
  // // 配置是否可以被枚举
  // enumerable:true,
  // // 该特性是属性是否可以被写入新的值
  // writable:false
})

// 如果定义address 的时候 底下的东西都没写
// value:undefined
// 别的默认值都是false


// obj.address= 'shanghai'
console.log(obj)

// for(var key in obj) {
//   console.log(key)
// }
// delete obj.name
// delete obj.address
// console.log(obj)


