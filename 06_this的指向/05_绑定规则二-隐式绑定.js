// 隐式绑定：  obj.fn()
// obj对象会被js引擎绑定到fn函数的this中
// 对象里必须有一个属性 指向 这个被调用的函数


// 通过某个对象调用
// function foo() {
//   console.log(this)
// }
// foo()

// 案例1:
// var obj = {
//   name:'wh',
//   foo:foo
// }
// obj.foo()

// 案例2：
// var obj = {
//   name:'wh',
//   eating:function() {
//     console.log(this.name + 'eating')
//   },
//   running:function() {
//     console.log(this.name + 'running')
//   },
// }

// // obj.eating()
// // obj.running()
// var fn = obj.eating
// fn()

// 案例3
var  obj1 = {
   foo() {
     console.log(this)
   },
}

var obj2 = {
  name:'obj22',
  bar:obj1.foo
}

obj2.bar()