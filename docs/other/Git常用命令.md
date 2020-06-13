# git 命令

注：此文档默认远程版本库名为 origin\_

## 常用命令

- `git init [仓库名称]` //仓库名称为空时，则在当前文件夹下生成.git 文件夹
- `git clone [仓库地址]`
- `git checkout -b [local branch name] origin/[branch name]` //在本地新建分支，并拉取远程分支代码
- `git add .`
- `git commit -m '提交内容'`
- `git pull origin [branch name]`
- `git push origin [branch name]`
- `git restore .`
- `git reset --soft HEAD~`
- `git commit --amend` //修改最近一次 commit 注释

## 操作分支相关命令

- 查看本地分支：`git branch`
- 查看远程分支： `git branch -r`
- 查看所有分支： `git branch -a`
- 创建本地分支： `git branch [name]`
- 切换本地分支： `git checkout [name]`
- 新建并切换分支： `git checkout -b [name]`
- 新建并拉取远程分支：`git checkout -b [name] origin/[name]`
- 删除分支： `git branch -d [name]`
- 合并分支： `git merge [name]`
- 创建远程分支(本地分支 push 到远程)： `git push origin [name]`
- 删除远程分支: `git push origin --delete [name]`

## stash

- `git stash save '备注信息'` // 保存未提交的修改至堆栈中
- `git stash list` //查看当前 stash 中的内容
- `git stash pop` //将当前 stash 中的内容弹出到当前工作目录，并删除此 stash
- `git stash show` //查看堆栈中最新保存的 stash 和当前目录的差异
- `git stash apply` //将当前 stash 中的内容应用到当前工作目录，但不删除此 stash
- `git stash apply [stash name]` //恢复指定 stash 到当前工作目录(stash name 如 stash@{1})
- `git stash drop [stash name]` //移除指定 stash
- `git stash clear`

## 远程仓库相关命令

- 查看远程仓库： `git remote -v`
- 查看远程仓库信息：`git remote show origin`
- 删除远程仓库： `git remote rm [name]`
- 更新本地关联的远程分支：`git remote update origin --prune`

## 版本回退

- `git reset --soft HEAD~` //~后可加数字，默认为 1；eg HEAD~2,表示回退 2 个版本
- `git reset [<mode>] [<commit>]` //mode：--soft, --hard, --mixed; --soft 不会修改暂存区和工作区中的内容，而--hard 则会彻底还原至上次提交的状态，本次提交的内容会被清除
- `git log --pretty=oneline` //查看提交日志，参数 oneline 表示一行显示

[参考文档](https://gitee.com/liaoxuefeng/learn-java/raw/master/teach/git-cheatsheet.pdf)
