# 速云 macOS 客户端安装与使用教程

::: danger 重要提醒
不要在速云 App 内付款！！！否则秒封号
:::

## 一、下载客户端

### Apple 芯片用户（M1 / M2 / M3）

- 文件名：`速云网络Mac端.zip`
- 下载链接：[https://zip.suyungo.de/](https://zip.suyungo.de/)

<img src="https://img.mimy.cc/symacapp111.webp" alt="macOS 安装包下载示例" />

## 二、使用提示

- 所有版本均无需注册即可使用
- 下载后如遇系统拦截，请在「系统偏好设置」中允许安装
- 如有疑问，请联系客服或查看以下帮助文档

## 三、下载与安装

1. 下载完成后双击打开安装包，将「速云网络」图标拖入「应用程序」文件夹
2. 打开「启动台」，找到并运行 **Terminal 终端**
3. 为解除安全限制，请执行以下命令，并输入 Mac 开机密码：

```bash
sudo xattr -rd com.apple.quarantine /Applications/suyun.app
```

如果安装的是中文名称版本，请改用：

```bash
sudo xattr -rd com.apple.quarantine /Applications/速云网络.app
```

::: tip 安装报错"软件已损坏"？
可参考：[Mac 电脑安装软件提示已损坏](http://v.douyin.com/5TGKuVI5lek/)
:::

## 四、登录说明

1. 在 Finder 中打开「应用程序」，启动速云客户端
2. 使用速云邮箱账户 + 密码登录
3. 登录后选择节点即可使用
4. 推荐进入设置，启用「开机自动启动」「全局模式」

::: tip 如果启动提示"来自身份不明的开发者"
打开「系统设置」 > 「隐私与安全性」 > 点击「仍要打开」
:::