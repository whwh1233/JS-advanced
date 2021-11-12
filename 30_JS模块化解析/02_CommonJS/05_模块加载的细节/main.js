console.log('main start');
// 模块被第一次加载的时候，会被执行一次，之后就会被缓存起来，以后引入就不会再执行了
const foo = require('./foo')

console.log(foo.name);
const foo2 = require('./foo')

console.log('main end');
