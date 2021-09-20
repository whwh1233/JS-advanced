function sum(num1,num2,num3) {
  console.log(arguments)
  // 1. 自己遍历 arguments 中的元素
  // 2. 转成 array 元素
  // 利用数组的slice方法来转换
  // 取一下数组的slice方法
  var newArr = Array.prototype.slice.call(arguments)
  console.log(newArr)
  var new2 = [].slice.call(arguments)
  console.log(new2)

  // 3. ES6 的语法
  var new3 = Array.from(arguments)
  console.log(new3)

  var new4 = [...arguments]
  console.log(new4)
  var result = num1 + num2 + num3 
  return result
}

var r = sum(10,20,30,40)
console.log(r)