# centos

## 设置

### CentOS 7 设置以 root 身份自动登录 gnome 桌面

1. vi /etc/gdm/custom.conf
2. 在[daemon]下面添加：

   ```sh
   [daemon]
   AutomaticLoginEnable=True
   AutomaticLogin=root #你想自动登录的用户名
   ```

## 命令

### 常用命令

- reboot ：重启
- su - ：切换到 root 用户，切换回普通用户使用 exit
- pwd ：查看当前路径
- mkdir -p [目录]：创建文件夹（参数 p 为递归创建文件夹，默认不准递归创建）
- touch [文件名]：创建文件
- rm -rf [文件或目录]：删除文件或目录（参数-r 删除目录，-f 强制）
- 安装应用程序：`yum install [文件路径或文件名]`

### 防火墙与端口相关命令

- 查看监听端口： `netstat -lnt`
- 查看防火墙状态： `systemctl status firewalld`
- 禁用防火墙： `systemctl stop firewalld`
- 查看所有打开的端口：`firewall-cmd --list-ports`
- 永久开启 8080 端口： `firewall-cmd --zone=public --permanent --add-port=8080/tcp`
- 重启防火墙：`systemctl restart firewalld.service`

### SELinux 相关命令

- 查看状态：/usr/sbin/sestatus -v
- 永久关闭
  1. vi /etc/selinux/config
  2. 将 SELINUX=enforcing 改为 SELINUX=disabled
  3. reboot(重启)

### vim 常用命令

- 插入模式：
  - 按 i、a 或 insert 键进入，按 esc 退出插入模式
  - ctrl+shift+c/v ：复制/粘贴
- 命令模式：
  - 按:进入
  - x ：保存文件并退出
  - wq(wq!) ：保存文件并退出(w：保存文件，q：退出缓冲,!:强制)
  - set nu ：显示行号

## 虚拟机“安装增强功能”失败，解决方法

1. 安装 gcc-c++编译器：yum -y install gcc-c++
2. 安装内核 kernal 库：yum -y install kernel kernel-devel
3. 重启系统：init 6
4. 重新安装增强功能

## 用 yum 安装包提示：No package …… available 时，解决方法

1. 安装 epel-release：sudo yum install epel-release
2. 更新 yum 以及其它软件包：sudo yum update
