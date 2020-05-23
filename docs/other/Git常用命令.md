# 常用命令

- `git init [仓库名称]` //仓库名称为空时，则在当前文件夹下生成.git 文件夹
- `git clone [仓库地址]`
- `git checkout -b [local branch name] origin/[branch name]` //在本地新建分支，并拉取远程分支代码
- `git add .`
- `git commit -m '提交内容'`
- `git pull origin [branch name]`
- `git push origin [branch name]`
- `git restore .`

# 操作分支相关命令

- 查看本地分支：`git branch`
- 查看远程分支： `git branch -r`
- 查看所有分支： `git branch -a`
- 创建本地分支： `git branch [name]`
- 切换本地分支： `git checkout [name]`
- 新建并切换分支： `git checkout -b [name]`
- 新建并拉取远程分支：`git checkout -b [name] origin/[name]`
- 删除分支： `git branch -d [name]`
- 合并分支： `git merge [name]`
- \_创建远程分支(本地分支 push 到远程)： `git push origin [name]`

# stash

- `git stash save '备注信息'` // 保存未提交的修改至堆栈中
- `git stash list` //查看当前 stash 中的内容
- `git stash pop` //将当前 stash 中的内容弹出到当前工作目录，并删除此 stash
- `git stash show` //查看堆栈中最新保存的 stash 和当前目录的差异
- `git stash apply` //将当前 stash 中的内容应用到当前工作目录，但不删除此 stash
- `git stash apply [stash name]` //恢复指定 stash 到当前工作目录(stash name 如 stash@{1})
- `git stash drop [stash name]` //移除指定 stash
- `git stash clear`

# 远程仓库相关命令

- 查看远程仓库： `git remote -v`
- 删除远程仓库： `git remote rm [name]`

# 常用命令

- 修改最近一次 commit 注释: git commit --amend

[参考文档](https://gitee.com/liaoxuefeng/learn-java/raw/master/teach/git-cheatsheet.pdf)
