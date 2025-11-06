# genlusys 平台使用说明

genlusys是一个智能设备管理与监控平台，专为物联网应用设计，旨在为用户提供便捷的设备管理、远程控制和实时监控服务。通过集成Lorawan、MQTT等先进通信技术，genlusys能够实现高效稳定的数据传输，同时具备低功耗和强大的安全性。在genlusys平台上，用户可以管理和监控项目中的网关、设备、冷库等设施，实时获取设备的运行状态、能耗数据和报警信息，提升企业在设备管理和能源监控上的效率。不论是工业自动化、智能家居，还是冷链管理，genlusys都能为用户提供全面的设备管理解决方案，帮助提高运维效率、节省能源并确保设备的稳定运行。

## 1.登录

目前, 用户初次使用 `genlusys` 平台时, 需要向瑞兴恒方平台管理人员申请账号, 获取账号后, 访问 [https://genlusys.risinghf.com/](https://cloud.iotsquare.xyz/login)站点, 即可跳转至登录界面。

![](http://risinghf-wiki.oss-cn-shenzhen.aliyuncs.com/upload/genlusys/image-20251028094934948.png)

------

默认跳转至项目管理页。平台右上角分为三大模块，用户主页（房子图标）、项目主页（文件夹图标）、大屏阅览（电脑图标），还有全屏和语言切换的功能，最右侧可以退出系统。界面设置是编辑系统的中性标题（头部居中位置）。用户模块和项目模块的侧边菜单不一样

![image-20251028100912090](http://risinghf-wiki.oss-cn-shenzhen.aliyuncs.com/upload/genlusys/image-20251028100912090.png)

## 2.项目

### 2.1 项目管理

创建项目是使用平台最重要的一环，后续的网关、设备、冷库等功能都是挂载在选择的项目下。推送URL是断路器数据HTTP推送地址，点击地图或搜索可以自动填入当前地址信息。

![image-20251028103101932](http://risinghf-wiki.oss-cn-shenzhen.aliyuncs.com/upload/genlusys/image-20251028103101932.png)

------

### 2.2 项目成员管理

该页面会自动查询当前账户所有有权限的项目，用户可以对项目的成员进行管理，需要知道对方的账号，设置角色为普通成员或项目管理员

![image-20251031102754291](http://risinghf-wiki.oss-cn-shenzhen.aliyuncs.com/upload/genlusys/image-20251031102754291.png)

------

### 2.3 项目报警联系人管理

可以选择手机号和邮箱接收项目的报警信息

![image-20251031103759408](http://risinghf-wiki.oss-cn-shenzhen.aliyuncs.com/upload/genlusys/image-20251031103759408.png)

## 3.网关

### 3.1 网关

注：使用网关设备等功能时请先在左上角选择一个项目

- 网关列表：在左上角选择项目后可以看到当前项目所有的网关及其信息，支持网关ID和备注搜索，同时可以切换卡片和列表模式。

![image-20251028114719836](http://risinghf-wiki.oss-cn-shenzhen.aliyuncs.com/upload/genlusys/image-20251028114719836.png)

- 注册网关：填写相关参数，注册网关前需要先注册一个点表（点表即⽂件）。

![image-20251028135900327](http://risinghf-wiki.oss-cn-shenzhen.aliyuncs.com/upload/genlusys/image-20251028135900327.png)

- 网关详情：可以查看网关的详情信息，包括设备ID、网关型号、地址、固件版本、硬件版本、SIM卡的CCID号、CAT1信号CSQ、网关运行时长、网关断电、网关断电时间、协议、在线状态

![image-20251028141853573](http://risinghf-wiki.oss-cn-shenzhen.aliyuncs.com/upload/genlusys/image-20251028141845051.png)

- 网关设置：修改上报周期、点表、备注、地址信息功能
- 串口配置：可以新增串口配置，可填写串口号、串口波特率、串口数据位个数、串口停止位个数、串口奇偶校验
- 断路器列表：输入断路器地址和用途标识即可绑定断路器
- 数据导出：选择开始时间和结束时间即可导出网关的数据
- 服务器配置：配置MQTT的地址、账号、密码、公钥
- 远程操作：对网关进行重启和恢复出厂设置操作
- 远程调试：使用Websocket获取网关的实时日志输出
- 固件升级历史：查询网关的网关升级历史，展示时间、版本号、固件URL、升级结果、升级报错
- MQTT连接历史：查询网关的MQTT连接历史，展示时间、动作
- 上下电历史：查询网关的上下电历史，展示时间、发生的事件
- 备用服务器配置：默认隐藏，ctrl+q显示。可以配置是否开启长连接和设备数据推送

------

### 3.2 点表

列表展示点表的名称、断路器型号、网关型号，添加点表时也是输入这些参数，点表URL通过上传文件后自动生成，支持下载。

![image-20251028144116573](http://risinghf-wiki.oss-cn-shenzhen.aliyuncs.com/upload/genlusys/image-20251028144116573.png)

------

### 3.3 固件升级

分为升级任务和升级历史记录，创建升级任务时如需选择多个网关可用逗号分隔

![image-20251030111231819](http://risinghf-wiki.oss-cn-shenzhen.aliyuncs.com/upload/genlusys/image-20251030111231819.png)

## 4.设备

### 4.1 设备列表

此页面可以查看项目下的所有设备，可以通过网关或设备ID精确查询，同时可以切换显示模式

![image-20251030142508709](http://risinghf-wiki.oss-cn-shenzhen.aliyuncs.com/upload/genlusys/image-20251030142407073.png)

------

### 4.2 设备详情

- 设备详情：用户可以查看设备的基本信息。

  在线状态展示，数据来源：MQTT连接状态变化。硬件､ 系统信息展示，数据来源：定期数据上报。⽹关TCP/IP⽹络信息， 数据来源：⽹关信息。

![image-20251030142933979](http://risinghf-wiki.oss-cn-shenzhen.aliyuncs.com/upload/genlusys/image-20251030142933979.png)

- 运行趋势：用户可以通过图表直观地展示设备的运行趋势。例如，您可以查看设备在指定日期内的电流、电压、温度等关键指标，帮助您实时监控设备运行状态，并通过这些数据进行优化调整。

  ![image-20251030145435950](http://risinghf-wiki.oss-cn-shenzhen.aliyuncs.com/upload/genlusys/image-20251030145435950.png)

- 远程操作：可以对设备进行分闸、合闸、自检操作
- 远程操作历史：查看远程操作历史，包括动作、结果、错误信息、时间
- 数据导出：可以选择指定时间导出设备的相关信息

## 5.管控

### 5.1 定时任务

此功能可以通过自己的需求来设置指定时间进行分闸、合闸和自检操作，执行模式分为边缘端和云端，边缘端模式只能选择循环定时进行操控，云端可以任意执行，满足不同应用场景下的自动化管理需求。

![image-20251030162803337](http://risinghf-wiki.oss-cn-shenzhen.aliyuncs.com/upload/genlusys/image-20251030162803337.png)

------

### 5.2 联动配置

创建联动规则。选择设备对象，跟据变量（如断路器的温度）的与或逻辑判断要不要执⾏设备的分闸、合闸、自检操作

![image-20251030165127639](http://risinghf-wiki.oss-cn-shenzhen.aliyuncs.com/upload/genlusys/image-20251030165127639.png)

------

### 5.3 报警配置

用户可以为设备设置阈值，当设备的某项指标低于下限或高于上限时，系统将自动触发报警，提醒用户及时处理问题。用户还可以根据需要调整报警执行的时间间隔，默认为30分钟，确保系统在最合适的时机发出预警。

![image-20251030173636147](http://risinghf-wiki.oss-cn-shenzhen.aliyuncs.com/upload/genlusys/image-20251030173236643.png)

## 6. 监控

### 6.1 项目概览

主要是统计项目下所有的网关和设备信息

![image-20251030173614387](http://risinghf-wiki.oss-cn-shenzhen.aliyuncs.com/upload/genlusys/image-20251030173614387.png)

------

### 6.2 能耗

电量和用电负荷是用来监控设备的能耗，可以选择网关和日期进行查询，右侧显示当前电量累计。可以切换柱状图/折线图

![image-20251031093135776](http://risinghf-wiki.oss-cn-shenzhen.aliyuncs.com/upload/genlusys/image-20251031093135776.png)

------

### 6.3 报警

报警统计记录报警的类型和次数。报警历史可以查询报警的详细信息，当处理为红色时代表当前报警状态未处理，点击可以输入处理描述进行处理，蓝色代表已经处理。

![image-20251031094428766](http://risinghf-wiki.oss-cn-shenzhen.aliyuncs.com/upload/genlusys/image-20251031094428766.png)



## 7. 用户设置

### 7.1 基本设置

设置当前用户的个人信息。

![image-20251031104108353](http://risinghf-wiki.oss-cn-shenzhen.aliyuncs.com/upload/genlusys/image-20251031104108353.png)

------

### 7.2 操作日志

查看账号的登入、登出记录

![image-20251031105007517](http://risinghf-wiki.oss-cn-shenzhen.aliyuncs.com/upload/genlusys/image-20251031105007517.png)

------

### 7.3 用户管理

当用户的账号是超级管理员账号，可以创建用户类型为超级管理员、App代理商、Web普通用户的账号

![image-20251031105043966](http://risinghf-wiki.oss-cn-shenzhen.aliyuncs.com/upload/genlusys/image-20251031105043966.png)

## 8. 冷库控制

用户可以根据实际需要选择断路器和设备，轻松创建冷库看板，实时监控温度、制冷状态等关键参数。此功能帮助用户确保冷库设备的正常运行，并通过简单的界面进行设置和调整。

![image-20251031094634159](http://risinghf-wiki.oss-cn-shenzhen.aliyuncs.com/upload/genlusys/image-20251031094634159.png)

冷库详情能修改这些参数，还可以对设备进行开关控制。注：新增和查询定时任务时默认选择当前断路器

![image-20251031101042776](http://risinghf-wiki.oss-cn-shenzhen.aliyuncs.com/upload/genlusys/image-20251031101042776.png)

## 9. 大屏

大屏模块提供了一个直观的界面，帮助用户实时监控项目中的关键数据。用户可以查看设备分类、碳排放统计、设备功率等数据，并通过实时报警列表及时了解项目运行状态。默认进来是统计的是⽤户下所有项⽬的所有设备，左上角可以自行选择项目，项目简介是创建项目填入的简介，实时报警列表的地址过长鼠标移入可以查看详情。

![image-20251031111217320](http://risinghf-wiki.oss-cn-shenzhen.aliyuncs.com/upload/genlusys/image-20251031111217320.png)

## 10.项目权限

系统的权限一共分为两个类别。一是用户账号的权限，分为超级管理员和普通用户。二是项目角色的权限，分为项目管理员和普通用户。

![](http://risinghf-wiki.oss-cn-shenzhen.aliyuncs.com/upload/genlusys/image-20251105255663225.png)