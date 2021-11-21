const spanEl = document.querySelector('.span')

spanEl.addEventListener('click',function(event) {
  console.log('span被点击了');
  console.log(event);
  console.log('事件的类型',event.type);
  console.log('事件的元素',event.target,event.currentTarget);
  console.log('事件发生的位置上',event.offsetX,event.offsetY);

})

const divEl = document.querySelector('.container')

divEl.addEventListener('click',function(event) {
  console.log('div被点击了');
  console.log(event);
  console.log('事件的类型',event.type);
  console.log('事件的元素',event.target,event.currentTarget);
  console.log('事件发生的位置上',event.offsetX,event.offsetY);

})

// 常见的方法
// preventDefault

const aEl = document.querySelector('.aaa')
aEl.addEventListener('click',function(event) {
  event.preventDefault()
})

// stopPropagation
// 阻止事件繁殖(捕获+冒泡)
// 阻止事件传递 06 中测试
