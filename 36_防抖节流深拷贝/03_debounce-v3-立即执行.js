const  debounce = function(fn,delay,immediate = false) {
  // 1.定义一个定时器,保存上一次的定时器
  let timer = null
  let isInvoke = false
  // 2.真正执行的函数
  const _debounce = function(...args) {
    // 取消上一次的定时器
    if(timer) clearTimeout(timer)
    // 延时执行
    // 判断是否需要立即执行
    if(immediate && !isInvoke) {
      fn.apply(this,args)
      isInvoke = true
    }else {
      timer = setTimeout(() => {
        fn.apply(this,args)
        isInvoke = false
      }, delay);
    }
  }
  return _debounce
}
