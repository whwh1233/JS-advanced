function foo() {
  m = 100
}
// 写 var 时候，m 定义在函数的 AO中
// 不写时，放在全局
foo()
console.log(m)

// 100
