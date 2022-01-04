// 封装：给所有的函数添加一个whcall的方法

Function.prototype.whcall = function(thisArg, ...args) {
  console.log('whcall 被调用')
  // 需要在这里执行调用我的函数
  // 需要获取一下是哪个函数执行了whcall
  // 1. 获取调用我的函数,需要执行的函数
  var fn = this
  // 防止thisAgr传入的是非对象类型
  thisArg =   thisArg?Object(thisArg):window
  // 2. 执行调用我的函数
  thisArg.fn = fn
  console.log(...args)
  var r  = thisArg.fn(...args)
  return r
}

function foo() {
  console.log('foo被调用了',this)
}

function sum(num1,num2) {
  console.log('sum被调用了',this)
  console.log(num1 + num2  )
  return num1+ num2

}

// foo.call(123)
// foo.whcall('whwh')
// foo.whcall(null)
var r1 = sum.whcall("anc",20,30)
var result = sum.call("anc",20,30)
console.log(r1)
console.log(result)
