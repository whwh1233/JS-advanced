// 导入方式1  普通导入
// import {name2,age,foo,Person} from './foo.js'
// 导入方式2  起别名
// import {name2 as fName ,age,foo,Person} from './foo.js'

// 导入方式3  把所有的东西放入一个标识符中
// import * as foo from './foo.js'


// 默认导出
import foo from './foo.js'
// console.log(foo.name2);
// console.log(foo.age);

console.log('why:',foo());
