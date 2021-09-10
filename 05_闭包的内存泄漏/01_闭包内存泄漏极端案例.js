function createArray() {
  var arr  = new Array(1024 * 1024).fill(1)
  // 这个数组会占据多少的空间
  // int 类型 占据四个字节， 1024*1024*4 = 4MB
  return function() {
    console.log(arr.length)
  }

}

// var arrayFn = createArray()
var arrFns = []
for(var i = 0; i<200;i++) {
  arrFns.push(createArray())
}
setTimeout(() => {
  arrFns = null
},2000)