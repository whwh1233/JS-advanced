function sum(num1,num2,num3) {
  // arguments看起来是个参数数组，其实是个对象
  // 存储在数组的 AO 对象中
  console.log(arguments)
  // 常见的对 arguments 的操作
  // 1. 获取参数的长度，.length
  // 2. 根据索引值获取某一个参数
  // 3. arguments.callee 获取当前arguments所在的函数
  // 无法使用 forEach，map等
  // 所有需要转数组
  console.log(arguments.length)
  console.log(arguments[2])
  console.log(arguments.callee)

  // 禁止递归
  // arguments.callee()

  var result = num1 + num2 + num3 
  return result
}

var r = sum(10,20,30,40)
console.log(r)