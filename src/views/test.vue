<template>
  <ul>
     <li>
        <h1>Vue Render 函数</h1>
        <render-function level="4">Hello world!</render-function>
     </li>
    <li>
      <h1>利用transform实现下拉三角形</h1>
      <div class="triangle"></div>
    </li>
    <li>
      <h1>svg-icon</h1>
      <svg-icon class-name="search-icon" icon-class="search" />

      <div class="statustab-icon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-add"></use>
        </svg>
      </div>
    </li>
    <li>
      <h1>input</h1>
      <input type="text" @input="onInput" />
    </li>
    <li>
      <h1>clipboard</h1>
      <input type="text" @input="onInput" v-model="inputData" />
      <button v-clipboard='inputData'>复制内容</button>
      <el-button @click='handleCopy(inputData,$event)'>copy</el-button>
    </li>
   
  </ul>
</template>

<script>
import { handleInput } from '@utils/inputHandle'
import clip from '@/utils/clipboard'
import RenderFunction from '../components/RenderFunction.vue'
// import jsonp from '@utils/jsonp'
export default {
    components: { RenderFunction },
    data () {
        return {
            inputData: 0
        }
    },
    methods: {
        onInput (e) {
            handleInput(e.target, 'currency')
        },
        handleCopy (text, event) {
            clip(text, event)
        }
    },
    mounted () {
        // jsonp('https://api.map.baidu.com/location/ip', {
        //     ak: 'Hgps6PooEPzjPtfGRvwgK8Iw6c5K8hk7',
        // }).then((res) => {
        //     console.log( res)
        // })
    }
}
</script>

<style lang="scss" >
  @import "@styles/common";
  .triangle {
    width: 200px;
    height: 35px;
    border: 1px solid;
    position: relative;
    &::after {
      position: absolute;
      right: 10px;
      top: 8px;
      content: "";
      width: 10px;
      height: 10px;
      border-right: 1px solid;
      border-bottom: 1px solid;
      transform: rotate(45deg);
      transition: all 0.3s;
    }
    &:hover::after {
      transform: rotate(225deg);
      top: 16px;
    }
  }

  .search-icon {
    cursor: pointer;
    font-size: 18px;
    color: red;
    vertical-align: middle;
  }

  .statustab-icon {
    display: inline-block;
    vertical-align: top;
    text-align: right;
    padding-right: 10px;
    .icon {
      width: 36px;
      height: 36px;
      border-radius: 50%;
    }
  }
  .box {
    @include flex-align(left);
    height: 400px;
    border: solid 1px;
    .content {
      border: solid 1px;
    }
  }
</style>