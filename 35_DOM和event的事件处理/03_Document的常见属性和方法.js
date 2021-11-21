document.title = ' new title'
console.log(document);
console.log(document.head);
console.log(document.children);
// 这俩指向同一个location对象
console.log(document.location);
console.log(window.location);

// 常见方法
// 创建元素
const imageEl = document.createElement('img')
const imageEl2 = new HTMLImageElement()

// 获取元素
const divEl = document.getElementById()
const divEl2 = document.getElementsByName()
const divEl3 = document.getElementsByTagName()
const divEl4 = document.querySelector('.parent')
const divEl5 = document.querySelectors('.parent')
