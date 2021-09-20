// var obj = {
//   name:'obj',
//   foo:function() {
//     console.log(this)
//   }
// }
// 0. 默认绑定的优先级最低
// // 1. call apply 的显示绑定高于隐式绑定
// obj.foo.call('abc')

// // 2. bind 也是
// var bar = obj.foo.bind('cba')
// bar()
// 下面是更明显的比较
function foo() {
  console.log(this)
}
var obj = {
  name:'obj',
  foo:foo.bind('aaa')
}
obj.foo()