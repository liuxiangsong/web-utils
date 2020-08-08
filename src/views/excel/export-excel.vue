<template>
  <div> 
     <el-button @click="exportExcel">导出Excel</el-button>
      <el-button @click="exportCustomizeHeaderExcel">导出自定义表头Excel</el-button>
    <el-table :data="tableData" border stripe style="width: 100%">
      <el-table-column v-for="(item,index) in tableColumns.filter(i=>i.visible)" :key="index" :prop="item.prop" :label="item.text" :width="item.width">
      </el-table-column>
    </el-table> 
  </div>
</template>

<script>
import {fetchList} from '@/api/waybill'
 

export default {
    data() {
        return { 
            tableColumns: [
                {visible:true, prop: 'id', text: '序号', width: '80' }, 
                {visible:true, prop: 'reciverCompany', text: '收件公司', width: '150' },
                {visible:true, prop: 'reciverAddress', text: '收件地址', width: '300' },
                {visible:true, prop: 'reciver', text: '收件人', width: '120' },
                {visible:true, prop: 'reciverPhone', text: '收件人电话', width: '150' },
                {visible:true, prop: 'senderCompany', text: '寄件公司', width: '150' },
                {visible:true, prop: 'senderAddress', text: '寄件地址', width: '300' },
                {visible:true, prop: 'sender', text: '寄件人', width: '120' },
                {visible:true, prop: 'senderPhone', text: '寄件人电话', width: '150' },
                {visible:true, prop: 'serviceMode', text: '服务方式', width: '150' },
                {visible:true, prop: 'goods', text: '寄托物', width: '120' },
                {visible:true, prop: 'count', text: '件数', width: '120' },
                {visible:true, prop: 'weight', text: '重量(kg)', width: '120' },
            ],
            tableData:[]
        }
    }, 
    async mounted(){
        let res=await fetchList({id:10})
        this.tableData=res.data.items
    },
    methods:{
        exportExcel(){  
            let  styleFun=function (ws) {
                ws['B2'].s = {
                    font: {
                        name: '宋体',
                        sz: 18,
                        color: {rgb: 'ff0000'},
                        bold: true,
                        italic: false,
                        underline: false
                    },
                    alignment: {
                        horizontal: 'center',
                        vertical: 'center'
                    },
                    fill: {
                        fgColor: {rgb: '008000'},
                    },
                }
            }
          import('@utils/excelUtil').then(excel=>{
              excel.exportExcel({theadColumns:this.tableColumns,jsonData: this.tableData,filename:'excel',
                  excelType:'xlsx',styleFun})
          })   
        },
        exportCustomizeHeaderExcel(){
            let customizeThead=[
                ['序号','收方信息','','','','寄方信息','','','其它'],
                ['','收件公司','收件地址','收件人','收件人电话','寄件公司','寄件地址','寄件人','寄件人电话', '服务方式','寄托物','件数','重量(kg)']
            ]
            let cellMerges=['A1:A2','B1:E1','F1:H1','I1:M1']
            import('@utils/excelUtil').then(excel=>{
                excel. exportExcel({theadColumns:this.tableColumns,jsonData: this.tableData,filename:'excel',customizeThead,cellMerges})
            }) 
        }
    }
}
</script>

<style>
</style>