class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  running() {
    console.log(this.name, "running");
  }
  personMethod() {
    console.log("1");
    console.log("2");
  }
  static staticMethod() {
    console.log("static");
  }
}

// js解析有继承的子类的constructor之前必须调用父类的构造函数 super，在访问this之前，或者在return 之前
// 在 constructor 中必须调用 super
class Student extends Person {
  constructor(name, age, num) {
    super(name, age);
    this.num = num;
  }
  // 子类对父类方法的重写
  running() {
    console.log(this.name, "hwhwrunggi");
  }
  personMethod() {
    // 重写之前 先调用父类的这个方法
    super.personMethod();
    console.log("2");
    console.log("3");
    console.log("4");
  }
  // static staticMethod() {
  //   super.staticMethod();
  //   console.log("staticMetohd");
  // }
}

let s = new Student("wh", 19, 0);
console.log(s);
s.running();
s.personMethod();
// s.staticMethod();
