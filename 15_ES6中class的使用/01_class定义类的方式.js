// 1.类的声明
class Person {}
// 2.类的表达式
var animal = class {};
// 研究类的特点
console.log(Person.prototype);
console.log(Person.prototype.constructor);
console.log(typeof Person); //function
let p = new Person();
console.log(p.__proto__ === Person.prototype); //true
