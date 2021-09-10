// function foo() {
//   console.log(this)
// }
// // 独立函数调用，没有任何对线 . 之类的操作 没有调用的主题
// // 默认绑定：独立函数调用
// 案例1
// foo()

// 案例2
// function foo1() {
//   console.log(this)
// }
// function foo2() {
//   console.log(this)
//   foo1()
// }
// function foo3() {
//   console.log(this)
//   foo2()
// }
// foo3()
// 以上三个也都是独立函数调用，

// 案例3
var obj = {
  name:'whh',
  foo:function() {
    // var name = 'wh'
    console.log(this.name)
  }
}
var bar = obj.foo
bar()
// 独立函数调用，this绑定的就是window

// 案例4
// function foo() {
//   console.log(this)
// }

// var obj = {
//   name:'wh',
//   foo:foo
// }
// var bar = obj.foo
// bar()

// 案例5
// function foo() {
//   function bar() {
//     console.log(this)
//   }
//   return bar
// }
// var fn = foo()
// fn()     // 没有调用主题 window

// var obj = {
//   name:'wh',
//   eating:fn
// }
// obj.eating()   // 隐式绑定，obj