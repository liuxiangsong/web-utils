
# nuget

1. 下载[nuget.exe](https://dist.nuget.org/win-x86-commandline/latest/nuget.exe),将nuget.exe所在的目录添加到PATH 环境变量中。

## 发布包到nuget

1. 创建需要发布的项目，如*ClassLibrary*
2. 生成初始清单：在*ClassLibrary.csproj*所在文件夹下，打开命令提示符运行命令：`nuget spec ClassLibrary.csproj`，将会创建匹配项目名称的清单*ClassLibrary.nuspec*
3. 修改清单内容：在文本编辑器中修改*ClassLibrary.nuspec*相应的内容
4. 运行 pack 命令：在*ClassLibrary.nuspec*文件所在文件夹打开命令提示符，运行命令：`nuget pack`，将生成相应版本的.nupkg文件；
5. 发布包：在.nupkg文件所在文件夹下打开命令提示符，运行命令：`nuget push ClassLibrary.1.0.0.nupkg qz2jga8pl3dvn2akksyquwcs9ygggg4exypy3bhxy6w6x6 -Source https://api.nuget.org/v3/index.json`(替换API密钥值)

[参考文档](https://docs.microsoft.com/zh-cn/nuget/quickstart/create-and-publish-a-package-using-visual-studio-net-framework)

## nuget包安装问题

1.问题1：
> 错误： 在以下主源中找不到包“1.0.1.1”:“<https://api.nuget.org/v3/index.json>”。请验证你的所有联机包源是否都可用，以及是否正确指定了包 ID、版本。

解决方法：
>工具》选项》NuGet包管理器》常规》点击清除所有NuGet缓存
