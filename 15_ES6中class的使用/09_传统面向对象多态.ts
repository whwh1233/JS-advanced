class Shape {
  getArea() {}
}

class Rec extends Shape {
  getArea() {
    return 100;
  }
}

class Circle extends Shape {
  getArea() {
    return 200;
  }
}

let r = new Rec();
let c = new Circle();
// 多态：对不同的数据类型执行同一个操作时，表现不同的行为，就是多态的体现
// 传统的面向对象的前提：
// 1.必须有继承
// 2.必须有重写（子类重写父类的方法）
// 3.父类的引用指向子类的对象
function calcArea(shape: Shape) {
  console.log(shape.getArea());
}

calcArea(r);
calcArea(c);
