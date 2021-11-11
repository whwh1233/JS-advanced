function* foo() {
  console.log('函数开始执行');
  const value = 1
  console.log(value)
  yield
  const value2 = 11
  console.log(value2)
  yield
  const value3 = 111
  console.log(value3)
  yield
  console.log('函数执行结束');
}

//  *
// 可以使用 yield 控制代码的执行
// 生成器函数的返回值是一个生成器对象

const generator = foo()
// 调用的时候，函数一行代码都不执行
// yield 前的代码就是执行一次next 的第一段代码
// 执行完了不会返回  undefined
generator.next()
generator.next()
// generator.next()
// generator.next()
// generator.next()
// generator.next()
// generator.next()
// generator.next()
