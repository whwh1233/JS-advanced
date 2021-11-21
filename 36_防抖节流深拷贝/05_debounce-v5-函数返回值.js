const  debounce = function(fn,delay,immediate = false,resultCallback) {
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
      const result = fn.apply(this,args)
      if(resultCallback) resultCallback(result)
      isInvoke = true
    }else {
      timer = setTimeout(() => {
        const result = fn.apply(this,args)
        if(resultCallback) resultCallback(result)

        isInvoke = false
      }, delay);
    }
  }
  // 封装取消函数
  _debounce.cancel = function( ) {
    if(timer) clearTimeout(timer)
    timer = null
    isInvoke = false
  }
  return _debounce
}
