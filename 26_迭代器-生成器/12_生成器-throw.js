function* foo() {
  console.log('代码开始执行');
  const value = 1
  try {
    yield value
  }catch(err){
    console.log('捕获到异常',err)
    // yield err
  }
  console.log('第二段代码开始执行');
  const value2 = 2
  yield value2
  console.log('代码结束执行');
}


const generator = foo()
console.log(generator.next())
// throw 代码也不会继续执行
console.log(generator.throw('lalala'))
console.log(generator.next());
console.log(generator.next());
