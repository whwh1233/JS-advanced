function whComposeFn(...fns) {
  var l = fns.length
  for(var i = 0;i < l;i ++) {
    if(typeof fns[i] !== 'function') {
      throw new TypeError('要求传入的都应该是函数')
    }
  }
  var final = function(...args) {
    var index = 0
    var result = l? fns[index].apply(this,args):args
    while(++index < l) {
      result =  fns[index].call(this,result)
    }
    return result
  }

  return final
}

function double (x) {
  return x * 2
}
function square(x) {
  return x * x
}

var newFn = whComposeFn(double,square,double)
console.log(newFn(10))