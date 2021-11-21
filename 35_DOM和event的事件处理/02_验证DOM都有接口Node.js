document.addEventListener('click',function() {
  console.log('document被点击');
})


const divEl = document.querySelector('.parent')
const childEl = document.querySelector('.child')
const boxEl = document.querySelector('.box')
// 常见的属性
console.log(divEl.nodeName);
console.log(divEl.nodeType);
console.log(divEl.nodeValue);

// childNodes
const childList = boxEl.childNodes
const child0 = childList[2]
console.log(child0.nodeValue);
console.log(childList);

// 常见的方法
const strongEl = document.createElement('strong')
strongEl.textContent = '我是strong'
boxEl.appendChild(strongEl)
