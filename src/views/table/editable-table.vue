<template>
  <div>
    <div>错误总数：{{errorSummary.errorCount}},错误行数：{{errorSummary.errorRowCount}}</div>
    <editable-table :tableColumns="tableColumns" :tableData="tableData" :verifyRules="verifyRules" :errorSummary.sync="errorSummary"></editable-table>
  </div>
</template>

<script>
import EditableTable from '@comps/EditableTable'
import {fetchList} from '@/api/waybill'
export default {
    components: {
        'editable-table': EditableTable
    },
    data(){
        var checkAddress=async (row,valObject,fieldName,isInit)=>{  
            const func=()=>new Promise(reslove=>{
                setTimeout(() => {
                    reslove('sds')
                }, 100)
            })
            let res=  await func()
            console.log('res :>> ',res, row,valObject,fieldName,isInit)
        }
        const checkNumber=(row,valObject)=>{
            const value=valObject.value
            if(Number(value)>10000000){
                return '值不能超过10000000'
            }else if(Number(value)<=0){
                return '值不能为0'
            }
        }
        return{tableColumns: [
            { prop: 'id', text: '序号', width: '80' }, 
            { prop: 'reciverCompany', text: '收件公司', width: '150',hide:true },
            { prop: 'reciverAddress', text: '收件地址', width: '300' },
            { prop: 'reciver', text: '收件人', width: '120' },
            { prop: 'reciverPhone', text: '收件人电话', width: '150' },
            { prop: 'senderCompany', text: '寄件公司', width: '150' },
            { prop: 'senderAddress', text: '寄件地址', width: '300' },
            { prop: 'sender', text: '寄件人', width: '120' },
            { prop: 'senderPhone', text: '寄件人电话', width: '150' },
            { prop: 'paymentMode', text: '服务方式', width: '150' ,options:['寄付','到付','第三方付']},
            { prop: 'goods', text: '寄托物', width: '120' },
            { prop: 'count', text: '件数', width: '120' },
            { prop: 'weight', text: '重量(kg)', width: '120' },
            { prop: 'signBySelf', text: '是否本人签收', width: '120',type:'checkbox' },
        ],
        tableData:[],
        verifyRules:{
            reciver: [{
                required: true,
                reg: /^[\u4E00-\u9FA5A-Za-z0-9（）()]{2,50}$/,
                msg: '请填写收件人姓名,2-50个非特殊字符'
            }], 
            reciverAddress:[{validator:checkAddress}],
            weight:[{validator:checkNumber}]
        },
        errorSummary:{
            errorRowCount:0,
            errorCount:0
        }
        }
    },
    methods:{  
    },
    async  mounted(){
        let res=await fetchList({id:10})
        this.tableData=res.data.items
    },
    // watch:{
    //     errorSummary(val){
    //         console.log('val :>> ', val)
    //     }
    // }
}
</script>

<style>

</style>