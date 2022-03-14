import dayjs from 'dayjs';

export function result<T>(data: T) {
  return {
    status: 200,
    message: 'success',
    data,
    time: dayjs().format('YYYY-MM-DD HH:mm:ss'),
  };
}

/**
 * 函数防抖
 * @param {Function} fn callback
 * @param {Number} delay 时间
 * @param {*} immediate 立即执行
 * @returns
 */
const debounce = function (fn, delay = 300, immediate = false) {
  let timer: any = null;
  return function () {
    const context = this;
    const args = arguments;
    //清除上一次延时器
    timer && clearTimeout(timer);
    // 是否立即执行
    if (immediate) {
      const callbackNow = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, delay);
      callbackNow && fn.apply(context, args);
    } else {
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, delay);
    }
  };
};
/**
 * 函数节流
 * @param {Function} fn callback
 * @param {Number} delay 时间
 * @returns
 */
const throttle = function (fn, delay = 300) {
  let lastTime = Date.now();
  return function () {
    const context = this;
    const args = arguments;
    const curTime = Date.now();
    if (curTime - lastTime >= delay) {
      fn.apply(context, args);
      lastTime = curTime;
    }
  };
};
