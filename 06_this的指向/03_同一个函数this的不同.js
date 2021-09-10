// this 指向什么，跟函数所处的位置没有关系
// 跟函数被调用的方式有关系
// this是在运行时被确定的

function foo() {
  console.log(this)
}

// 1.直接调用
foo()

// 2.创建一个对象，进行调用
var obj = {
  name:'why',
  foo:foo
}
obj.foo()

// 3. apply 调用
foo.apply("abc")


// 四个绑定规则
// 1.默认绑定
// 2.隐式绑定
// 3.显式绑定
// 4.new 绑定