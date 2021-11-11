function* foo() {
  console.log('函数开始执行');
  const value = 1
  console.log('第一段');
  console.log(value)
  // 有 yield 是暂停函数的执行，遇到return ，函数就停止执行
  // return value
  yield value
  console.log('-----------')
  console.log('第二段');
  const value2 = 11
  console.log(value2)
  yield
  console.log('第三段');
  const value3 = 111
  console.log(value3)
  yield
  console.log('第四段');
  console.log('函数执行结束');
  return 123
}

const generator = foo()
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
