var nums = [5,11,100,45,98]
// 挑出偶数
// var newNums=[]
// for(var i  = 0;i < nums.length;i ++) {
//   if(nums[i] % 2 === 0) {
//     newNums.push(nums[i])
//   }
// }

// console.log(newNums)

// 函数 function:独立的function 称之为函数，
// function foo() {}
// // 方法 method:当一个函数属于一个对象时，我们成这个函数为这个对象的方法
// var obj = {
//   foo:function() {

//   }
// }
// obj.foo()
// 1.filter ：过滤函数/过滤方法
// 五个元素，自动回调五次这个传入的函数，
// (item(一个一个数组的值),index(对应的下标值),数组的引用(把整个数组的引用传递给你带你使用))
// let newNums = nums.filter(function(item,index,arr)  {
//   // 返回一个boolean值
//   // 返回false 就舍弃这个元素
//   // 返回 true 就会给到新的数组
//   return item%2===0
// })
// console.log(newNums)


//2. map 用来做数组映射
var newNums2 = nums.map(function(item) {
  return item*10
})

// console.log(newNums2)

// 3.foreach 用来做迭代，穷举，遍历
// foreach 没有返回值
nums.forEach(function(item) {
  // console.log(item)
})

// 4.find / findIndex 
var num = nums.find(function(item) {
  return item === 200
})

// console.log(num)

var friends = [{name:'why',age:'18'},
                {name:'kobe',age:'45'},
                {name:'curry',age:'30'},
                {name:'james',age:'35'},]

var friend = friends.find(function(item) {
  return item.name === 'james'
})
// console.log(friend)
var friendIndex = friends.findIndex(function(item) {
  return item.name === 'james'
})
// console.log(friendIndex)


// 5.reduce 累加
// nums.reduce
var total = 0
for(var i = 0; i < nums.length;i++) {
  total += nums[i]
}
console.log(total)

// 第二个参数是指定的初始值,默认为0,但是也要传
var sum = nums.reduce(function(prevValue,item) {
  return prevValue + item
},0)

console.log(sum)