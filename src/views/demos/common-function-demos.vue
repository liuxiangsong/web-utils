<template>
  <div>
    <h1>1、自定义上传控件</h1>
    <div class="file-upload--card">
      选择文件
      <input id="selectFile" type="file" @change="changedOfFile" accept="image/gif, image/jpeg"/>
      <label for="selectFile"></label>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    methods: {
        changedOfFile (el) {
            console.log('el.target.files[0] :>> ', el.target.files[0])
            let reader = new FileReader()
            reader.readAsDataURL(el.target.files[0])
            reader.onload = function () {
                console.log('文件 :>> ', this.result)
            }
            el.target.value=''
        }
    }
}
</script>

<style lang="scss" scoped>
  .file-upload--card {
    position: relative;
    width: 126px;
    height: 126px;
    background-color: #f8f8fa;
    border: 1px dashed #c8c8c8;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    input {
      font-size: 0;
      position: absolute;
      z-index: -99;
    }
    label {
      cursor: pointer;
      width: 100%;
      height: 100%;
      display: inline-block;
      position: absolute;
      top: 0;
    }
  }
</style>