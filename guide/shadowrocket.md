# Shadowrocket（iOS）使用教程

Shadowrocket（俗称“小火箭”）是 iOS 平台上非常流行且强大的网络代理工具。界面简洁、配置灵活，非常适合初学者与进阶用户使用。

---

## 一、 软件下载与准备

Shadowrocket 是一款付费软件（官方售价 **$2.99**），仅在**非中国大陆区（如美区）** App Store 上架。

::: warning ⚠️ 防骗提醒
App Store 中存在大量同名或图标相似的山寨恶意应用，请谨防误装。请认准官方正版图标与开发者信息，或直接通过下方官方链接跳转。
:::

* **官方正版下载地址**：[App Store 传送门](https://apps.apple.com/us/app/shadowrocket/id932747118)

### 账号获取与登录说明

推荐使用**美区 Apple ID** 自购买断，账号与应用绑定，可永久免费更新。

* **买断账号获取**：[点击购买美区 Apple ID](http://ios.mimy.cc)

::: tip 💡 登录注意事项
1. 只能在 **App Store** 内登录美区账号，**严禁在 iPhone「设置」主界面登录**，以免发生锁机风险！
2. 登录流程：打开 App Store ➔ 点击右上角个人头像 ➔ 滑到最底部点击「退出登录」➔ 输入并登录美区账号。
:::

<img src="https://img.mimy.cc/appleid.webp" width="500" alt="App Store 登录美区 Apple ID 示意图" />

---

## 二、 快速使用指南

### Step 1. 添加订阅链接

1. 登录 **fangqi 官网**，在控制面板/仪表盘复制您的专属订阅链接。
2. 打开 **Shadowrocket** 应用，点击右上角的 **`+`** 按钮新增配置。
3. 将 **类型（Type）** 切换为 **`Subscribe`**。
4. 在 **URL** 一栏粘贴刚复制的订阅链接，**备注（Note）** 可自定义（如：`fangqi`）。
5. 点击右上角 **完成（Save）** 保存。

<img src="https://img.mimy.cc/IOS2.webp" width="300" alt="新增配置" />
<img src="https://img.mimy.cc/IOS3.webp" width="300" alt="选择类型 Subscribe" />
<img src="https://img.mimy.cc/fangqixhj111.webp" width="300" alt="粘贴链接并保存" />

---

### Step 2. 选择节点与开启代理

1. 订阅添加成功后，应用会自动刷新并展示所有可用节点。
2. 在列表中点击选择您需要使用的**目标节点**。
3. 点击页面最顶部的 **未连接（开关按钮）** 开启代理服务。
4. 首次使用时，系统会弹出 **“Shadowrocket 想添加 VPN 配置”** 的授权提示，请点击 **允许（Allow）** 并完成系统面容/密码验证。

---

## 三、 节点延迟测试（Ping）

连接前建议先进行延迟测试，选择速度更快、响应更稳定的线路：

### 方法一：批量测试所有节点（推荐）
1. 打开 Shadowrocket，将连通性测试模式设置为 **`CONNECT`**。
2. 在首页节点列表上方，点击 **连通性测试**。
3. 软件会自动测试所有节点，并在节点右侧实时显示延迟数值（毫秒 ms）。

### 方法二：单个节点单独测试
1. 在首页节点列表中，**长按** 需要测试的某一个节点。
2. 在弹出的菜单中点击 **`Ping`** 或 **`测试`** 即可。

::: info 📊 延迟测试结果说明
* **绿色数字（< 100ms）**：网络延迟极低，体验最佳。
* **黄色 / 橙色数字（100ms - 300ms）**：延迟正常，可稳定流畅使用。
* **红色 / 超时（Timeout）**：当前节点连接异常或失效，请换用其他节点。
:::

<img src="https://img.mimy.cc/fangqixhj444.webp" width="300" alt="连通性测试" />
<img src="https://img.mimy.cc/fangqixhj222.webp" width="300" alt="节点测试结果" />