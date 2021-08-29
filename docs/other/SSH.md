
# 查看本机已存在的SSH keys

```bash
$ ls -al ~/.ssh
# Lists the files in your .ssh directory, if they exist
```

# 生成SSH key

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

> Note: If you are using a legacy system that doesn't support the Ed25519 algorithm, use:
> $ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

## github 中添加SSH key

1. 登录github,进入settings --> SSH and GPG keys --> New SSH key
2. 找到相应的 .pub文件，复制里面的内容粘贴到key中
3. 测试是事成功，在bash命令行窗体输入：```ssh -T git@github.com```
