// foo 函数是否是一个纯函数
// 1. 相同的输入是否会产生相同的输出
// 2. 在执行过程中不会产生任何副作用

// foo 是个纯函数
function foo(num1,num2) {
  return num1 * 2 + num2 * 2
}

var name = 'abv'
function bar() {
  console.log("bar 其他代码执行")
  name = 'ca'
}
bar()
console.log(name)
function baz(info) {
  info.age = 18
}
var obj = {
  name:'wh',
  age:81
}
baz(obj)
console.log(obj)
// bar 和 baz 都不是纯函数

// fff是个纯函数
function fff(info) {
  return {
    ...info,
    age:5000
  }
}

fff(obj)
console.log(fff(obj))
console.log(obj)

// react 的组件希望是个纯函数，就是为了不让组件修改传入的东西，为了不让修改props，免得产生别的影响
// 所有的react组件必须像纯函数一样保护props不被改变

// 纯函数可以安心地编写，安心地使用，只用关心传入参数和返回值
// 单纯实现业务逻辑，不需关心传入的内容会改变/如何获得？ 依赖的外部变量是否变化了
