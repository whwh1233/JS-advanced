// rest parameters 
function sum (...nums) {
  console.log(nums)
  console.log(...nums)
}

// 会把参数放入nums的数组里
sum(10)
sum(10,20)
sum(10,20,30)

// 展开运算符， ...args   spread
var names = ['a','b','c']
var newNames = [...names]
console.log(newNames)
