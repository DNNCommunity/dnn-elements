/**
 * Debounces a function call, see http://demo.nimius.net/debounce_throttle/ for explanation of debounce vs throttle.
 * @param debounceTime How many milliseconds to debounce for.
 */
function Debounce(debounceTime = 500) {
  return function (_target, _key, descriptor) {
    let originalMethod = descriptor.value;
    let timer = null;
    descriptor.value = function (...args) {
      clearTimeout(timer);
      return new Promise(resolve => {
        timer = setTimeout(() => {
          resolve(originalMethod.apply(this, args));
        }, debounceTime);
      });
    };
  };
}

export { Debounce as D };

//# sourceMappingURL=debounce-06f55268.js.map