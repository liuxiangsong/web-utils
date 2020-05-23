<template>
  <div>
    <el-button @click="tableColumnManagerVisible=true">表格列管理</el-button>
     <el-button @click="testApi">Test Api</el-button>
    <el-table :data="tableData" border stripe style="width: 100%">
      <el-table-column v-for="(item,index) in tableColumns.filter(i=>i.visible)" :key="index" :prop="item.prop" :label="item.text" :width="item.width">
      </el-table-column>
    </el-table>
    <table-column-manager ref="tableColumnManager" :visible.sync="tableColumnManagerVisible" :tableColumns="tableColumns" :columns.sync="tableColumns" ></table-column-manager>
  </div>
</template>

<script>
import TableColumnManager from '@comps/TableColumnManager'
import {fetchList} from '@/api/article'

export default {
    components: {
        'table-column-manager': TableColumnManager
    },
    data() {
        return {
            tableColumnManagerVisible:false,
            tableColumns: [
                {visible:true, prop: 'sjCompany', text: '收件公司', width: '150' },
                {visible:true, prop: 'sjAddress', text: '收件地址', width: '300' },
                {visible:true, prop: 'sjContactPerson', text: '收件人', width: '120' },
                {visible:true, prop: 'sjMobile', text: '收件联系方式', width: '150' },
                {visible:true, prop: 'jjCompany', text: '寄件公司', width: '150' },
                {visible:true, prop: 'jjAddress', text: '寄件地址', width: '300' },
                {visible:true, prop: 'jjContactPerson', text: '寄件人', width: '120' },
                {visible:true, prop: 'sms', text: '寄件联系方式', width: '150' },
                {visible:true, prop: 'serviceWay', text: '服务方式', width: '150' },
                {visible:true, prop: 'payWay', text: '付款方式', width: '150' },
                {visible:true, prop: 'payAccount', text: '月结卡号', width: '120' },
                {visible:true, prop: 'goods', text: '寄托物', width: '120' },
                {visible:true, prop: 'count', text: '件数', width: '120' },
                {visible:true, prop: 'weight', text: '重量(kg)', width: '120' },
                {visible:true, prop: 'mjWay', text: '特殊包装', width: '150' },
                {visible:true, prop: 'jjRemark', text: '寄件备注', width: '150' }
            ],
            tableData:[]
        }
    },
    watch:{
        tableColumns(){
            console.log('tableColumns')
        }
    },
    methods:{
        async testApi(){
            let res=await fetchList()
            console.log(res)
        }
    }
}
</script>

<style>
</style>