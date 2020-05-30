import Mock from 'mockjs'

const List = []
const count = 20
 
for (let i = 0; i < count; i++) {
    List.push(Mock.mock({
        id: '@increment',
        author: '@cname',
        title: '@ctitle(5, 10)',
        content: '@cparagraph(1, 5)',
        timestamp: +Mock.Random.date('T'), 
        'status|1': ['已发表', '草稿'],
        stick:'@boolean', 
        display_time: '@datetime', 
        pageviews: '@integer(300, 5000)',
    }))
}

export default [
    {
        url: '/web-utils/article/list',
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

