// 这里的路径是相对于 index.html 来加载的
require.config({
  paths:{
    foo:'./foo',
    bar:'./bar'
  }
})

require(['foo'],function foo() {
  console.log('main:',foo);
})
