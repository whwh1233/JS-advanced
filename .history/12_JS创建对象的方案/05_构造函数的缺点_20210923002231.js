function foo() {
  function bar() {}
  return bar
}

var fn1 = foo()
var fn2 = foo()
console.log(fn1 === fn2)
// 没必要给每个对象都创建一个函数对象
// 这就是构造函数的缺点
