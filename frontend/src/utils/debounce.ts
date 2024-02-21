export const debounce = (func: Function, wait: number) => {
  return function () {
    setTimeout(() => {
      func()
    }, wait)
  }
}