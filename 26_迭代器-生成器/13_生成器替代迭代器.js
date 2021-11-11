// 迭代器
function createArrayIterator(arr) {
  let index = 0
  return {
    next:function () {
      if(index < arr.length) {
        return {done:false,value:arr[index++]}
      }else {
        return {done:true,value:undefined}
      }
    }
  }
}

const names = ['a','bv','c']


// 生成器替代迭代器
function* createArrayGenerator(arr) {
  let index = 0
  // 1.第一种写法
  // yield arr[index++]
  // yield arr[index++]
  // yield arr[index++]
  // 2.第二种写法
  // for(const item of arr) {
  //   yield item
  // }
  // 3.第三种写法
  yield* arr
}

// const namesIterator = createArrayGenerator(names)
// console.log(namesIterator.next())
// console.log(namesIterator.next())
// console.log(namesIterator.next())
// console.log(namesIterator.next())
// console.log(namesIterator.next())

// 创建一个函数,可以迭代一个范围内的数字
// 10 20
// 迭代器
function createRangeIterator(from ,to) {
  let index = from
  return {
    next:function () {
      if(index <= to) {
        return {done:false,value:index++}
      }else {
        return {done :true,value:undefined}
      }
    }
  }
}

function* createRangeGenetator(from,to) {
  let index = from
  while(index <= to){
    yield index++
  }
}

const range = createRangeGenetator(10,20)
// console.log(range.next())



class Classroom {
  constructor(address,name,students) {
    this.address = address
    this.name = name
    this.students = students
  }
  entry(newStudent) {
    this.students.push(newStudent)
  }
  foo =  () => {
    console.log('foo function')
  }
  // 三种写法
  // [Symbol.iterator] = function*() {
  //   yield* this.students
  // }
  *[Symbol.iterator] () {
    yield* this.students
  }
//  [Symbol.iterator] () {
//     let index = 0
//     return {
//       next:() => {
//         if(index < this.students.length) {
//           return {done:false,value:this.students[index++]}
//         }else {
//           return {done:true,value:undefined}
//         }
//       },
//       return:() => {
//         console.log('迭代器提前终止')
//         return {done:true,value:undefined}
//       }
//     }
//   }
}

const c = new Classroom('bj','wh',['wg','whwh',3,4])
for(item of c ){
  console.log(item)
}
