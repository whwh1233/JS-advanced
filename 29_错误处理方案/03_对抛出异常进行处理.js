function foo() {
  throw new Error('new error')
}
function bar() {
  foo()
}

function test() {
  try{
    bar()
  }catch(err){
    console.log('擦');
    console.log(err.message);
  }finally{
    console.log('最后的错误处理')
  }
}


function demo() {
  test()
}

// 1. 不处理，继续将异常抛给当前调用错误函数的函数，最后抛给了最顶层的main script的调用
// 如果在最顶层还没有对异常的处理,那么程序会直接崩掉
demo()

console.log('后续代码的执行');
// 2. try catch 错误处理



// foo()
