// ES6的块级作用域对var没有效果
// 对于 let const class 生效
// 大部分浏览器为了兼容以前的代码，让function没有了块级作用域

{
  let foo = "foo";
  function demo() {
    console.log("demo function");
  }
  class Person {}
}
// console.log(foo);
demo();
console.log(Person);
