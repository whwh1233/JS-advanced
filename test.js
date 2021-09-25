// let arr = [
//   {date:'20210902',value:1},
//   {date:'20210903',value:3},
//   {date:'20210905',value:5},
//   {date:'20210902',value:2},
//   {date:'20210903',value:1},
//   {date:'20210902',value:6},
// ]
// let result = []
// for(let i = 0;i< arr.length;i ++) {
//   let date = arr[i].date
//   newArr = arr.filter(item => item.date === date)
//   let newItem = []
//   for(index in newArr) {
//     if(index == 0) {
//       newItem.push(newArr[index].date,newArr[index].value)
//     }else{
//       newItem.push(newArr[index].value)
//     }
//     // arr.splice(i+index,1)
//     console.log(arr)
//   }
//   result.push(newItem)
// }

// console.log(result)

console.log(typeof [1, 2, 3].join('---'))
