// 工厂模式：工厂函数
function createPerson(name,age,address) {
  var p = {}
  p.name = name
  p.age = age
  p.address = address
  p.eating = function() {
    console.log('eating')
  }
  p.running = function() {
    console.log('running')
  }
  return p 
}
// 工厂模式的缺点,看不到相应的Person类型  获取不到对象最真实的类型

var p1 = createPerson("wh1",18,'beijing')
var p2 = createPerson("wh2",28,'shanghai')
var p3 = createPerson("wh3",38,'guangzhou')

console.log(p1,p2,p3)


