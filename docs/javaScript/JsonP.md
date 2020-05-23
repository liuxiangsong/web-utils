
# 原生jsonp封装思路：
- 随机生成callback名
- 动态生成script
- 根据传入的params对象拼接字符串，得到完整的url
- 把url赋给生成的script，同时把script挂载到页面上
- 通过window属性的方法获取jsonp结果，调用success回调函数

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <script>
            function jsonp({url,params={},success}){
                // 根据时间戳生成一个callback名
                let callbackName = `jsonp_${new Date().getTime()}`;

                // 创建script
                let script = document.createElement('script');

                // 字符串拼接生成基本url
                let baseUrl = `${url}?callback=${callbackName}`;

                // 取出params对象属性并得到完整url
                for(let item in params){
                    baseUrl += `&${item}=${params[item]}`;
                }

                // jsonp核心，通过script的跨域特性发出请求
                script.src = baseUrl;

                // 把创建的script挂载到DOM
                document.body.appendChild(script);

                // 给window添加属性，用于获取jsonp结果
                window[callbackName] = (res)=>{
                    // 执行success回调
                    success(res);
                    // 删除window下属性
                    delete window[callbackName];
                    // 得到结果后删除创建的script
                    document.body.removeChild(script);
                }

            }
            jsonp({
                url:'http://192.168.191.1:8000/bookIfoTotal',
                params:{
                    name:'tom',
                    age:21
                },
                success(res){
                    console.log(res);
                }
            })
        </script>
    </body>
</html>
```


[参考链接](https://www.jianshu.com/p/aea2d18ad992)