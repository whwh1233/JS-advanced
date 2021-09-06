// function foo() {
//   var name = "foo"
//   function bar() {
//     console.log("bar",name)
//   }
//   return bar
// }

// var fn = foo()
// fn()
// 这段代码的闭包：
//  执行 bar 时候
//  本该销毁的foo 的 AO 没有被销毁，并且可以被bar访问到
// 闭包是由两部分组成的， 函数 + 可以访问的自由变量

var name = "wh"
// 在词法解析的时候，就确定了的闭包   函数以及其能访问的自由变量
function test1() {
  console.log(name)
}

function test2() {
  var name = 'whwh1233'
  test1()
}
test2()