const debounce = (func: Function, wait : number) => {
    let timeout: ReturnType<typeof setTimeout>;
      
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    }
  }