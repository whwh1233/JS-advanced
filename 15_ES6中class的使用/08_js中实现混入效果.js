class Person {}
class Runner {
  running() {
    console.log("running");
  }
}

class Eater {
  eatting() {
    console.log("eating");
  }
}

function mixinRunning(BaseClass) {
  class newClass extends BaseClass {
    running() {
      console.log("running");
    }
  }
  return newClass;
}
function mixinEating(BaseClass) {
  return class extends BaseClass {
    eating() {
      console.log("eating");
    }
  };
}
// js 只支持单继承
// 如何混入 running 方法呢
class Student extends Person {}
var NewStudent = mixinEating(mixinRunning(Student));
let stu = new NewStudent();
stu.running();
stu.eating();
