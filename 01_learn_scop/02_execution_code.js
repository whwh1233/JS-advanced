var name = 'wh';
console.log(name)
console.log(result)
var num1 = 20
var num2 = 30
var result = num1 + num2

console.log(result)

// var GlobalObject = {
//   String:class,
//   Date:class,
//   setTimeout:function,
//   window:GlobalObject,
//   // 将上述代码放到这里面
//   name:undefined,
//   num1:undefined,
//   num2:undefined,
//   result:undefined
// }

// 1.运行之前，先解析：V8引擎为我们创建一个对象(堆内存中)， GlobalObject = {} (go) 包含当前node/浏览器中
// 的默认对象 math/string/settimeout,以及window 属性（指向go自己， 即this  可以window.window.window.window）
// 会把编译时候的全局变量都加入到go中，全为undefined。
// 2.运行代码
//  2.1 v8为了执行代码，v8引擎内部会有一个执行上下文栈(函数调用栈) Execution Context Stack ECStack
//      将代码从磁盘导入内存中，里面有堆和栈，
//  2.2 因为我们执行的是全局代码，为了其能够正常执行，需要创建全局执行上下文GEC，(Global Execution Stack)
//      把GlobalObject导入GEC中的VO(variable object)
//      然后可以执行代码了
//  2.3 GO 就是变量提升的原理   