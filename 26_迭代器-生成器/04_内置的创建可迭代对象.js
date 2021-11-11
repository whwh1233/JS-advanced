const names = ['a','b','c','d']
// for(name of names) {
//   console.log(name)
// }

// 访问数组的迭代函数实现
// console.log(names[Symbol.iterator])
// const iterator = names[Symbol.iterator]()
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

// const set = new Set()
// set.add('a')
// set.add('a')
// set.add('a')
// set.add('a')
// for(s of set) {
//   console.log(s)
// }

// 函数的arguments也可以可迭代对象
function foo(x,y,z) {
  console.log(arguments[Symbol.iterator])
  for(const arg of arguments){
    console.log(arg)
  }
}

foo(10,20,30)
