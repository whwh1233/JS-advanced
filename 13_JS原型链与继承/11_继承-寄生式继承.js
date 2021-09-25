var obj = {
  name: 'why',
  age: 18
}

var pObj = {
  running: function () {
    console.log(this + 'running')
  }
}

// 原型式继承 在工厂函数中 进行了 增强
// 叫做寄生式继承
function createStudent(name) {
  var stu = Object.create(pObj)
  stu.name = name
  stu.studying = function () {
    console.log('studying')
  }
  return stu
}

var stuObj = createStudent(pObj)
var stuObj1 = createStudent(pObj)
var stuObj2 = createStudent(pObj)
var stuObj3 = createStudent('wh')
console.log(stuObj3)
stuObj3.studying()
