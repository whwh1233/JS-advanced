const PROMISE_STATE_PENDING = "pending";
const PROMISE_STATE_FULFILLED = "fulfilled";
const PROMISE_STATE_REJECTED = "rejected";
class WHPromise {
  constructor(executor) {
    this.status = PROMISE_STATE_PENDING;
    this.value = undefined;
    this.reason = undefined;
    const resolve = (value) => {
      if (this.status === PROMISE_STATE_PENDING) {
        console.log("resolve");
        this.value = value;
        this.status = PROMISE_STATE_FULFILLED;
        // 执行then传入的第一个回调函数
      }
    };
    const reject = (reason) => {
      if (this.status === PROMISE_STATE_PENDING) {
        console.log("reject");
        this.reason = reason;
        this.status = PROMISE_STATE_REJECTED;
        // 执行then传入的第二个回调函数
      }
    };
    executor(resolve, reject);
  }
  then(onfulfilled, onrejected) {}
}

const promise = new WHPromise((resolve11, reject) => {
  console.log("传入函数直接被调用");
  resolve11(111);
  console.log("传入函数直接被调用");

  // reject();
});
