// "use strict"
 var  message = 'hello world'

// console.log(message)

// true.foo = 'abc'
// 也可以只针对一个函数开启严格模式
function foo() {
  // "use strict"
  true.foo = 'abc'
}
foo()