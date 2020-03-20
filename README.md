# 一个电影推荐应用

## 介绍

本项目主要是尝试使用 uni-app 制作跨多端应用，微信小程序端与 web 端

使用 HBuilder + vue + uni-app

使用 fastmock 平台模拟接口

## 预览

[web 端在线预览地址](http://singingxy.gitee.io/superhero-dev)

web 端部分页面效果

![images](https://raw.githubusercontent.com/singingXY/mypic/master/superhero/1.png)

![images](https://raw.githubusercontent.com/singingXY/mypic/master/superhero/2.png)

小程序端效果

![images](https://raw.githubusercontent.com/singingXY/mypic/master/superhero/3.png)

## 功能

> - 主页
>   - 轮播图
>   - 下拉刷新，猜你喜欢列表刷新后更新数据
>   - 点赞+1 动画效果
> - 搜索页
>   - 默认展示热门列表
>   - 下拉加载更多列表
> - 详情页
>   - 根据 Id 查询详细信息
>   - 演员及剧照可点击查看大图，左右滑动切换
>   - 顶部标题栏隐藏，下拉时显示
> - 用户页
>   - 判断登录状态
>   - 用户不存在则
>   - 登录后可修改头像、昵称、生日、性别等
> - 登录页
>   - 用户不存在则使用填写的用户名与密码注册
>   - 小程序端可以使用微信、QQ、微博等第三方账号登录

## install

```bash
# clone repo
git clone git@github.com:singingXY/superhero-dev.git

# 使用HBuilderX打开项目
# 点击 运行 或 发布
```

## 目录

```
superhero
├─ App.vue                   // 应用配置，App全局样式以及监听应用生命周期
├─ README.md                 // 项目介绍
├─ common
│    └─ common.js            // 配置通用请求地址
├─ components                // 组件目录
│    ├─ aline.vue            // 分隔线
│    ├─ cropper              // 查看头像大图
│    │    └─ cropper.vue
│    ├─ pictureBox.vue       // 模拟图片
│    └─ trailerStars.vue     // 星级评分组件
├─ pages                     // 业务页面文件目录
│    ├─ cover                // 查看海报大图
│    │    └─ cover.vue
│    ├─ index                // 主页
│    │    ├─ index.css
│    │    └─ index.vue
│    ├─ movie                // 影片详情页
│    │    ├─ movie.css
│    │    └─ movie.vue
│    ├─ registLogin          // 登录/注册页
│    │    ├─ registLogin.css
│    │    └─ registLogin.vue
│    ├─ search               // 搜索页
│    │    ├─ search.css
│    │    └─ search.vue
│    ├─ me                   // “我的”页
│    │    ├─ me.css
│    │    └─ me.vue
│    ├─ meInfo               // “我的”-设置页
│    │    ├─ meInfo.css
│    │    └─ meInfo.vue
│    ├─ meBirthday           // “我的”-设置-修改生日页
│    │    └─ meBirthday.vue
│    ├─ meFace               // “我的”-设置-上传头像页
│    │    └─ meFace.vue
│    ├─ meNickname           // “我的”-设置-修改昵称页
│    │    └─ meNickname.vue
│    └─ sex                  // “我的”-设置-修改性别页
│         └─ sex.vue
├─ pages.json                // 配置页面路由、导航条、选项卡等页面类信息
├─ main.js                   // Vue初始化入口文件
├─ manifest.json             // 配置应用名称、appid、logo、版本等打包信息
└─ static                    // 应用静态资源目录

```
