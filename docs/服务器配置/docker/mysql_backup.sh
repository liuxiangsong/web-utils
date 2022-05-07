# 1. 创建home/backups/mysql 目录，将该备份脚本放到该目录下
# 2. 添加定时任务`crontab -e`
# 3. 编辑内容添加，示例为每天23:00定时执行脚本文件进行备份：
#    00 23 * * * /home/backups/mysql/mysql_backup.sh
# 4. 查看定时任务是否生效： crontab -l
# 5. 重启crontab服务：service crond restart


# 保留10天数据，
# lau_mysql 为mysql容器名称
docker exec -i lau_mysql bash<<'EOF'
# 判断容器内目录是否已经存在，如果不存在则创建
if [ ! -d "/backups/mysql" ]; then
  mkdir -p /backups/mysql
fi

# test_db 为数据库的名称
mysqldump -h localhost -uroot -p123456 test_db > /backups/mysql/test_db_$(date +%Y%m%d).sql

#删除超过10天的数据
rm -f /backups/mysql/test_db_$(date -d -10day +%Y%m%d).sql
exit
EOF
# 判断目录是不是已经存在，如果不存在则创建
#if [ ! -d "/backups/mysql" ]; then
#  mkdir -p /backups/mysql
#fi
# 将docker中的备份的数据拷贝到宿主机上。
docker cp lau_mysql:/backups/mysql/test_db_$(date +%Y%m%d).sql /home/backups/mysql
#删除超过10天的数据
#rm -f /home/backups/mysql/supervison_$(date -d -10day +%Y%m%d).sql