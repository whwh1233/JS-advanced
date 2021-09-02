// var name = 'wh';
var age = 18
foo(123)

function foo(num) {
  console.log(m)
  var m = 10;
  var n = 20;
  function bar() {
    console.log(name)
    console.log(age)

  }
  bar()
}


var num1 = 20
var num2 = 30
var result = num1 + num2
// 编译代码时候，num1:undefined
// 一等公民 函数
// 特殊类型：foo:引用下面的函数对象
// 会在内存中开辟一块空间，来存储函数foo，将foo指向该内存地址
// 在编译阶段，主要存两个东西
// 1、父级作用域 GlobalObject创建一个函数
// 2、函数的执行体，代码块
// 3.如果又遇到了一个函数 ，再在内存中创建一个单独的存储空间存bar，绕回第二步


// 当代码运行到函数时
// 先去go中找，找到foo
// foo指向内存地址，去内存中找
// 将foo放入 ECStack中, 同时为foo创建一个函数执行上下文 FEC function execution context
// 在该FEC中也创建一个 VO(variable object) 叫做 AO(activation object) 活跃对象，用来保存函数内部的变量

// 执行时候遇到了bar()
// 再创建一个新的AO对象 + scopeChain
// 开始执行bar函数

// 函数执行完毕后，
// 函数弹栈，在内存中销毁
// 再次被调用时，在内存中再创建一个

// 当我们查找一个变量时，真实的查找路径是沿着作用域链来查找的
// scopeChain：VO + ParentScope   当前作用域+父级作用域