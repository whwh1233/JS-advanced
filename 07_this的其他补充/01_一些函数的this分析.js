// 1. setTimeout 
setTimeout(function() {
  console.log(this)
},1000)

// function whSetTimeout(fn,duration) {
//   // fn()
//   // fn.call("abc")
// }
// whSetTimeout(fn,duration)

// setTimeout 内部是直接调用这个函数的，所以this  指向window

// 2. 监听点击
// 使用了 隐式绑定  boxDiv.onClick()
const boxDiv = document.querySelector('.box')
boxDiv.onclick = function () {
  console.log(this)
}

// 3.数组 forEach/map/filter/map/find
var names = ['a','b','c','d']
names.forEach(function(item) {
  console.log(this)
  console.log(item)
},"abc")
// forEach 的第二个参数可以用来修改this
// thisAgr  就代表了this   
// 当this 交给别人执行时， this的指向就交给了api

names.map(function(item) {
  console.log(this)
  console.log(item)
},"abc")  