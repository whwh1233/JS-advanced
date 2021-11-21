var names =['a','b','c','d']
// slice 传入 start end 会给我们返回一个确定的值
// slice 函数本身不会修改原来的数组
var newNames1 = names.slice(0,3)
console.log(names)
// console.log(newNames1)

// splice 在执行时，会修改原来的数组，修改的这个操作就是产生的副作用
var newNames2 = names.splice(2)
console.log(names)
console.log(newNames2)
