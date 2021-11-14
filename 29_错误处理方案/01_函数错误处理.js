function sum(a,b) {
  if(typeof a !== Number || typeof b !== Number){
    // return undefined
    throw '类型错误，必须是数字'
  }
  return a + b
}
console.log(sum({name:'why'},true))
