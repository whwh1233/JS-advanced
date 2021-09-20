function double (x) {
  return x * 2
}
function square(x) {
  return x * x
}

var result = square(double(1))
console.log(result)

function composeFn (fn1,fn2) {
  return function(count) {
    return fn1(fn2(count))
  }
}

var c = composeFn(square,double)
console.log(c(3))