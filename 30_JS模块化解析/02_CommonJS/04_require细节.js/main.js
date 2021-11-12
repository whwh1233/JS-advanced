// 1.加载核心模块，直接返回不用查找
const path = require('path')

// 2.根目录
// const abc = require('/')
// 相对目录
const a = require('./abc')
console.log(a)
// 如果有后缀名，直接查找
// 如果没有后缀名，按照以下顺序：直接查找文件，.js文件，.json文件，.node文件，
// 如果没有查找到文件，按照文件夹查找：查找其中的 index.js  index.json index.node 文件
// 如果还没有找到，就报错

// 3.如果不是核心模块，也不是文件名称
// 递归的去上层的node_modules 中去查找
console.log(module.paths)
const axios = require('axios')
console.log(axios);
