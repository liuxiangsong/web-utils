<template>
  <div>
    <el-upload class="upload-demo" drag action="" :auto-upload="false" accept=".xlsx,.xls" :show-file-list="false" :on-change="handleUpload">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div> 
    </el-upload>
      <el-table :data="tableData" border highlight-current-row style="width: 100%;margin-top:20px;">
      <el-table-column v-for="item of tableHeader" :key="item" :prop="item" :label="item" />
    </el-table>
  </div>
</template>

<script>
// import {readExcel} from '@utils/excelHelper'

export default {
    data(){
        return{
            tableHeader:[],
            tableData:[]
        }
    },
    methods: {
        async handleUpload(file) {  
          import('@utils/excelUtil').then(async excel=>{
              let {jsonData,header}= await excel.readExcel(file,1)
              this.tableHeader =header 
              this.tableData=jsonData
          }) 
        } 
    }
}
</script>

<style>
</style>