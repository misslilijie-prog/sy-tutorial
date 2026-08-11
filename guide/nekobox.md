# NekoBox 客户端安装与使用教程

NekoBox 是一款基于 SagerNet 的通用代理软件，支持 Sing-box、V2Ray、Shadowsocks 等多种协议，性能出色且完全开源。

## 一、下载与安装

### 1. 获取安装包

可访问外网的用户建议前往 GitHub 官方项目发布页（Releases）下载最新的 APK 文件。通常选择文件名中包含 `arm64-v8a` 的版本以适配主流安卓手机。

- GitHub 官方下载：[https://github.com/Matsuridayo/NekoBoxForAndroid/releases](https://github.com/Matsuridayo/NekoBoxForAndroid/releases)

::: tip 未开启科学上网用户
可点击下载安装：[https://zip.suyungo.de/](https://zip.suyungo.de/)
下载文档名：NekoBox.apk
:::

### 2. 安装程序

打开下载好的 APK 文件，根据系统提示完成安装。如果系统拦截，请在设置中允许"安装未知来源应用"。

<div class="img-row">
<img src="https://img.mimy.cc/NK333.webp" alt="安装提示 01" />
<img src="https://img.mimy.cc/NK444.webp" alt="安装提示 02" />
<img src="https://img.mimy.cc/NK555.webp" alt="安装提示 03" />
</div>

## 二、导入订阅地址

### 1. 复制链接

在速云官网复制订阅地址。

::: warning 注意
订阅链接是获取节点的关键，请确保复制完整。
:::

<div class="img-row">
<img src="https://img.mimy.cc/SNK111.webp" alt="复制订阅地址 01" />
<img src="https://img.mimy.cc/SNK222.webp" alt="复制订阅地址 02" />
</div>

### 2. 进入配置界面

打开 NekoBox，点击右上角三个点，选择**添加服务器配置**，选择**从剪切板导入**，系统会自动识别你刚复制的订阅链接。

<div class="img-row">
<img src="https://img.mimy.cc/NK777.webp" alt="添加服务器配置 01" />
<img src="https://img.mimy.cc/NK888.webp" alt="添加服务器配置 02" />
<img src="https://img.mimy.cc/NK999.webp" alt="添加服务器配置 03" />
<img src="https://img.mimy.cc/SNK333.webp" alt="添加服务器配置 04" />
</div>

## 三、节点测试与选择

1. 导入完成后，返回主界面，你会看到多个服务器节点
2. 如果有新增节点，系统会提示"新增/变化"，点击**确定**即可
3. 点击右上方三个点，选择 **TCPing**，测试完成后，节点右侧会出现延迟数值（如 `120ms`）。建议选择延迟较低且显示为**绿色**的节点
4. 如要切换节点：直接点击目标节点名称即可完成切换

<div class="img-row">
<img src="https://img.mimy.cc/SNK444.webp" alt="节点列表" />
<img src="https://img.mimy.cc/NK1313.webp" alt="新增节点提示" />
<img src="https://img.mimy.cc/SNK555.webp" alt="TCPing 测试入口" />
<img src="https://img.mimy.cc/SNK777.webp" alt="节点延迟结果" />
<img src="https://img.mimy.cc/SNK888.webp" alt="切换节点" />
</div>

## 四、开启 VPN 连接

1. **启动开关**：回到主界面，点击底部的纸飞机按钮
2. **系统授权**：首次开启时，安卓系统会弹出"连接请求"对话框，请点击**确定**
3. **确认状态**：当按钮改变且通知栏出现 VPN 图标时，表示代理已成功开启

<div class="img-row">
<img src="https://img.mimy.cc/SNK999.webp" alt="VPN 连接成功状态" />
</div>

::: tip
点击主界面中间按钮即可关闭连接，关闭后恢复为正常网络。
:::

## 五、使用注意事项

::: tip 更新订阅
点击右上角"三个点"，点击「更新当前组订阅」，等待系统自动更新节点。建议每次使用前更新一次。
:::

::: warning 关闭冲突软件
请勿同时开启多个 VPN 或加速器类应用，以免造成网络冲突导致无法上网。
:::

::: warning 开启后无法上网
软件主界面会实时显示上传与下载速度，若速度始终为零，请检查节点是否到期或尝试更换其他节点。
:::

<div class="img-row">
<img src="https://img.mimy.cc/SNK666.webp" alt="速度显示界面" />
</div>