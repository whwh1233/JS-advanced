
const name = 'wh'
const age = 18
function foo() {
  console.log('foo');
  return ('foo')
}
class Person {}

// 默认导出方式1
// export {
//   name ,age,Person,foo as default
// }


// 默认导出方式2
export default foo

// 注意默认导出只能有一个
