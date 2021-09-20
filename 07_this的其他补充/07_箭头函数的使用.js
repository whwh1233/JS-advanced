() => {

}
// 1. 编写箭头函数
// 1. 参数
// 2. 箭头 =>
// 3. 大括号 函数的执行体
var foo = (num1,num2,num3) => {

}

// 高阶函数使用时 可以直接传入箭头函数
var nums = [1,2,3,4]
// nums.forEach((item,index,arr) => {
//   console.log(item)
// })
// 箭头函数有一些常见的简写
// 1.参数只有一个 ，可以省略小括号
// nums.forEach(item => {
//   console.log(item)
// })
// 2.函数执行体只有一行代码，大括号可以省略
// 强调:并且会默认将这行代码的执行结果作为返回值
// nums.forEach(item => 
//   console.log(item)
// )
// var newNums = nums.filter(item => item % 2 ===0
// )
// console.log(newNums)
// var newNums = nums.filter(item => item%2===0).map(item => item*100).reduce((pre,item) => pre+item)
// console.log(newNums)

// 3.如果一个箭头函数,只有一行代码，并且返回一个对象，这个时候如何编写
var bar = () => ({name:'whwh11233',age:18})
console.log(bar())
var bar = () => {
  return {name:'whhw',age:18}
}
console.log(bar())