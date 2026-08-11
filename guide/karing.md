# Karing 客户端安装与使用教程

本教程将引导您安装并配置 Karing 客户端。Karing 是一款全平台通用的网络代理工具，各平台（Windows、Android、macOS、iOS）的界面与操作逻辑基本一致，本教程以 **Windows 端**为例进行演示。

## 一、软件下载

请根据您的设备系统，选择对应的安装包进行下载：

| 操作系统 | 适用设备/芯片 | 下载文件名 |
| :--- | :--- | :--- |
| Windows | 64位通用 | `karing_windows_x64.exe` |
| Android | 安卓手机/平板 | `karing_android.apk` |
| macOS | Intel 芯片 | `karing_macos.dmg` |
| macOS / iOS | Apple Silicon (M系列) / iPhone / iPad | 登录美区 Apple ID，前往 App Store 搜索 **Karing** 下载 |

::: tip 💡 大陆用户下载提示
请直接访问官方网站高速下载通道：[https://zip.suyungo.de/](https://zip.suyungo.de/)
:::

## 二、快速使用指南

### Step 1. 基础初始化设置

下载完成后，双击打开 `karing_windows_x64.exe` 安装包。首次启动会触发新手引导，请按照以下步骤完成基础配置：

1. 在地区选择界面，选择 **中国 (China)**
2. 点击 **下一步**
3. 根据提示，开启 **新手模式**

<img src="https://doc.mimy.cc/gykaring11.webp" width="600" alt="基础初始化设置 01" />
<img src="https://doc.mimy.cc/gykaring22.webp" width="600" alt="基础初始化设置 02" />
<img src="https://doc.mimy.cc/gykaring33.webp" width="600" alt="基础初始化设置 03" />
<img src="https://doc.mimy.cc/gykaring44.webp" width="600" alt="基础初始化设置 04" />
<img src="https://doc.mimy.cc/gykaring55.webp" width="600" alt="基础初始化设置 05" />
<img src="https://doc.mimy.cc/gykaring66.webp" width="600" alt="基础初始化设置 06" />
<img src="https://doc.mimy.cc/gykaring77.webp" width="600" alt="基础初始化设置 07" />
<img src="https://doc.mimy.cc/gykaring88.webp" width="600" alt="基础初始化设置 08" />
<img src="https://doc.mimy.cc/gykaring111.webp" width="600" alt="基础初始化设置 09" />
<img src="https://doc.mimy.cc/gykaring222.webp" width="600" alt="基础初始化设置 10" />
<img src="https://doc.mimy.cc/gykaring333.webp" width="600" alt="基础初始化设置 11" />
<img src="https://doc.mimy.cc/gykaring444.webp" width="600" alt="基础初始化设置 12" />
<img src="https://doc.mimy.cc/gykaring555.webp" width="600" alt="基础初始化设置 13" />
<img src="https://doc.mimy.cc/gykaring666.webp" width="600" alt="基础初始化设置 14" />

### Step 2. 导入速云订阅地址

基础初始化完成后，您需要将账户的订阅链接导入到客户端中以获取服务器节点：

1. 登录**速云官网**，复制您的订阅地址
2. 打开 Karing 客户端，在配置管理界面选择 **从剪切板导入**（软件会自动识别并粘贴您刚刚复制的链接）
3. 在**备注**栏中输入：`速云`
4. 点击右上角的 **✓（保存）** 按钮

<img src="https://img.mimy.cc/sp222.webp" width="600" alt="Apple ID 授权配置图示" />
<img src="https://doc.mimy.cc/gykaring999.webp" width="600" alt="配置管理界面" />
<img src="https://img.mimy.cc/suyunka11.webp" width="600" alt="从剪切板导入示例" />

### Step 3. 节点选择与延迟测试

成功导入订阅后，建议在连接前进行一次网络延迟测试，以便选择最快、最稳定的节点：

1. 点击左上角的**返回**按钮回到主界面
2. 点击屏幕最下方的 **>（进入）** 符号，进入节点列表页
3. 点击**向下展开**所有节点
4. 点击**闪电标志**进行全局延迟测试
5. 如果需要测试单个节点，可直接点击节点后面的**三角形**或**数字标志**
6. 在列表中，**点击选中**您想要使用的节点
7. 可点击右上方齿轮图标把服务器排序打卡，节点可按照延迟排序

::: tip 数值说明
数值越低，代表网络延迟越小，速度越快。
:::

::: warning ⚠️ 三角提示
代表该节点当前连接错误，服务器可能不可用。
:::

<img src="https://doc.mimy.cc/xhykaring22.webp" width="600" alt="返回主界面" />
<img src="https://doc.mimy.cc/xhykaring33.webp" width="600" alt="进入节点列表" />
<img src="https://img.mimy.cc/suyunka22.webp" width="600" alt="节点向下展开与全局测试" />
<img src="https://doc.mimy.cc/xhykaring66.webp" width="600" alt="选择并确定目标节点" />

### Step 4. 开启代理服务

选择好满意的节点后，便可以一键开启系统代理服务：

1. 点击左上角**返回**回到主界面
2. 点击屏幕正中下方的**电源开关**按钮
3. 开启后，状态将由**红色 ✕** 变为**绿色 ✓**，下方也会同步显示您当前选中的节点名称。此时，您已成功连接网络

<img src="https://img.mimy.cc/suyunka33.webp" width="600" alt="开启服务并连通状态" />

### Step 5. 日常维护：更新订阅

当后续节点发生变动、或需要同步您的套餐剩余流量时，请按照以下步骤快速手动更新：

1. 在主界面点击进入**我的配置**
2. 找到您添加的配置，点击对应的**云朵图标（更新）**，即可同步官网最新的节点信息

<img src="https://img.mimy.cc/suyunka44.webp" width="600" alt="进入我的配置界面" />
<img src="https://img.mimy.cc/suyunka55.webp" width="600" alt="点击云朵图标更新订阅" />