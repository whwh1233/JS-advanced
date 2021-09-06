function foo() {
  function bar() {
    console.log("bar")
  }
  return bar
}

var fn = foo()
fn()
// 这段代码
