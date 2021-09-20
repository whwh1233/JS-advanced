// function log(date,type,message) {
//   console.log(`${date}${type}${message}`)
// }

// log(new Date(),"debug",'查询bug')
// log(new Date(),"debug",'首页bug')
// 

// 柯里化的优化
var log = date => type => message => console.log(`${date}${type}${message}`)
var nowLog = log(new Date())
nowLog('bug')('查询')
nowLog('debug')('home')