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
        this.status = PROMISE_STATE_FULFILLED;
        queueMicrotask(() => {
          this.value = value;
          this.onfulfilled(this.value);
        });
      }
    };
    const reject = (reason) => {
      if (this.status === PROMISE_STATE_PENDING) {
        this.status = PROMISE_STATE_REJECTED;
        queueMicrotask(() => {
          this.reason = reason;
          this.onrejected(this.reason);
        });
      }
    };
    executor(resolve, reject);
  }
  then(onfulfilled, onrejected) {
    this.onfulfilled = onfulfilled;
    this.onrejected = onrejected;
  }
}

const promise = new WHPromise((resolve, reject) => {
  console.log("传入函数直接被调用");
  // resolve(222);
  reject(111);
  console.log("传入函数直接被调用");
});

console.log("----------");

promise.then(
  (res) => console.log(res),
  (err) => console.log(err)
);
