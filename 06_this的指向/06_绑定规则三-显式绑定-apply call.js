// function foo() {
//   console.log('函数被调用了')
// }

// var obj = {
//   name:'wh'
// }

// // 直接调用
// foo()
// foo.call(obj)
// foo.apply(obj)


// 1.函数这个对象有个方法叫做call  和  apply

// foo 的直接调用和 apply 和call 的区别在于
// 对于 this 的指向不同
// foo()指向全局对象
// call 和 apply 可以手动指定this指向的一个对象 （这个对象内并不存在一个对于该foo的引用）

// 2. call  和  apply  的区别？
// 传参的形式不同
function sum (num1,num2) {
  console.log(num1+num2)
  console.log(this)
}
sum(20,30)
// call  挨个写就行
sum.call('call',20,30)
// apply 所有参数放进一个数组里
sum.apply('apply',[20,33])


// 3. call 和 apply 可以明确的帮助我们绑定this，，，，叫做 显式绑定


