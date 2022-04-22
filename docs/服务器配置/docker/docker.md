# docker

## docker的基本操作

### docker的安装

1. 下载docker的依赖环境

   `yum -y install yum-utils device-mapper-persistent-data lvm2`

2. 设置下载docker的镜像源(阿里云)

   `yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo`

3. 安装docker

   `yum -y install docker-ce`

4. 启动、测试

   1. 启动：`systemctl start docker`
   2. 设置开机启动：`systemctl enable docker`
   3. 测试：`docker run hello-world`

### docker的中央仓库

- [官方仓库](https://hub.docker.com/)

- 国内的镜像网站：
  - [daoCloud](https://hub.daocloud.io/)
  - 网易蜂巢

### 镜像的操作

> 镜像ID或容器ID可以只输入前几位字符，只要能够唯一区分即可，类似使用git分支ID。

- 拉取镜像到本地：`docker pull 镜像名称[:tag]`

- 查看本地全部镜像：`docker images`

- 删除本地镜像：`docker rmi 镜像ID`

- 本地镜像的导入导出：
  - 导出：`docker save -o 导出的路径 镜像ID`
  - 导入：`docker load -i 镜像文件`
  - 修改镜像名称：`docker tag 镜像ID 新镜像名称:版本`

### 容器的操作

> 容器就是运行起来的镜像

- **运行容器**
  - 简单命令：`docker run 镜像ID|镜像名称[:tag]`
  - **常用命令**：`docker run -d -p 宿主主机端口:容器端口 --name 容器名称 镜像ID|镜像名称[:tag]`
    - -d：表示在后台运行容器
    - -p 宿主主机端口:容器端口：表示映射当前linux的端口和容器的端口
    - --name 容器名称：指定容器的名称
- 查看正在运行的容器：`docker ps -qa`
  - -a：查看全部的容器，包括没有运行的容器
  - -q：只查看容器的标识
- 查看容器的日志：`docker logs -f 容器ID`
  - -f：可以滚动查看日志的最后几行
- 进入到容器内部：`docker exec -it 容器ID bash|sh`
  - 从容器内部退出：exit
- 删除容器（删除前，需要先停止容器运行）
  - 停止指定容器：`docker stop 容器ID`
  - 停止所有容器：`docker stop $(docker ps -qa)`
  - 删除指定容器：`docker rm 容器ID`
  - 删除全部容器：`docker rm $(docker ps -qa)`
- 启动容器：`docker start 容器ID`
- *将宿主主机的内容复制到时容器内部*：`docker cp 文件名 容器ID:容器内部路径`

### 数据卷的操作

> 不建议去改变容器内部的内容，而应该使用数据卷
>
> 数据卷：将宿主主机的一个目录映射到时容器中的一个目录中；从而在宿主主机中操作目录内容，容器内部映射的文件也会跟着一起改变。

- 创建数据卷：`docker volume create 数据卷名称`
  - 创建数据卷后，内容默认会存放在目录 /var/lib/docker/volumes/数据卷名称/_data 中
- 查看数据卷的详细信息：`docker volume inspect 数据卷名称`
- 查看全部数据卷：`docker volume ls`
- 删除数据卷：`docker volume rm 数据卷名称`
- **应用数据卷**(在运行容器命令内添加参数：)
  - ` -v 数据卷名称:容器内部的路径`
    - eg：`docker run -d -p 宿主主机端口:容器端口 --name 容器名称 -v 数据卷名称:容器内部的路径 镜像ID`
    - 当映射数据卷时，如果数据卷不存在时，docker会自动创建，并将容器内部自带的文件，存储到该数据卷目录下
  - `-v 路径:容器内部的路径`
    - 用该方式指定一个路径作为数据卷的存放位置，该路径下是空的，不会将容器内部文件带到该目录下（推荐使用）

## docker自定义镜像

1. 创建一个Dockerfile文件，并在该文件内指定自定义镜像信息

   ```sh
   # Dockerfile文件中常用的内容
   from: #指定当前自定义镜像依赖的镜像
   copy: #将Dockerfile相对路径下的内容复制到自定义镜像中
   workdir: #声明镜像的默认工作目录
   cmd: #需要执行的命令（在workdir下执行，cmd可写多个，但以最后一个为准)
   ```

2. 通过docker命令制作镜像

   `docker build -t 镜像名称:[tag] Dockerfile所在路径`


[参考资料](https://www.bilibili.com/video/BV1sK4y1s7Cj?p=3)


