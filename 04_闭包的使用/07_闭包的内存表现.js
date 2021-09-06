function foo() {
  var name = "wh"
  var age = 18
  function bar () {
    console.log(name)
    console.log(age)
  }
  return bar
}

var fn = foo()
fn()

// 如何解决闭包里的内存泄漏
fn = null