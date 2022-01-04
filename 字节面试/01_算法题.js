// 给定一个树形结构，实现name的序列化数组输出
// let obj = {
//   "name": "level 1",
//   "children": [
//     {
//       "name": "level 2",
//       "children": [
//         {
//           "name": "level 3",
//           "children": []
//         },
//         {
//           "name": "level 3 2",
//         }
//       ]
//     }
//    ],
//   // "name": "level 1 2",
// }

// 完成
// function outArr(obj) {
//   let res = []
//   for(let o in obj) {
//     if(o === 'name') {
//       res.push(obj[o])
//     }else {
//       if(Array.isArray(obj[o])) {
//         let temp = []
//         obj[o].forEach(e => {
//           temp.push(...outArr(e))
//         })
//         res.push(...temp)
//       }
//       else if(typeof(obj[o]) === object) {
//         res.push(...outArr(obj[o]))
//       }
//     }
//   }
//   return res
// }

// let r = outArr(obj)
// console.log(r);




// 数组扁平化
let arr = [1,2,[3,4,[5,[6,7]]]]
function flatArr(arr) {
  let res = []
  arr.forEach(e => {
    // if(Array.isArray(e)) {
    if(typeof(e) === 'object') {
      console.log(e);
      res.push(...flatArr(e))
    }else {
      res.push(e)
    }
  })
  console.log(res);
  return res
}

flatArr(arr)
// 函数的另一种声明方式
// let flaa = function() {

// }
