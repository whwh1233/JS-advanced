// js 语法允许 函数在内部 继续定义函数

// function foo() {
//   function bar() {
//     console.log("bar")
//   }
//   return bar
//   // return bar   这样返回的是函数本身
//   // return bar()  这样返回的是函数的执行后的值
// }

// var fn = foo()
// fn()

function makeAdder(count) {
  function add(num){
    return count + num
  }
  return  add
}

var add5 = makeAdder(5)
console.log(add5(6))
console.log(add5(10))

var add15 = makeAdder(15)
console.log(add15(15))

// 高阶函数
// 如果一个函数接受一个函数作为参数，或者会把一个函数作为返回值返回，就可以称为高阶函数