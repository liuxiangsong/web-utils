# [nginx](http://nginx.org/en/docs/)

## 安装 nginx

- [参考资料](https://juejin.im/post/6844904134345228301)

## 常用命令

- nginx ：启动 nginx
- nginx -t ：查看 nginx 配置文件地址，及测试配置文件是否有语法错误。
- nginx -s reload ：重新加载 nginx 配置文件，然后重启 nginx。
- service nginx status : 查看 Nginx 服务状态

## nginx 配置

- vi /etc/nginx/nginx.conf

### 负载均衡

- 轮询（默认）

```sh
// nginx.conf
http {
    upstream backend {
        server localhost:8080;
        server localhost:8081;
    }
    server {
    listen 80;
    server_name localhost;
    location / {
      proxy_pass  http://backend;
    }
}
}
```

- 权重（weight)

```sh
 upstream backend {
        server localhost:8080 weight=1;
        server localhost:8081 weight=3;
    }
```

- ip_hash（根据 ip 来分配）

> ip_hash 机制能够让某一客户机在相当长的一段时间内只访问固定的后端的某台真实的 web 服务器

```sh
 upstream backend {
        ip_hash;
        server localhost:8080;
        server localhost:8081;
    }
```

- fair（根据响应时间来分配）

> 公平竞争，谁响应快，谁处理，不过这种方式需要依赖到第三方插件 nginx-upstream-fair，需要先安装

```sh
 upstream backend {
        fair;
        server localhost:8080;
        server localhost:8081;
    }
```

### 反向代理

```sh
// nginx.conf
server  {
  listen 80;
  server_name localhost;
  location /router/rest {
    proxy_pass http://127.0.0.1:8000;
  }
}
```

### gzip 配置

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

## nginx 参数说明

### location

~ 表示执行一个正则匹配，区分大小写;
~\* 表示执行一个正则匹配，不区分大小写;
^~ 表示普通字符匹配。使用前缀匹配。如果匹配成功，则不再匹配其他 location;
= 进行普通字符精确匹配。也就是完全匹配;
@ 它定义一个命名的 location，使用在内部定向时，例如 error_page, try_files

- 优先级:

> (location =) > (location 完整路径) > (location ^~ 路径) > (location ~,~\* 正则顺序) > (location 部分起始路径)

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
