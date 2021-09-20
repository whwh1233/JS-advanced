// 传入一个函数，返回一个新的函数
function whCurrying(fn) {
  // 判断已经接受的参数和需要接受的参数是否一致 
  // 1.当已经接受的参数够了的时候，就执行函数
  function curryFn(...args) {
    if(args.length >= fn.length){
      return fn.apply(this,args)
    }
    else {
      // 没有达到数目时，需要返回一个新函数，继续来接受函数
      function rest(...args2) {
        // 接受到参数时候，需要递归调用来检查参数的个数是否达到
        return curryFn.apply(this,[...args,...args2])
      }
      return rest
    }
  }
  return curryFn
}

function add(x,y,z,h) {
  return x+y+z+h
}


var r = whCurrying(add)
var rr = r(1,5)(1,2)
console.log(rr)