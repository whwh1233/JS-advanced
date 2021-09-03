var a = 100

function foo() {
  console.log(a)
  return
  var a = 200
}

foo()

// 扫描函数定义时候，不管是不是在return后面
// undefined
