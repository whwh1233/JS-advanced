// 基本数据类型 分配到栈，直接在栈中分配

// 复杂数据类型，在堆内存中开辟一块空间，使用指针返回值进行引用

var age = 18
var obj = {
  name:'wh',
  height:180
}
var names = ['a','b','c']

// GC  garbage collection
// 垃圾回收 垃圾回收器