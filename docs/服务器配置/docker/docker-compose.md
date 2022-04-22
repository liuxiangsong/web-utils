## docker-compose

> 通过docker-compose 可以批量管理容器，使用docker-compose.yml 文件维护docker相应命令，简化docker的使用

### docker-compose安装和配置

1. 去github官网下载docker-compose二进制包，或通过wget将二进制包下载到linux系统中

   下载地址：https://github.com/docker/compose/releases/download/1.24.1/docker-compose-Linux-x86_64

2. 为了方便操作将该二进制包重命名为docker-compose，并移至/usr/local/bin目录下

   ` mv docker-compose-Linux-x86_64 /usr/local/bin/docker-compose`

3. 将docker-compose文件权限修改为可执行：`chmod 777 docker-compose`

4. 创建软链或配置环境变量:

   - 创建软链：`sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose`
   - 配置环境变量：
     1. 编辑/etc/profile：`vi /etc/profile`
     2. 在文件最后添加：`export PATH=$PATH:/usr/local/bin`
     3. 重新加载/etc/profile：`source /etc/profile`

5. 在任意目录测试`docker-compose`命令是否正常

### docker-compose应用

> yml文件以key: value方式指定配置信息（key:后要加一个空格）
>
> 在docker-compose.yml文件中，不要使用制表符

#### docker-compose.yml文件

```yml
version: '3.1'
services:       # 可设置多个服务
  nginx:        # 服务的名称
    container_name: myNginx                  # 设置容器名称
    restart: always                          # 表示docker启动时，容器跟着docker一起启动
    image: daocloud.io/library/nginx:1.13.2  # 指定镜像路径
    ports:                                   # 端口映射，可设置多个
      - 80:80
    environment:
      TZ: Asia/Shanghai     # 指定时区
    volumes:                # 设置数据卷
      - /opt/docker_nginx/conf.d/:/etc/nginx/conf.d
      - /opt/docker_nginx/websites/nginx:/usr/share/nginx/html
      - /opt/docker_nginx/logs:/var/log/nginx
```

#### 使用docker-compose命令管理容器

> 在使用docker-compose命令时，默认会在当前目录下查找docker-compose.yml文件

- 基于docker-compose.yml启动管理的容器：`docker-compose up -d`
- 关闭并删除容器：`docker-compose down`
- 开启|关闭|重启 已存在的由docker-compose维护的容器：`docker-compose start|stop|restart`
- 查看由docker-compose管理的容器：`docker-compose ps`
- 查看日志：`docker-compose logs -f`



## lazydocker(可视化管理工作)

> lazydocker是一款针对docker和docker-compose的终端UI管理工具，支持键盘操作和鼠标点击

1. 下载[lazydocker压缩包](https://github.com/jesseduffield/lazydocker/releases)
2. 解压压缩包后，直接运行`lazydocker`命令即可



[参考资料](https://www.bilibili.com/video/BV1sK4y1s7Cj?p=3)
