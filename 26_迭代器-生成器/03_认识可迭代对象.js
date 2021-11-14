// const names = ['a','b','c']
// let index = 0

// function createArrayIterator(arr) {
//   return {
//     next:function() {
//       if(index < arr.length) {
//         return {done:false,value:arr[index++]}
//       }else {
//         return {done:true,value:undefined}
//       }
//     }
//   }
// }

// 这个对象就是一个可迭代对象
const iteratorObj = {
  names:['a','b','c'],
  [Symbol.iterator] :function( ) {
    let index = 0
    return {
      // 箭头函数不绑定this，就可以访问到names了
      next:()  => {
        if(index < this.names.length) {
          return {done:false,value:this.names[index++]}
        }else {
          return {done:true,value:undefined}
        }
      }
    }
  }
}

// const iterator = iteratorObj[Symbol.iterator]()
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

// // 两个迭代器可以自己迭代自己的
// const iterator1 = iteratorObj[Symbol.iterator]()
// console.log(iterator1.next())
// console.log(iterator1.next())
// console.log(iterator1.next())
// console.log(iterator1.next())
// console.log(iterator1.next())

// for of 遍历的对象必须是一个可迭代对象
// const obj = {
//   name:'wh',
//   age:18
// }
// for(const i of obj) {
//   console.log(i)
// }

// 可迭代对象可以使用 for...of 迭代
for( const i of iteratorObj) {
  console.log(i)
}
