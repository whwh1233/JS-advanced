"use strict"
// 1. 不允许意外创建全局变量
// message = "hello world"
// function foo() {
//   age = 19
// }
// foo()
// console.log(age)
// 2.不允许函数有相同的参数名称
// function foo(x,x,x) {
//   console.log(x)
// }
// foo(1,2,3)

// 3.静默错误
// 给 true 添加属性 
// var obj = {

// }
// Object.defineProperty(obj,"name",{
//   writable:false,
//   value:"why",
//   configurable:false
// })
// console.log(obj.name)
// // obj.name = 'wh'
// delete obj.name

// 4. 不允许使用原先的八进制格式
// var num = 0o123    //不允许使用 0123
// var num1 = 0x123
// console.log(num)
// console.log(num1)

// 5. with 语句不允许使用
// 6. eval 函数不会向上引用变量
// var message = 'whwh11233'
var str = 'var message = "whwh11233"; console.log(message)'
eval(str)

// 