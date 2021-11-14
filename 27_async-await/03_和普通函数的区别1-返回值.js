// 异步函数的返回值一定是一个Promise
async function foo() {
  console.log('function start')
  console.log('中间代码');
  console.log('function end')

  // 1.返回一个值
  // return 11
  // 2.返回一个thenable
  // return {
  //   then:function (resolve,reject) {
  //     resolve('haha')
  //   }
  // }
  // 3.返回一个Promise
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('111')
    }, 2000);
  })
}

const a = foo()
// 会添加到微任务队列
a.then(res => {
  console.log(res)
})
console.log(a)
