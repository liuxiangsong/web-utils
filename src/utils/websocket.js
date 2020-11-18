let Socket = ''

/**
 * 创建websocket客户端
 * @param {String} url websocket服务器地址
 * @param {Function} receiveMsgFunc 接收服务器消息函数
 */
const createSocket=(url,receiveMsgFunc)=>{
    let wsImpl = window.WebSocket || window.MozWebSocket
    const promise=new Promise((resolve,reject)=>{
        if(!Socket ||  Socket.readyState !== 1){
            console.log('正在创建websocket连接')
            Socket = new wsImpl(url)
            Socket.onopen = e=>{
                resolve(true)
                console.log('Socket.onopen ',e)
            }
            Socket.onmessage = e => {
                // console.log('Socket.onmessage ',e,receiveMsgFunc)
                receiveMsgFunc&&receiveMsgFunc(e.data)
            }
            Socket.onerror = (e)=>{
                reject(e)
                console.log('Socket.onerror',e)
                Socket.close()
                Socket = null
            }
            Socket.onclose = e=>{
                reject(e)
                console.log('Socket.onclose',e)
            }
        }else{
            resolve(true)
            console.log('websocket已连接')
        }
    })
    return promise
}

/**
 * 发送消息
 * @param {String} message 需要发送至服务器的消息
 */
const sendMessage=(message)=>{
    if(Socket&&Socket.readyState===1){      
        Socket.send(JSON.stringify(message))
    }else{
        console.log('Socket :>> ', Socket)
    }
}

export default {
    createSocket,
    sendMessage
}