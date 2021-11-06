function foo() {}

console.log(foo.prototype);

const f = new foo();

var bar = () => {};
// 箭头函数没有显式原型,所以不能被new 调用
// const ff = new bar();
