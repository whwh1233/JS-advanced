
const info = {
  name:'why',
  age:10
}

setTimeout(() => {
  info.name = 'whwhwh'
}, 1000);

module.exports = info

// 暴露了那个对象，外面导入的就是哪个对象
