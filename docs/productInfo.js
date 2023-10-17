/*
* id: 一个序号，方便找到对应的中英文产品信息
* title: 产品在首页的标题
* description: 产品的描述
* type: 产品的型号
* src: 产品的图片链接
* path: 产品简介的跳转链接
* tag: 产品的标签，可选值有 'module', 'node', 'gateway', 'cavityFilter', 'relay', 'handheld', 'tracker', 'smartMeter'
* */
module.exports = {
  zh: [
    {
      id: 1,
      title: '多功能超低功耗超小尺寸远距离通信模组',
      description: 'RHF0M0E5是瑞兴恒方网络(深圳)有限公司设计的低成本，超低功耗，超小尺寸的LoRaWAN模组',
      type: 'RHF0M0E5',
      src: 'https://wiki.risinghf.com/upload/img/227fed926b9524486f48006d9e2a84ed.png',
      path: '/zh/01/01/01/01/',
      tag: 'module'
    },
    {
      id: 2,
      title: '低功耗超小尺寸远距离通信模组',
      description: 'RHF0M062是瑞兴恒方网络(深圳)有限公司设计的低成本，超低功耗，超小尺寸的LoRaWAN模组',
      type: 'RHF0M062',
      src: 'https://wiki.risinghf.com/upload/img/6ae638ff60e230f4620a144bf300e88d.png',
      path: '/zh/01/01/02/01/',
      tag: 'module'
    },
    {
      id: 3,
      title: '8通道远距离通信网关模组',
      description: 'RHF0M301 8通道LoRa网关模组是一款高性能小尺寸模组，内置Semtech的LoRa/LoRaWAN网关芯片SX1301',
      type: 'RHF0M301',
      src: 'https://wiki.risinghf.com/upload/img/4ba80e648f747d2106914b516fd6a754.png',
      path: '/zh/01/01/03/01/',
      tag: 'module'
    },
    {
      id: 4,
      title: '极低功耗远距离无线节点模组',
      description: 'RHF76-052x RHF78-052x 低功耗，低成本，小尺寸LoRaWAN节点模组射频采用Semtech LoRa芯片SX1276/78，主控采用ST超低功耗MCU STM32L051/052xx.',
      type: 'RHF76-052x RHF78-052x',
      src: 'https://wiki.risinghf.com/upload/img/469fefb5d61c1ce6081f9cf62b6727f6.png',
      path: '/zh/01/01/04/01/',
      tag: 'module'
    },
    {
      id: 5,
      title: 'USB AT Modem',
      description: 'RHF3M076B 是瑞兴恒方网络（深圳）有限公司产 品RHF3M076的升级版，ROM和RAM大小分别是128KB和20KB。',
      type: 'RHF3M076B',
      src: 'https://wiki.risinghf.com/upload/img/4bb19ddc7afdd6e46f836cfcc0f55229.png',
      path: '/zh/01/01/05/01/',
      tag: 'module'
    },
    {
      id: 6,
      title: '低功耗小尺寸无线模组',
      description: 'RHF0M003模组是一款低成本、低功耗、超小尺寸的 LoRaWAN模组，内部由Semtech公司生产的LoRa芯片 SX127x以及ST的低功耗单片机STM32L07x组成。',
      type: 'RHF0M003',
      src: 'https://wiki.risinghf.com/upload/img/61c7635cbe5c36cc9e71dab3dbbb5b5e.png',
      path: '/zh/01/01/06/01/',
      tag: 'module'
    },
    {
      id: 7,
      title: '8信道家庭物联网网关',
      description: '瑞兴恒方8通道LoRaWAN家庭网关RHF2S024是一款基于LoRaWAN协议的易安装型室内网关，内置Semtech高性能多通道收发器SX1308和MTK平台。',
      type: 'RHF2S024',
      src: 'https://wiki.risinghf.com/upload/img/6fdf41ab809ac2047f76de4c64b48507.png',
      path: '/zh/01/02/01/01/',
      tag: 'gateway'
    },
    {
      id: 8,
      title: 'RHF2S208 型室外网关',
      description: 'RHF2S208是瑞兴恒方精心打造的具备支持全双工模式的电信级的LoRaWAN网关系列。内嵌Linux操作系统，主控芯片为性能强大的ARM Cortex-A53平台，主频最高可达到1.2GHz。',
      type: 'RHF2S208',
      src: 'https://wiki.risinghf.com/upload/img/20ae05a4c15ac208aef9aea4a2e6de3c.png',
      path: '/zh/01/02/02/01/',
      tag: 'gateway'
    },
    {
      id: 9,
      title: '8信道工业级物联网网关',
      description: '瑞兴恒方 8通道LoRaWAN工业级网关RHF2S025是一款基于LoRaWAN协议的易安装型室内工业级高可靠性网关，内置Semtech高性能多通道收发器SX1308和MTK平台。支持半双工和全双工通信模式可选。',
      type: 'RHF2S025',
      src: 'https://wiki.risinghf.com/upload/img/e87c14f05fc90d489e423e90c46e5d2f.png',
      path: '/zh/01/02/03/01/',
      tag: 'gateway'
    },
    {
      id: 10,
      title: '雀桥中继',
      description: 'RHF3MR01 型雀桥中继是瑞兴恒方网络（深圳）有限公司针对 LoRaWAN 现场应用过程中，信号不稳定、覆盖存在盲区的应用痛点研发设计而成。以求帮助用户花最小的代价对 LoRaWAN 网络中少量无法直接由网关覆盖的边缘节点进行信号覆盖补充，增加 LoRaWAN 网络的可靠性。',
      type: 'RHF3MR01',
      src: 'https://wiki.risinghf.com/upload/img/e20089f6b52306db7874844d1553d7ca.png',
      path: '/zh/01/03/01/01/',
      tag: 'relay'
    },
    {
      id: 11,
      title: '手持路测仪',
      description: 'RHF4T003 是一款基于标准 LoRaWAN 无线通信协议的信号质量测试仪器。 自动切换入网模式， LCD 显示屏实时显示当前数据收发状态、 信号质量及当前位置 GPS 信息。 当前信号的 RSSI、 SNR LinkMargin 及 GPS 信息会实时保存在内置存储卡中供用户进一步分析。',
      type: 'RHF4T003',
      src: 'https://wiki.risinghf.com/upload/img/31f4cf9fcd757e50090be94c44cd04fa.png',
      path: '/zh/01/04/01/01/',
      tag: 'handheld'
    },
    {
      id: 12,
      title: '超声波水表',
      description: 'RHF1S213是瑞兴恒方网络(深圳)有限公司研发涉及的LoRaWAN无线通讯智能超声波水表，RHF1S213智能超声波水表基于LoRAWAN无线通讯技术的远程周期上报抄表功能、定时上报抄表功能、智能检测爆管、漏水和安装方向错误的功能并上报警报功能等，并支持中继功能实现更远的覆盖范围。',
      type: 'RHF1S213',
      src: 'https://wiki.risinghf.com/upload/img/bb683df3f1845f36e3808e791ad937b8.png',
      path: '/zh/02/01/01/01/',
      tag: 'smartMeter'
    },
    {
      id: 13,
      title: '低功耗超小尺寸远距离通信模组',
      description: 'RHF0M063是瑞兴恒方网络(深圳)有限公司设计的低成本，超低功耗，超小尺寸的LoRaWAN®模组，模块采用ST的低功耗单片机STM32L07x以及SX126X组成。 该模块的目标应用是无线传感网络和其他物联网设备，尤其是有电池供电要求低功耗和远距离的场合。',
      type: 'RHF0M063',
      src: 'https://wiki.risinghf.com/upload/img/5ccbc1ad0ddc590ba12aca9f818a60e0.png',
      path: '/zh/01/01/07/01/',
      tag: 'module'
    },
    {
      id: 14,
      title: 'RHF2S027 gateway',
      description: 'RHF2S027 gateway',
      type: 'RHF2S027',
      src: 'https://wiki.risinghf.com/upload/img/ee7aa69fd7fbe886fcf186c7a0341392.png',
      path: '/zh/01/02/04/01/',
      tag: 'gateway'
    },
    {
      id: 15,
      title: '8通道LoRa网关模块',
      description: 'RHF0M302B Mini-PCIE接口8通道LoRa®网关模组是一款高性能小尺寸模组，内置Semtech 的LoRaWAN®网关芯片SX1302，致力于无线传感、自动表计和其他IOT物联网的应用。',
      type: 'RHF0M302B',
      src: 'https://wiki.risinghf.com/upload/img/4d763bc6cf46ea8c3e89fc752ad4a91e.png',
      path: '/zh/01/01/08/01/',
      tag: 'module'
    },
    {
      id: 16,
      title: 'GN1S067牛羊定位器',
      description: 'GN1S067 是为畜牧业设计的一款牛羊骆驼等牲畜定位器. 内置有蓝牙定位功能，GPS/北斗定位模块，温湿度传感器以及三轴加速度传感器。采用一节3.6v锂亚电池，典型使用寿命长达5年免更换。支持 LoRaWAN®、Cat-1 和 Cat-M，通过蓝牙进行数据通信和参数配置。',
      type: 'GN1S067',
      src: 'https://wiki.risinghf.com/upload/img/e4bb3fee8b3286400feae99df03459f8.png',
      path: '/zh/01/05/01/01/',
      tag: 'tracker'
    },
    {
      id: 17,
      title: 'RHF2S209 LoRaWAN 8通道室外网关',
      description: 'RHF2S209是瑞兴恒方精心打造的具备支持半双工模式的工业级的LoRaWAN网 关。内嵌Linux操作系统，主控芯片为性能强大的32-bit Arm® Cortex® -A7平台，主频最高可达到650MHz。内部搭载Semtech高性能多通道LoRa收发器SX1302，极大的降低了工作功耗同时支持更大的网络容量。',
      type: 'RHF2S209',
      src: 'https://wiki.risinghf.com/upload/img/1857e290e264a7504e6156280c135f80.png',
      path: '/zh/01/02/05/01/',
      tag: 'gateway'
    }
  ],
  en: [
    {
      id: 1,
      title: 'Multi-function ultra Low Power Module With FSK/LoRa Radio',
      description: 'RHF0M0E5 is a low-cost, ultra-low power, ultra-small LoRaWAN module designed by Ruixing Hengfang Network (Shenzhen) Co., Ltd.',
      type: 'RHF0M0E5',
      src: 'https://wiki.risinghf.com/upload/img/227fed926b9524486f48006d9e2a84ed.png',
      path: '/en/01/01/01/01/',
      tag: 'module'
    },
    {
      id: 2,
      title: 'Ultra Low Power Module With FSK/LoRa Radio',
      description: 'RHF0M062 is a low-cost, ultra-low power, ultra- small LoRaWAN module designed by Ruixing Hengfang Network (Shenzhen) Co., Ltd.',
      type: 'RHF0M062',
      src: 'https://wiki.risinghf.com/upload/img/6ae638ff60e230f4620a144bf300e88d.png',
      path: '/en/01/01/02/01/',
      tag: 'module'
    },
    {
      id: 3,
      title: '8 Channels Gateway Module For LoRa/LoRaWAN',
      description: 'RHF0M301 8 channels LoRaWAN Module is a high performance and small size module embedded with  Semtech’s powerful LoRa/LoRaWAN gateway chip SX1301.',
      type: 'RHF0M301',
      src: 'https://wiki.risinghf.com/upload/img/4ba80e648f747d2106914b516fd6a754.png',
      path: '/en/01/01/03/01/',
      tag: 'module'
    },
    {
      id: 4,
      title: 'Ultra Low Power Wireless Module For LoRa/LoRaWAN',
      description: 'RHF76-052 LoRaWAN Module is a low power,low cost and small size module embedded with LoRa chip SX1276 of Semtech, and ultra-low power MCU STM32L051/052xx of ST.',
      type: 'RHF76-052x RHF78-052x',
      src: 'https://wiki.risinghf.com/upload/img/469fefb5d61c1ce6081f9cf62b6727f6.png',
      path: '/en/01/01/04/01/',
      tag: 'module'
    },
    {
      id: 5,
      title: 'USB AT Modem',
      description: 'RH3M076B is an updated version of RisingHF RHF3M076 device, which enlarges the on board ROM and RAM to 128KB/20KB.',
      type: 'RHF3M076B',
      src: 'https://wiki.risinghf.com/upload/img/4bb19ddc7afdd6e46f836cfcc0f55229.png',
      path: '/en/01/01/05/01/',
      tag: 'module'
    },
    {
      id: 6,
      title: 'Ultra-Small Size Wireless Module',
      description: 'RHF0M003 LoRaWAN Module is a low cost, low power and ultra-small size module, embedded with Semtech’s LoRa propriety chip SX127x and ST’s ultra-low power MCU STM32L07x.',
      type: 'RHF0M003',
      src: 'https://wiki.risinghf.com/upload/img/61c7635cbe5c36cc9e71dab3dbbb5b5e.png',
      path: '/en/01/01/06/01/',
      tag: 'module'
    },
    {
      id: 7,
      title: '8 Channels LPWAN Consumer Indoor Gateway',
      description: 'RisingHF 8 Channels LoRaWAN Home gateway RHF2S024 is an easy installation indoor gateway based on LoRaWAN protocol, which is embedded with Semtech’s high performance multi-channel transceiver SX1308 and MTK platform.',
      type: 'RHF2S024',
      src: 'https://wiki.risinghf.com/upload/img/6fdf41ab809ac2047f76de4c64b48507.png',
      path: '/en/01/02/01/01/',
      tag: 'gateway'
    },
    {
      id: 8,
      title: 'RHF2S208 Outdoor Gateway',
      description: 'RHF2S208 is a new generation LoRaWAN GW developed by RisingHF which supports Full Duplex comunication with up to 16 channels (SX1301 Multi SFs). The GW integrates one 1.2GHz ARM Cortex-A53 CPU which run Linux OS.',
      type: 'RHF2S208',
      src: 'https://wiki.risinghf.com/upload/img/20ae05a4c15ac208aef9aea4a2e6de3c.png',
      path: '/en/01/02/02/01/',
      tag: 'gateway'
    },
    {
      id: 9,
      title: '8 Channels Industrial Indoor Gateway',
      description: 'RisingHF 8 Channels LoRaWAN Industrial gateway RHF2S025 is an easy installation indoor industrial gateway based on LoRaWAN protocol, which is embedded with Semtech’s high performance multi-channel transceiver SX1308 and MTK platform. Half duplex and Full duplex mode is alternative.',
      type: 'RHF2S025',
      src: 'https://wiki.risinghf.com/upload/img/e87c14f05fc90d489e423e90c46e5d2f.png',
      path: '/en/01/02/03/01/',
      tag: 'gateway'
    },
    {
      id: 10,
      title: 'Auk Bridge Relay',
      description: 'The RHF3MR01 auk bridge relay is developed and designed by Ruixing Hengfang Network (Shenzhen) Co., Ltd. to address the application pain points of unstable signal and blind areas in the LoRaWAN field application. In order to help users spend the minimum cost to supplement the signal coverage of a small number of edge nodes in the LoRaWAN network that cannot be directly covered by the gateway, and increase the reliability of the LoRaWAN network.',
      type: 'RHF3MR01',
      src: 'https://wiki.risinghf.com/upload/img/e20089f6b52306db7874844d1553d7ca.png',
      path: '/en/01/03/01/01/',
      tag: 'relay'
    },
    {
      id: 11,
      title: 'Handheld Field Tester For LoRa/LoRaWAN',
      description: 'The RHF4T003 is a signal quality test instrument based on the standard LoRaWAN wireless communication protocol. Automatically switch to the network mode, the LCD display shows the current data transmission and reception status, signal quality and current position GPS information in real time.The RSSI, SNR LinkMargin and GPS information of the current signal are saved in the built-in memory card for further analysis by the user.',
      type: 'RHF4T003',
      src: 'https://wiki.risinghf.com/upload/img/31f4cf9fcd757e50090be94c44cd04fa.png',
      path: '/en/01/04/01/01/',
      tag: 'handheld'
    },
    {
      id: 12,
      title: 'Ultrasonic Water Meter',
      description: 'RHF1S213 is a LoRaWAN wireless communication intelligent ultrasonic water meter developed by RisingHF Network (Shenzhen) Co., LTD. RHF1S213 Intelligent ultrasonic water meter based on LoRaWAN wireless communication technology provides the functions of remote periodic meter reading, periodic meter reading, intelligent detection of pipe burst, water leakage and installation direction error, and alarm reporting.',
      type: 'RHF1S213',
      src: 'https://wiki.risinghf.com/upload/img/bb683df3f1845f36e3808e791ad937b8.png',
      path: '/en/02/01/01/01/',
      tag: 'smartMeter'
    },
    {
      id: 13,
      title: 'Ultra Low Power Module With FSK/LoRa Radio',
      description: 'RHF0M063 is a low cost, ultra-low power, ultra-small size LoRaWAN module designed by Rexing Hengfang Networks (Shenzhen) Co. The target applications of this module are wireless sensor networks and other IoT devices, especially where battery power is required for low power consumption and long distance.',
      type: 'RHF0M063',
      src: 'https://wiki.risinghf.com/upload/img/5ccbc1ad0ddc590ba12aca9f818a60e0.png',
      path: '/en/01/01/07/01/',
      tag: 'module'
    },
    {
      id: 14,
      title: 'RHF2S027 gateway',
      description: 'RHF2S027 gateway',
      type: 'RHF2S027',
      src: 'https://wiki.risinghf.com/upload/img/ee7aa69fd7fbe886fcf186c7a0341392.png',
      path: '/en/01/02/04/01/',
      tag: 'gateway'
    },
    {
      id: 15,
      title: '8-Channel LoRa Gateway Module',
      description: 'RHF0M302B Mini-PCIE interface 8-channel LoRa® gateway module is a high performance small scale module with built-in Semtech LoRaWAN® gateway chip SX1302, It is dedicated in wireless sensor, automatic meter and other IOT applications.',
      type: 'RHF0M302B',
      src: 'https://wiki.risinghf.com/upload/img/4d763bc6cf46ea8c3e89fc752ad4a91e.png',
      path: '/en/01/01/08/01/',
      tag: 'module'
    },
    {
      id: 16,
      title: 'Livestock Tracker GN1S067',
      description: 'GN1S067 is designed for Livestock Tracking such as cattle, sheep and camel. The tracker integrates Bluetooth indoor positioning and GPS for outdoor geolocation with T&H sensor for ambient environment monitoring and acceleration sensor for step counting. It is powered by a 3.6V Lithium battery with typical 5 years battery life. It supports LoRaWAN®, Cat-1 and Cat-M for data communication with parameter configuartion via Bluetooth.',
      type: 'GN1S067',
      src: 'https://wiki.risinghf.com/upload/img/e4bb3fee8b3286400feae99df03459f8.png',
      path: '/en/01/05/01/01/',
      tag: 'tracker'
    },
    {
      id: 17,
      title: 'RHF2S209 LoRaWAN 8channel Outdoor Gateway',
      description: 'RHF2S209 is a new generation LoRaWAN gateway developed by RisingHF. The GW integrates 650MHz ARM Cortex-A53 CPU which run Linux OS. Semtech LoRaWAN gateway chip SX1302 is imported into the gateway. SX1302 is a new generation chip with high performance excels in reducing current consumption and handling a higher amount of LoRa traffic.',
      type: 'RHF2S209',
      src: 'https://wiki.risinghf.com/upload/img/1857e290e264a7504e6156280c135f80.png',
      path: '/en/01/02/05/01/',
      tag: 'gateway'
    }
  ]
}
