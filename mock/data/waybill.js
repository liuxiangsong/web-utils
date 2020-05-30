import Mock from 'mockjs'

const List = []
const count = 20
 
for (let i = 0; i < count; i++) {
    List.push(Mock.mock({
        id: '@increment',
        reciverCompany: '@ctitle(3, 8)',
        reciverAddress: '@county(true)',
        reciver: '@cname',
        reciverPhone:'1'+'@pick([3,4,5,7,8,9])'+Mock.mock(/\d{8}/), 
        senderCompany: '@ctitle(3, 8)',
        senderAddress: '@county(true)',
        sender: '@cname',
        senderPhone:'1'+'@pick([3,4,5,7,8,9])'+Mock.mock(/\d{8}/), 
        'serviceMode|1': ['寄付', '到付','第三方付'],
        goods:'@cword(3, 5)', 
        count: '@integer(1, 100)', 
        weight: '@float(1, 500, 2,2)',
        createTime:'@datetime',
    }))
}

export default [
    {
        url: '/web-utils/waybill/list',
        type: 'get',
        response: config => {  
            console.log(config.query)
            return {
                code: 0,
                data: {
                    total: List.length,
                    items: List
                }
            }
        }
    },

 
]

