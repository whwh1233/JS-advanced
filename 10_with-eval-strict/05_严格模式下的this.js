"use strict"
// function foo() {
//   console.log(this)
// }
// foo()
// 严格模式下 自执行函数的this会指向 undefined 而不是window了
// 但不会对你之前编写的代码产生影响
// 因为没有在自执行函数中通过this来引用 window
// 直接写 window 中的变量名称即可
// var obj = {
//   name:'why',
//   foo() {
//     console.log(this)
//   }
// }

// obj.foo()
// 严格模式不影响 隐式绑定
// 
// setTimeout 对我们来说是一个黑盒子，不知道内部的function是怎么调用的
// 通过use strict 的测试发现，他可能是 fn.apply(window) 来绑定this 的
// setTimeout 不是 V8 实现的，  而是浏览器实现的
// chromium (UI blink V8)   chrome开源的
setTimeout(function() {
  console.log(this)
},1000)