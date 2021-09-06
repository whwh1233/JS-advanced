// function foo(arg) {
//   console.log(arg)
// }
// foo(123)

// 把函数作为一个函数的参数
// function foo(aaa) {
//   aaa()
// }

// function bar(arg) {
//   console.log(arg)
// }

// foo(bar("sjsjsj"))

function calc(num1,num2,caclFn) {
   console.log( caclFn(num1,num2))
}

function add(num1,num2) {
  return num1 + num2
}
function sub(num1,num2) {
  return num1 - num2
}
function mul(num1,num2) {
  return num1 * num2
}
var m = 2
var n = 3
calc(m,n,mul)