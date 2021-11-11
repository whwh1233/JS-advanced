// 异步函数的返回值一定是一个Promise
async function foo() {
  console.log('function start')
  console.log('中间代码');
  console.log('function end')

  throw new Error('error message')
}

// Promise 中 throw 的异常必须使用 catch 来捕获，不然程序会崩掉
foo().catch(err => {
  console.log(err)
})
console.log('后续代码')
