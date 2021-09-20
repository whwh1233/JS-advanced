function foo() {
  console.log(this)
}

// new 的优先级高于 显式绑定  apply bind
var bar = foo.bind('aaa')

var obj = new bar()

// 总结
// new > 显式 > 隐式 > 默认