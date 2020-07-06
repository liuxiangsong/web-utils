module.exports=[
    {
        url: '/web-utils/user/login',
        type: 'post',
        response: () => { 
            return {
                code: 0,
                data: {
                    token:'test Token'
                }
            }
        }
    },
    {
        url: '/web-utils/user/loginout',
        type: 'post',
        response: () => { 
            return {
                code: 0,
                data:'success'
            }
        }
    },
]