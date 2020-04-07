/**
 * v-myrestrict
 * @desc 输入框只允许输入指定字符
 * @example
 * ```vue
 * <input v-myrestrict.float maxlength=10 max=1000 placeholder="只允许输入浮点类型数据"/>
 * <input v-myrestrict.regular="/^[0-9a-f]*$/i" placeholder="只允许输入符合正则表达式的数据"/>
 * ```
 */
export default {
  bind(elinput, binding) { 
    let el=elinput.querySelector('input') //兼容element input
    if(!el){
        el=elinput
    }
    if(Object.keys(binding.modifiers).length==0){
      return
    }
    const regExpes = {
      integer: /^-?\d*$/,
      positive: /^\d*$/,
      float: /^-?\d*[.,]?\d*$/,
      currency: /^-?\d*[.,]?\d{0,2}$/,
      alphabet: /^[a-z]*$/i,
      regular: binding.value
    } 
    const max=parseFloat(el.max) 
    const reg = regExpes[Object.keys(binding.modifiers)[0]] 
    let eventes = [
      'input',
      'keydown',
      'keyup',
      'mousedown',
      'mouseup',
      'select',
      'contextmenu',
      'drop'
    ]
    eventes.forEach(function(event) {
      el.addEventListener(event, function() { 
        if (reg.test(this.value)&&(!max|| this.value === "" || parseFloat(this.value) <= max)) {
          this.oldValue = this.value
          this.oldSelectionStart = this.selectionStart
          this.oldSelectionEnd = this.selectionEnd
        } else if (this.hasOwnProperty('oldValue')) {
          this.value = this.oldValue
          this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd)
        } else {
          this.value = ''
        }
      })
    })
  }
}
