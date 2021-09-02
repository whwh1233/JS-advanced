var message = "hello world"
function foo() {
  console.log(message)
}

function bar() {
  var message = "Hello Bar"
  foo()
}

bar()

// 函数调用栈：ECStack 
// GlobalObject：window,message,foo(内存地址),bar(内存地址)
// foo：父级作用域：Go，函数体 0Xa00
// bar：父级作用域：Go，函数体 0Xb00  message：undefined

// 开始执行
// VO：GO   message = hello world
// bar()  创建函数执行上下文  创建VO：AO(Activation Object) message：hello bar
// 执行 foo() 创建函数执行上下文   创建AO 为空，执行代码 console。message  
// message如何寻找 作用域链：AO+parentScope 直接去Go中找

//  作用域链 是在定义时，就已经决定了的，要牢记这个原理