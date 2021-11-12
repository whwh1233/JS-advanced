// 第一种 export + 声明语句
// export const name = 'wh'
// export const age = 18
// export function foo() {
//   console.log('foo');
// }

// export class Person {}

// 第二种：导出和声明分开
const name = 'wh'
const age = 18
function foo() {
  console.log('foo');
}
class Person {}
// export {
//   name,age,foo,Person
// }

// 第三种，导出时起别名
export {
  name as name2,age,Person,foo
}
