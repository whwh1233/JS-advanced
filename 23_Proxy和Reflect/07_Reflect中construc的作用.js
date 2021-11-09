function student(name, age) {
  this.name = name;
  this.age = age;
}
function teacher() {}

const s = new student("hw", 12);
console.log(s);
console.log(s.__proto__ === student.prototype);
// 如何执行 student 中的内容，但是对象是teacher 类型
const t = Reflect.construct(student, ["why", 30], teacher);

console.log(t);
console.log(t.__proto__ === teacher.prototype);
