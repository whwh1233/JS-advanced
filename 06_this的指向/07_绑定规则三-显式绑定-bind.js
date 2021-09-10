function foo() {
  console.log(this)
}
// foo.call("aaa")
// foo.call("aaa")
// foo.call("aaa")
// foo.call("aaa")
// 使用简单的办法
// newFoo 是一个新的函数， 而且this 被显式的绑定给了aaa
var newFoo = foo.bind("aaa")
// 在这里，默认绑定和显式绑定发生了冲突，但显式绑定的优先级更高，this已经被绑定了
newFoo()
newFoo()