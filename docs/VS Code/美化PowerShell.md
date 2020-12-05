# 美化PowerShell

1. 下载并安装[windows terminal](https://github.com/microsoft/terminal)
2. 下载[Cascadia字体](https://github.com/microsoft/cascadia-code/releases?WT.mc_id=-blog-scottha)，并安装CascadiaCodePL.ttf
3. 使用`win + x`方式调出管理员模式的PowerShell,安装oh-my-posh和posh-git

   ```PowerShell
   Install-Module posh-git -Scope CurrentUser
   Install-Module oh-my-posh -Scope CurrentUser
   ```

4. 导入oh-my-posh和posh-git，并设置[主题](https://github.com/JanDeDobbeleer/oh-my-posh)

    ```PowerShell
   Import-Module posh-git
   Import-Module oh-my-posh
   Set-Theme Agnoster
   ```

5. 配置自动启动主题：在powershell中运行命令`notepad $PROFILE`后，会打开或创建Microsoft.PowerShell_profile.ps1文件，将第4步中的命令复制到.ps1文件中并保存。
6. 设置终端字体：

- windows terminal中：打开windows terminal，点击设计setting.json在defaults下设置`"fontFace":  "Cascadia Code PL"`保存即可。
- VSCode中：在设置中搜索`terminal font`，将字体设置为`'Cascadia Code PL'`保存即可

参考资料：
<https://www.jeremyjone.com/671/>
<https://docs.microsoft.com/en-us/windows/terminal/tutorials/powerline-setup>
