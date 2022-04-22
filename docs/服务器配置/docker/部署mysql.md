# 部署mysql

1. 拉取mysql镜像
  `docker pull mysql:5.7`
2. 在/root目录下创建mysql目录用于存储mysql数据信息
   ```sh
   mkdir ~/mysql
   cd ~/mysql
   ```
3. 创建容器，设置端口映射、目录映射
  ```sh
  docker run -id \
  -p 3306:3306 \
  --name=c_mysql \
  -v $PWD/conf:/etc/mysql/conf.d \
  -v $PWD/logs:/logs \
  -v $PWD/data:/var/lib/mysql \
  -e MYSQL_ROOT_PASSWORD=123456 \
  mysql:5.7
  ```
  参数说明
  - `-p 3306:3306`        # 将容器的 3306 端口映射到宿主机的 3306 端口
  - `--name=c_mysql`      # 设置容器名称为c_mysql
  - `$PWD/conf`           # $PWD表示为当前目录，相当于/root/mysql, $PWD/conf表示/root/mysql/conf
  - `-v $PWD/logs:/logs`  # 将主机当前目录下的 logs 映射挂载到容器的 /logs
  - `-e MYSQL_ROOT_PASSWORD=123456`  # e表示环境变量，初始化root的密码为123456
  - `mysql:5.7 `          # mysql为镜像名称，5.6为版本号
4. 进入容器，操作mysql     
   ```sh
   docker exec -it c_mysql /bin/bash   # 进入c_mysql容器
   mysql -uroot -p123456               # 以root用户登录mysql,密码为123456
   show databases;                      # 显示数据库
   create database test_db;             # 创建测试数据库test_db
   ```
   
 ##  常见问题
- 问题： Docker容器启动报WARNING: IPv4 forwarding is disabled. Networking will not work
  解决方法：
  1. `vim /etc/sysctl.conf`
  2. `net.ipv4.ip_forward=1 `        # 启用
  3. `systemctl restart network`     # 重启network服务
  4. `sysctl net.ipv4.ip_forward`    # 查看是否修改成功




