const PROMISE_STATE_PENDING = "pending";
const PROMISE_STATE_FULFILLED = "fulfilled";
const PROMISE_STATE_REJECTED = "rejected";
class WHPromise {
  constructor(executor) {
    this.status = PROMISE_STATE_PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onfulfilledFns = [];
    this.onrejectedFns = [];
    const resolve = (value) => {
      if (this.status === PROMISE_STATE_PENDING) {
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATE_PENDING) return;
          this.status = PROMISE_STATE_FULFILLED;
          console.log("resolve");
          this.value = value;
          this.onfulfilledFns.forEach((fn) => fn(this.value));
          // this.onfulfilled(this.value);
        });

        // 执行then传入的第一个回调函数
      }
    };
    const reject = (reason) => {
      if (this.status === PROMISE_STATE_PENDING) {
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATE_PENDING) return;
          this.status = PROMISE_STATE_REJECTED;
          console.log("reject");
          this.reason = reason;
          this.onrejectedFns.forEach((fn) => fn(this.reason));
          // this.onrejected(this.reason);
        });

        // 执行then传入的第二个回调函数
      }
    };
    executor(resolve, reject);
  }
  then(onfulfilled, onrejected) {
    // 确保settimeout延时调用可以执行then方法
    if (this.status === PROMISE_STATE_FULFILLED) {
      onfulfilled(this.value);
    }
    if (this.status === PROMISE_STATE_REJECTED) {
      onrejected(this.reason);
    }
    if (this.status === PROMISE_STATE_PENDING) {
      this.onfulfilledFns.push(onfulfilled);
      this.onrejectedFns.push(onrejected);
    }
    // 回调放入数组中,多个promise可以同时执行

    // this.onfulfilled = onfulfilled;
    // this.onrejected = onrejected;
  }
}

const promise = new WHPromise((resolve, reject) => {
  console.log("传入函数直接被调用");
  resolve(222);
  reject(111);
});

console.log("----------");

promise.then(
  (res) => console.log(res),
  (err) => console.log(err)
);
promise.then(
  (res) => console.log(res),
  (err) => console.log(err)
);

// 如果是原生Promise的话,这个代码也会被回调
setTimeout(() => {
  promise.then(
    (res) => console.log(res),
    (err) => {
      console.log(err);
    }
  );
}, 1000);
