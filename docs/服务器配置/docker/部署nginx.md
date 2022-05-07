1. 拉取mysql镜像
  `docker pull nginx`
2. 在/root目录下创建myNginx目录用于存储nginx数据信息
   ```sh
   mkdir ~/lau_nginx
   cd ~/lau_nginx
   ```
3. 创建容器，设置端口映射、目录映射
  ```sh
  docker run -id \
  -p 80:80 \
  --name=lau_nginx \
  -v $PWD/conf:/etc/nginx \
  -v $PWD/logs:/var/log/nginx \
  -v $PWD/html:/usr/share/nginx/html \
  nginx
  ```

## docker-compose.yml

```yml
version: '3.1'
services:       # 可设置多个服务
  lau_nginx:        # 服务的名称
    container_name: lau_nginx                  # 设置容器名称
    restart: always                          # 表示docker启动时，容器跟着docker一起启动
    image: daocloud.io/library/nginx:1.13.2  # 指定镜像路径,也可直接设置为nginx:latest
    ports:                                   # 端口映射，可设置多个
      - 80:80
    environment:
      TZ: Asia/Shanghai     # 指定时区
    volumes:                # 设置数据卷
      - /opt/lau_docker/lau_nginx/html:/usr/share/nginx/html
      - /opt/lau_docker/lau_nginx/conf.d/:/etc/nginx/conf.d
      - /opt/lau_docker/lau_nginx/logs:/var/log/nginx
    privileged: true        # 解决nginx的文件调用权限问题
```
