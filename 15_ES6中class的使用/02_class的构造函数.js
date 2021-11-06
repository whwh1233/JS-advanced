// 类的声明和构造函数的声明是分开的
class Person {
  // 构造方法       只能编写一个构造函数
  // 1.在内存中创建一个对象
  // 2.将类的原型赋值给这个对象的proto
  // 3.将对象赋值给函数的this，new绑定
  // 4.执行函数体中的代码  （）
  // 5.自动返回创建的对象
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
// 类 如何接受参数

let p = new Person("wh", 10);
console.log(p);
