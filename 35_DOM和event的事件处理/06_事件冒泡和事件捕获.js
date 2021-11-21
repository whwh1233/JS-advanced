const spanEl = document.querySelector('.span')
const divEl = document.querySelector('.container')
const bodyEl = document.querySelector('body')

// 默认事件冒泡
spanEl.addEventListener('click',function( ) {
  console.log('span被点击了');
})
divEl.addEventListener('click',function(event) {
  console.log('div被点击了s');
  // 阻止事件捕获/冒泡
  event.stopPropagation()
})
bodyEl.addEventListener('click',function() {
  console.log('body被点击了');
})

// 添加属性true就变成了事件捕获
// spanEl.addEventListener('click',function( ) {
//   console.log('span被点击了');
// },true)
// divEl.addEventListener('click',function() {
//   console.log('div被点击了s');
// },true)
// bodyEl.addEventListener('click',function() {
//   console.log('body被点击了');
// },true)
