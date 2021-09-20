function add(x,y,z) {
  return x+y+z
}
var result = add(1,2,3)
console.log(result)

function sum(x) {
  return function sum2(y) {
    return function sum3(z) {
      return x+y+z
    }
  }
}

var r = sum(1)(2)(3)
console.log(r)

// 简化柯里化的代码   箭头函数的简化写法
var sum2 = x => y => z => x+y+z

var rr = sum(1)(2)(4)
console.log(rr)