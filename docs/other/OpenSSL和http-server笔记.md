# OpenSSL 生成证书

1. [下载 OpenSSL](https://oomake.com/download/openssl);
2. 运行下载的 exe 文件安装 openSSL
3. 设置电脑环境变量（变量值为应用安装目录下的 bin 目录。如 C:\OpenSSL-Win64\bin）
4. 在命令行窗体运行下面指令生成自签名 SSL 证书：

> openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem

# 安装 http-server

> `npm install http-server -g`

- 如果需要用到 https，则将生成的 openSSL 证明复制的项目根目录
