const nums = [1,2,3,4,5,6]
const names = ['a','b','c']
// 创建数组迭代器的函数
function createArrayIterator(arr) {
  let index = 0
  return {
    next:function() {
      if(index < arr.length) {
        return {done:false,value:arr[index++]}
      }else {
        return {done:true,value:undefined}
      }
    }
  }
}

const namesItetator = createArrayIterator(nums)
// console.log(namesItetator.next())
// console.log(namesItetator.next())
// console.log(namesItetator.next())
// console.log(namesItetator.next())
// console.log(namesItetator.next())
// console.log(namesItetator.next())
// console.log(namesItetator.next())
// console.log(namesItetator.next())


function createNumIterator() {
  let index= 0
  return {
    next:function() {
      return {done:false,value:index++}
    }
  }
}
// 无限迭代器
const newNum = createNumIterator()
console.log(newNum.next())
console.log(newNum.next())
console.log(newNum.next())
console.log(newNum.next())
console.log(newNum.next())
console.log(newNum.next())
console.log(newNum.next())
console.log(newNum.next())
console.log(newNum.next())
console.log(newNum.next())
console.log(newNum.next())
console.log(newNum.next())
