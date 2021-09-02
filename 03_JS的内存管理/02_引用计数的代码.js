var obj = {
  name: "why"
}

var info = {
  name:'wh',
  friend:obj
}

var p = {
  name:'james',
  friend:obj
}
// 1.引用计数
// 只要有东西指向我，我的引用计数就+1  retain count

info.friend = null
// 少了一个引用，就 -1
// 引用计数变成0  就可以直接回收
// 产生循环引用很危险


// 2.标记清楚  （主要采用标记清除的方法）
// 从根对象开始找，能找到的就不清楚   找不到的就是没有引用的对象
// 称为不可达的对象，就认为是不可用的对象，就可以清除了
// 可以很好地解决 循环引用的问题
