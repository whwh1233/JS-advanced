// class Person {

// }
// const p1 = new Person()
// const p2 = new Person()
// 创建一个教室类
class Classroom {
  constructor(address,name,students) {
    this.address = address
    this.name = name
    this.students = students
  }
  entry(newStudent) {
    this.students.push(newStudent)
  }
 [Symbol.iterator] () {
    let index = 0
    return {
      next:() => {
        if(index < this.students.length) {
          return {done:false,value:this.students[index++]}
        }else {
          return {done:true,value:undefined}
        }
      },
      return:() => {
        console.log('迭代器提前终止')
        return {done:true,value:undefined}
      }
    }
  }
}

const classroom = new Classroom('first floor','whwh1233',['james','curry'])

// console.log(classroom)
classroom.entry('kobe')
classroom.entry('kobe')
classroom.entry('kobe')

for(const item of classroom) {
  console.log(item)
  if(item === 'kobe') break
}

// 迭代器的中止


function person() {

}

person.prototype[Symbol.iterator] = function name(params) {

}
