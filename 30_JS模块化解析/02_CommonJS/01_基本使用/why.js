const name = 'why'
const age = 18
function foo() {
  console.log('foo');
}
function sum(a,b) {
  return a + b
}

// 1.导出方案
module.exports = {
  name,age,sum
}
