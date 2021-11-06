// console.log(foo);
// var foo = "foo";

console.log(foo);
// 这样不可以访问，let/const 没有作用域提升
// 使用let声明的变量在词法作用域被创建的时候就被创建出来了
// 只是在未绑定值的时候无法被访问
let foo = "foo";
