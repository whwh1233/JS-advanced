// 块代码  ES5中没有块级作用域
{
  var foo = "foo";
}
console.log(foo);

// 在ES5中，只有两个东西会产生作用域
// 1.全局作用域
// 2.函数作用域
function bar() {
  var baz = "baz";
  function inner() {
    console.log(baz);
  }
  inner();
}
bar();
// console.log(baz);
