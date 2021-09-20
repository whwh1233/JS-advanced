function foo() {
  console.log("foo被执行了")
  console.log(this)
}

function sum(num1,num2,num3,num4) {
  var result = num1 + num2 + num3 + num4
  console.log(result)
  return result
}

Function.prototype.whbind = function(thisAgr,...argsArray) {
  var fn = this       // 指向我们需要调用的函数
  thisAgr = (thisAgr !== null && thisAgr !== undefined)?Object(thisAgr):window   // 利用隐式绑定来绑定fn执行时候的this
  function proxyFn(...args) {
    // 对两个传入的参数进行合并
    var finalArgs = [...argsArray,...args]
    thisAgr.fn = fn
    var result =  thisAgr.fn(...finalArgs)
  }
  return proxyFn
}

// var bar = foo.bind("abc")
// bar()
// var newSum = sum.bind('cba')
// newSum(20,30,40)
// var bar = foo.whbind("abc")
// console.log(bar())
var newSum = sum.whbind('cba',10)
newSum(20,30,40)