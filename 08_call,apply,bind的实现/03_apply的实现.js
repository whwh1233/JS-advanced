// apply 和 call 的最大的区别就是   apply可能没有传参，但失去了 ...args的处理，所以我们需要自己处理
Function.prototype.whapply = function(thisAgr,arr) {
  var fn = this
  var thisAgr = thisAgr?Object(thisAgr):window
  thisAgr.fn = fn
  arr = arr || []
  var r = thisAgr.fn(...arr)
  return r
}

function sum(num1,num2){
  console.log('sum被调用',this,num1,num2)
  return num1 + num2
}
function foo(num){
  return num
}

function bar() {
  return 'bar'
}


var result =  sum.apply("abc",[20,0])
console.log(result)

var result1 = sum.whapply("abc",[20,60])
console.log(result1)

var result2 = foo.apply("an",[20])
console.log(result2)
var result2 = foo.whapply("an",[20])
console.log(result2)
var result3 = bar.apply("an")
console.log(result3)
var result3 = bar.whapply("an")
console.log(result3)