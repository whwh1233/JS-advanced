var obj = {
  name:'wh'
}

// 在大多数情况下，this使用在函数中
// 在全局作用域下  
//        浏览器：window  global object
//        node： 空对象   {}
// node 的运行： 把文件作为模块进行加载， module
// 然后进行 module的加载
// 然后进行编译，编译代码
// 然后把所有代码放入一个函数里
// 然后执行这个函数，使用apply方法绑定this    function.apply({})  绑定一个空对象
console.log(this)
// console.log(window)


// 函数执行上下文中
// 存储了   AO scopeChain this
// 调用this 时，就在函数执行上下文中寻找this，  这个this是动态绑定的
// 意即   在函数运行时候绑定的，而不是编译的时候，使用不同的绑定规则，this的指向就不同