// async(asynchronous)/await
async function foo() {
  console.log('内部执行1')
  console.log('内部执行2')
  console.log('内部执行3')
  console.log('内部执行4')
  console.log('内部执行5')
}

// 没有特殊代码就跟普通函数执行顺序一致
console.log('script start')
foo()
console.log('script end')

