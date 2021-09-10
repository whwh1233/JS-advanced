// 从某些角度来说，开发中如果没有this，很多问题我们也有解决方案
// 但不使用this，会带来很多不必要的麻烦
// 使用this 会更加便利
var obj  = {
  name:'why',
  eating:function() {
    console.log(obj.name + '+eating')
  },
  running:function() {
    console.log(obj.name + '+running')
  },
  working:function() {
    console.log(obj.name + '+working')
  }
}

obj.eating()
obj.running()   
obj.working()