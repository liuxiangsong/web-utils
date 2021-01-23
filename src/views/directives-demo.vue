<template>
  <div>
    <div class="global">
      <h2>全局指令</h2>
      <input type="text" v-focus placeholder="页面加载后光标聚焦在该控件"/>
      <hr />
      <input v-myrestrict.float maxlength="10" v-model="floatValue" placeholder="只能输入浮点类型数据" />{{floatValue}}
      <br />
      <input v-myrestrict.regular="/^[0-9a-f]*$/i" placeholder="只能输入符合正则的数据" />
      <br/>
       <input type="text" @input="onInput($event,'float',3)" placeholder="非指令，通过引入外部方法实现限制最多输入3位小数"/>
    </div>

    <div class="comp">
      <h2>局部指令</h2>
      <div class="container" v-demo:foo.a.b="message + 'test'">
      </div>

      <div class="container">
        通过指令修改颜色
        <input type="text" value="蓝色" v-color="'blue'" />
      </div>

      <div class="container">
        <button v-bindEvent="showMessage">通过指令绑定事件</button>
      </div>

      <div class="container container2">
        <div>
          <p>通过指令设置元素定位</p>
          <p v-pin="{ top: '50px', left: '50px' }">文本位置偏移</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {handleInput} from '@utils/inputHandle'
export default {
    name:'directivesDemo',
    data() {
        return {
            message: '测试',
            floatValue:0,
        }
    },
    methods: {
        onInput(e,type,decimalPoint){ 
            handleInput(e.target,type,decimalPoint)
        },
        showMessage() {
            alert('message')
        }
    },
    directives: {
        demo: {
            bind(el, binding, vnode) {
                var s = JSON.stringify
                el.innerHTML = `
                                      name:       ${s(binding.name)}<br/>
                                      value:      ${s(binding.value)}<br/>
                                      expression: ${s(binding.expression)}<br/>
                                      argument:   ${s(binding.arg)}<br/>
                                      modifiers:  ${s(binding.modifiers)}<br/>
                                      vnode keys: ${Object.keys(vnode).join(
        ', '
    )}<br/>`
            }
        },
        color: {
            inserted(el, binding) {
                el.style.color = binding.value
            }
        },
        bindEvent: {
            bind(el, binding) {
                el.addEventListener('click', binding.value)
            }
        },
        pin: {
            bind(el, binding) {
                el.style.position = 'absolute'
                let values = binding.value
                Object.assign(el.style, values)
            }
        }
    }
}
</script>

<style scoped lang="scss">
.global{
  input{
    width: 100%;
  }
}
.comp{
  margin-top: 40px;
  .container {
    margin-bottom: 20px;
  }
  .container2 {
    height: 200px;
    border: 1px solid #999;
  }
  .container2 > div {
    position: relative;
  }
}
</style>
