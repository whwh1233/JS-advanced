var obj = {
  name:'wh',
  age:8
}

// 属性是个字符串
// 属性描述符是个对象
Object.defineProperty(obj,"height",{
  // value:188
})

console.log(obj)
console.log(obj.height)
// 数据属性描述符
// 存取属性描述符