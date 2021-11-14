class WHError {
  constructor(errorCode,errorMessage) {
    this.errorCode = errorCode
    this.errorMessage = errorMessage
  }
}


function foo(type) {
  console.log('开始执行');

  if(type === 0) {
    // 抛出一个基本数据类型
    // throw 100
    // 抛出一个对象类型、创建一个类
    // throw new WHError(1,'type不可以为0')
    // 使用这个类
    // throw new Error('type不能为0')
    const err = new TypeError('试一试')
    console.log(err.name)
    console.log(err.stack);
    console.log(err.message);
  }

  // 如果函数中抛出了异常，那么后续的代码不会再执行了
  console.log('结束执行');
}

foo(0)




