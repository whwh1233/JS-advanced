const names = ['a','b','c']

let index = 0
const namesItetator = {
    next:function() {
      // return {done:false,value:'a'}
      // return {done:false,value:'b'}
      // return {done:false,value:'c'}
      // return {done:true,value:undefined}
      if(index < names.length) {
        return {done:false,value:names[index++]}
      }else {
        return {done:true}
      }

    }
}

// 利用这个对象的next函数访问另一个可迭代对象
console.log(namesItetator.next())
console.log(namesItetator.next())
console.log(namesItetator.next())
console.log(namesItetator.next())
console.log(namesItetator.next())
console.log(namesItetator.next())


const nums = [1,2,3,4,5,5]
const numsIterator = {}
