var obj = {
  name: 'wh'
}

Object.defineProperty(obj, 'address', {
  value: 'beijing'
})

Object.defineProperty(obj, 'age', {
  value: '18',
  enumerable: true
})
// 浏览器能显示可枚举的属性是因为为了方便调试

console.log(obj)
