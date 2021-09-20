var foo = () => {
  console.log(arguments)
}

var foo1 = function () {
  console.log(arguments)
}
foo1(11)
foo()


// 但箭头函数有 args 剩余参数 可以使用

