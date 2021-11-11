// 假如需要参数怎么办
function* foo(num) {
  console.log('函数开始执行');
  const value = 1 * num
  console.log('第一段');
  console.log(value)
  const n = yield value
  // 给第二段穿的参数在上一句代码中进行接收
  console.log('-----------')
  console.log('第二段');
  const value2 = 11 * n
  console.log(value2)
  const nn = yield 2
  console.log('-----------')
  console.log('第三段');
  const value3 = 111 * nn
  console.log(value3)
  yield
  console.log('-----------')
  console.log('第四段');
  console.log('函数执行结束');
  return 123
  console.log('-----------')

}

// 生成异常
const generator = foo(5)

console.log(generator.next())
// 一般情况下调用next
// console.log(generator.next())
// 也可以这样，但是不会执行，但是会有返回值  相当于在第一段代码后面增加了一句 return 100
// 相当于终止了函数的执行
console.log(generator.return(100))
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())

