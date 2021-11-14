// 1. for...of

// 2.展开语法
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
const names = [ 'a','bv','csd']
const newNames = [...iteratorObj,...names]
console.log(newNames)
// 对象不能使用for...of ，但是可以使用...，但和迭代器没关系，是一个新的语法 ECMA的要求
const obj = {name:'hw',age:17}
console.log({...obj})

// 3.数组的解构(对象不是)
const [ n1,n2,n3] = names
const {name,age} = obj
console.log(n1,n2,n3)
console.log(name,age)

// 4.创建一些其他对象时
const set = new Set(iteratorObj)
const set1 = new Set(names)
console.log(set)
console.log(set1)
const arr1 = Array.from(iteratorObj)
console.log(arr1)

// 5.Promise.all
Promise.all(names).then(res => console.log(res))
