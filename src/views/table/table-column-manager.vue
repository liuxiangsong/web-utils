<template>
  <div>
    <el-button @click="tableColumnManagerVisible=true">表格列管理</el-button> 
    <el-table :data="tableData" border stripe style="width: 100%">
      <el-table-column v-for="(item,index) in tableColumns.filter(i=>i.visible)" :key="index" :prop="item.prop" :label="item.text" :width="item.width">
      </el-table-column>
    </el-table>
    <table-column-manager :visible.sync="tableColumnManagerVisible" :tableColumns.sync="tableColumns" />
  </div>
</template>

<script>
import TableColumnManager from '@comps/TableColumnManager'
import {fetchList} from '@/api/waybill'
 

export default {
    components: {
        'table-column-manager': TableColumnManager
    },
    data() {
        return {
            tableColumnManagerVisible:false,
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
        
    }
}
</script>

<style>
</style>