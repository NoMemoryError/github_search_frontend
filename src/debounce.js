const debounce = (func, wait, immediate) => {
  var timeout
  return function executedFunction() {
    var context = this
    var args = arguments
    var later = function() {
      timeout = null
      !immediate && func.apply(context, args)
    }

    var callNow = immediate && !timeout
    clearTimeout(timeout)

    timeout = setTimeout(later, wait)

    callNow && func.apply(context, args)
  }
}

export default debounce
