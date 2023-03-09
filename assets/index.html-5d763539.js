import{_ as n,p as t,q as e,Q as a}from"./framework-5866ffd3.js";const s={};function i(o,r){return t(),e("div",null,[a(` ## GitLab

[http://gitlab.yuwantech.com/](http://gitlab.yuwantech.com/)

### ssh秘钥生成

打开Git shell，在终端中依次输入下面命令：
1. 全局设置用户名：git config --global user.name "你的名字"
2. 全局设置邮箱：git config --global user.email "你的邮箱地址"
3. 生成密钥：ssh-keygen -t rsa -C "你的邮箱地址"
4. 输入三次密码，也可以直接回车不设置密码
5. 生成两个密钥文件 id_rsa.pub 和 id_rsa，保存在用户目录的～/.ssh/文件夹中。

> macOS系统路径：/Users/你的用户目录/.ssh  
> Windows系统路径：C:\\Users\\你的用户目录\\.ssh

6. 在语玩GitLab后台系统上添加公钥，即 id_rsa.pub 文件中的内容。  

![](/images/git.png)

### git 提交规范

|类型|描述|
|:-|:-|
|build|编译相关的修改，例如发布版本、对项目构建或者依赖的改动|
|chore|其他修改，比如改变构建流程、或者增加依赖库、工具等|
|ci|持续集成修改|
|docs|文档修改|
|feat|新特性、新功能|
|fix|修改bug|
|perf|优化相关、比如提升性能、体验|
|refactor|代码重构|
|revert|回滚到上一版本|
|style|代码格式修改|
|test|测试用例修改|


## SVN测试服务器

|项目|主机ip|用户|密码|
|:-|:-|:-|:-|
|语玩|182.92.5.146|root|43-K6m7h49+IAK23|
|lemo|8.219.218.63|root|yuwan@2022|

### 项目目录

|类型|yuwan|lemo|
|:-|:-|:-|
|程序代码|/server/ywbjweb/public/static|<-|
|静态资源|/data/yuwan_gfs/yuwan/static/activity|/data/yuwan_fs/yuwan/static/activity|


## MySQL

|项目|主机ip|用户|密码|port|
|:-|:-|:-|:-|:-|
|语玩|47.93.247.226|root|yuwan|3306|
|lemo|159.138.52.247|root|yuwan|15187| `)])}const l=n(s,[["render",i],["__file","index.html.vue"]]);export{l as default};
