#  虚拟机安装centos

## 相关软件

1. 虚拟机：VMware或Virtual Box
2. [centos镜像](http://mirrors.163.com/centos/7/isos/x86_64/)
3. 连接linux的图形化界面：MobaXterm或XShell

## 安装linux系统

- VM虚拟机设置注意点：
  - 内存：建议设置2G或以上；
  - 网络适配器：设置桥接模式，并勾选“复制物理网络连接状态”
- centos 安装注意点：
  - “网络和主机名”选项中要开启网络

## 使用MobaXterm远程连接虚拟机

1. 使用命令`ip a`查看虚构机的ip地址（网卡名为ens33的ip地址）
2. 通过MobaXterm连接：
   1. 在工具栏上选择session新建连接，然后通过SSH的方式连接；
   2. 远程主机名填虚拟机的ip地址，用户名为linux系统的用户名：root

## virtual box“安装增强功能”失败，解决方法

1. 安装 gcc-c++编译器：yum -y install gcc-c++
2. 安装内核 kernal 库：yum -y install kernel kernel-devel
3. 重启系统：init 6
4. 重新安装增强功能

