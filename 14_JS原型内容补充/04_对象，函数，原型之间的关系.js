var obj = {
  name: 'why'
}
console.log(obj.__proto__ === Object.prototype)
// 对象里有一个 __proto__ 隐式原型对象
function foo() {}
// 函数 foo 有一个 prototype 的显式原型对象
// JS 内部帮我在创建函数时候，创建的原型对象，其中还有 constructor：function 对象
// 但函数foo 也是一个对象，也有一个 __proto__,
// function  是由 new Function 创建出来的，所有  foo的 __proto__ 指向 Function
// 我用 new Function 时，function 的__proto__ 指向 Function
console.log(foo.prototype)
console.log(foo.prototype.constructor)
console.log(foo.__proto__.constructor)
console.log(foo.prototype.constructor.__proto__)
console.log(foo.__proto__.constructor.__proto__)
// Function 是 唯一一个 __proto__ 与 prototype 指向相同的
console.log(Function.__proto__ === Function.prototype)
