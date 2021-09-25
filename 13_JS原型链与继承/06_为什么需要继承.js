function Student(name, age, height) {
  this.name = name
  this.age = age
  this.height = height
}
Student.prototype.running = function () {
  console.log(this.name + 'running')
}

Student.prototype.eating = function () {
  console.log(this.name + 'eating')
}
Student.prototype.reading = function () {
  console.log(this.name + 'reading')
}

function Teacher(name, age, title) {
  this.name = name
  this.age = age
  this.title = title
}
Teacher.prototype.running = function () {
  console.log(this.name + 'running')
}
Teacher.prototype.eating = function () {
  console.log(this.name + 'eating')
}
Teacher.prototype.teaching = function () {
  console.log(this.name + 'teaching')
}

function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype.running = function () {
  console.log(this.name + 'running')
}
Person.prototype.eating = function () {
  console.log(this.name + 'eating')
}
