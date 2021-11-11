// 1.await 跟上表达式
function getData() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      reject(123)
    }, 2000);
  })
}

// async function foo() {
//   // await 表达式(Promise)
//   // await new Promise(() => {})
//   // await 这个表达式的结果是这个Promise中resolve的结果
//   const res = await getData()
//   console.log(res);
//   // res 没有获得结果，后面的代码不会执行
//   // 后面的代码相当于在 Promise 中的then 中执行的
//   console.log('后面的代码1')
//   console.log('后面的代码2')
//   const res2 = await getData()
//   console.log(res2);
//   console.log('后面的代码3')
//   console.log('后面的代码4')
// }

// 2. 跟上普通值 或者其他值
// async function foo() {
//   // const res = await 123
//   // const res = await {
//   //   then:function (resolve,reject) {
//   //     resolve(123)
//   //   }
//   // }
//   const res2 = await new Promise((resolve,reject) => {
//     resolve(344)
//   })
//   console.log(res2);
//   console.log('后面的代码');
// }


// 3.reject 的情况  必须使用reject接收
async function foo() {
  const res = await getData()
  console.log(res)
}
foo().catch(err => {
  console.log(err);
})
