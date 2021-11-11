setTimeout(() => {
  console.log('123')
}, 2000);

// 宏任务队列：定时器，ajax, DOM ,UI Rendering

// 微任务队列：queueMicrotask , Promise then，Mutation Observe API

// 规范：在执行任何宏任务之前，都需要保证微任务队列已经被清空了
queueMicrotask(() => {
  console.log('queueMicrotask');
})

Promise.resolve().then(() => {
  console.log('Promise then');
})

function foo() {
  console.log('foo');
}

function bar() {
  console.log('bar');
  foo()
}

bar()
console.log('其他代码');
