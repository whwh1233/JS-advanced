const { getFileInfo } = require("prettier");

function requestData(url) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(url)
    }, 1000);
  })
}
// 1.第一种方案发送请求
// requestData('000').then(res =>{
//   requestData(res+'aaa').then(res => {
//     requestData(res + 'bbb').then(res => {
//       console.log(res)
//     })
//   })
// }).catch(err => console.log(err))

// 2.第二种方案  利用Promise的Promise返回值
// requestData('000').then(res => {
//   return requestData(res + 'aaa')
// }).then(res => {
//   return requestData(res+'bbb')
// }).then(res => {
//   console.log(res)
// })

// 3.第三种方案，Promise + generator 实现
function* getData() {
  const res1 = yield requestData('why')
  const res2 = yield requestData(res1 + 'aaa')
  const res3 = yield requestData(res2 + 'bbb')
  console.log(res3)
}

// 1. 手动执行生成器函数
// const generator = getData()
// generator.next().value.then(res => {
//   generator.next(res).value.then(res => {
//     generator.next(res).value.then (res => {
//       console.log(generator.next(res))
//       console.log(res)
//     })
//   })
// })
// 3.第三方库（在async await 出现之前   由 TJ 编写）
const co = require('co')
co(getData())

// 2，自动执行递归
// function execGenerator(getFn) {
//   const generator = getFn()
//   function exec(res) {
//     let result = generator.next(res)
//     if(result.done) {
//       return result.value
//     }
//     result.value.then(res => {
//       exec(res)
//     })
//   }
//   exec()
// }
// execGenerator(getData)

// 4. 第四种方案 async await
async function getData() {
  const res1 = await requestData('why')
  const res2 = await requestData(res1 + 'aaa')
  const res3 = await requestData(res2 + 'bbb')
  console.log(res3)
}
