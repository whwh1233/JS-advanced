function sum (x,y) {
  return x + y
}
// 假如在程序中，经常需要 5 + what

function makeadd(add) {
  return function(num) {
    return num + add
  }
}
var result = makeadd(5)(10)
console.log(result)
var add5 = makeadd(5)
console.log(add5(20))