var message = 'whwh1233'

// with 语句
// 可以形成自己的作用域

function foo() {
  function bar() {
    console.log(message)
  }
  bar()
}

foo()
