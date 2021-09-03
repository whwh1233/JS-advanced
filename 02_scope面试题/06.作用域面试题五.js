function foo() {
  var a = (b = 10)
  // 转换成下面的两行代码
  // var a = 10
  // b = 10
}

foo()
console.log(b)
console.log(a)
console.log(b)

// 10
// undefined
// 10
