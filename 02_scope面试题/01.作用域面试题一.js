var n = 100
function foo() {
  var n = 200
  console.log(n)
}
foo()
console.log(n)

// 200
// 100
