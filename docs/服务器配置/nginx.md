# nginx

## 安装 nginx

- 普通安装方法：[参考资料](https://juejin.im/post/6844904134345228301)
- 通过docker安装

## 常用命令

- nginx ：启动 nginx
- nginx -t ：查看 nginx 配置文件地址，及测试配置文件是否有语法错误。
- nginx -s reload ：重新加载 nginx 配置文件，然后重启 nginx。
- service nginx status : 查看 Nginx 服务状态

## nginx 配置

> nginx的核心配置文件 /etc/nginx/nginx.conf
>
> nginx.conf 主要内容：
>
> - 全局块
> - events块
> - http块
>   - server块
>     - location

### 反向代理

```sh
server  {
  listen 80;
  server_name localhost;
  location /router/rest {
    proxy_pass http://127.0.0.1:8000;
  }
}
```

#### location 路径映射

> 优先级：(location = )  >  (location /xxx/yyy/zzz完整路径)  >  (location ^~ 路径)  >  (location ~，~\* )  >  (location /起始路径)  >  (location /)
>
> 注：loctaion配置顺序按优先级从高到低摆放

- = 匹配

  ```sh
  location = / {
  	# 精确匹配，主机名后面不能带任何的字符串
  }
  ```

- 通用匹配

  ```sh
  location /xxx {
  	# 匹配所有以/xxx开头的路径
  }
  ```

- 正则配置

  ```sh
  location = ~/xxx {
  	# 匹配所有以/xxx开头的路径；~ 的正则匹配区分大小写
  }
  
  location = ~*\.(gif|jpg|png)${
  	# 匹配以gif、jpg、png结尾的路径；~* 的正则匹配不区分大小写
  }
  ```

- 匹配开头路径

  ```sh
  location = ^~/xxx/ {
  	# 匹配所有以/xxx开头的路径；如果匹配成功，则不再匹配其他 location
  }
  ```

- @ 它定义一个命名的 location，在内部定向时使用；例如 error_page, try_files。

### 负载均衡

#### 轮询（默认）

```sh
http {
    upstream 名字 {  # 名字建议不要用_，而用-，以免为nginx的关键字相冲突
        server localhost:8080;
        server localhost:8081;
    }
    server {
    listen 80;
    server_name localhost;
    location / {
      proxy_pass  http://upstream 的名字;
    }
}
}
```

#### 权重（weight)

```sh
 upstream backend {
        server localhost:8080 weight=1;
        server localhost:8081 weight=3;
    }
```

#### ip_hash

> ip_hash 基于发起请求的客户端ip地址不同，它能够让客户机在相当长的一段时间内始终将请求发送到固定的服务器上

```sh
 upstream backend {
        ip_hash;
        server localhost:8080;
        server localhost:8081;
    }
```

#### fair（根据响应时间来分配）

> 公平竞争，谁响应快，谁处理，不过这种方式需要依赖到第三方插件 nginx-upstream-fair，需要先安装

```sh
 upstream backend {
        fair;
        server localhost:8080;
        server localhost:8081;
    }
```

### 动静分离

> nginx最终的并发能力 = worker_processes * worker_connections / 4|2 (动态资源 / 4，静态资源 / 2)

#### 动态资源代理

```sh
location / {
  proxy_pass 路径;
}
```

#### 静态资源代理

```sh
location / {
  root  www;    # 静态资源路径;
  index index.html default.html;  # 默认访问路径下的什么资源
  autoindex on;  # 以列表的形式展示静态资源的全部内容
}
```



### gzip 配置ur7gyyyigkljhtm;lbcv/nkrmgnv6ggi3.yuvb































































































































































































































































































































































































































































































































































​																							`````````````````						`

```sh
server{
    gzip on; #开启GZip压缩
    gzip_buffers 32 4K;
    gzip_comp_level 6;  #压缩级别：1-10，数字越大压缩的越好
    gzip_min_length 100; #不压缩临界值，大于100的才压缩，一般不用改
    gzip_types application/javascript text/css text/xml; #对哪些类型进行压缩
    gzip_disable "MSIE [1-6]\.";  #IE6对GZip不友好，IE6及以下的浏览器不进行压缩
    gzip_vary on;
}
```

## 常见问题

- 外网无法访问非 80 端口：
  - 开启端口，重启防火墙；
  - 自己测试可直接关闭防火墙。
- nginx 403 forbidden：
  1. 测试时可直接禁用 SELINUX
  2. 文件夹权限设置
- vue 刷新页面 404 问题：

```sh
location / {
  try_files $uri $uri/ /index.html; # history模式下,解决页面刷新404问题
}
```



[nginx官网](http://nginx.org/en/docs/)

[参考资料](https://www.bilibili.com/video/BV1W54y1z7GM)