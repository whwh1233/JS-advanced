const name = 'why'
const age = 19
// 第二种导出方式
exports.age = age
exports.name = name

// 源码   这两个相当于是一个对象，所以exports.name = module.exports.name
// module.exports = {}
// exports = module.exports

// 不能这么导出  这样更改了exports的指向
// exports = {}
