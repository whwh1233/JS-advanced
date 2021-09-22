// 创建一个对象来对一个人进行抽象

// 早期创建对象的常见方式 跟风java
// 创建方式1，通过new Object() 创建
var obj = new Object()
obj.name = 'wh'
obj.age = 18
obj.height = 188
Obj.running = function() {
  console.log('在跑步')
}

// 创建方式2.字面量形式
var info = {
  name:'22h2h',
  age:1,
  eating:function() {
    console.log('在吃饭')
  }
}