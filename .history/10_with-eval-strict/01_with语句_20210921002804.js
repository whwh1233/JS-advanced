'use strict'
var message = 'whwh1233'

// with 语句
// 可以形成自己的作用域
// 明确传入一个查找变量的对象
var obj = {
  name: 'wh',
  age: 18,
  message: 'objMessage'
}
function foo() {
  function bar() {
    with (obj) {
      console.log(message)
    }
  }
  bar()
}

foo()
