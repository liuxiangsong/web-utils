<template>
  <div>
    <h1>svg-icon</h1>
    <svg-icon class-name="search-icon" icon-name="search" />

    <div class="statustab-icon">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-add"></use>
      </svg>
    </div>

    <h1>input</h1>
    <input type="text" @input="onInput" />

    <h1>clipboard</h1>
    <input type="text" @input="onInput" v-model="inputData" />
    <button v-clipboard='inputData'>复制内容</button>
<el-button @click='handleCopy(inputData,$event)'>copy</el-button>

<div class="box">
  <div class="content">asdf</div>
</div>
  </div>
</template>

<script>
import { handleInput } from '@utils/inputHandle'
import clip from '@/utils/clipboard' 
// import jsonp from '@utils/jsonp'
export default {
    data() {
        return {
            inputData: 0
        }
    },
    methods: {
        onInput(e) {
            handleInput(e.target, 'currency')
        },
        handleCopy(text, event) {
            clip(text, event)
        }
    },
    mounted(){
       
        // jsonp('https://api.map.baidu.com/location/ip', {
        //     ak: 'Hgps6PooEPzjPtfGRvwgK8Iw6c5K8hk7',
        // }).then((res) => {
        //     console.log( res)
        // })
    }
}
</script>

<style lang="scss" >
  @import '../assets/style/common';

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
  .box{
    @include flex-align(left);
    height: 400px;
    border:solid 1px;
    .content{
      border: solid 1px;
    }
  }
</style>