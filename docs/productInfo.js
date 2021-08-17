/*
* id: 一个序号方便找到对应的中英文产品信息
* title: 产品在首页的标题
* description: 产品的描述
* type: 产品的型号
* src: 产品的图片链接
* path: 产品简介的跳转链接
* tag: 产品的标签，可选值有 'module','node','gateway','cavityFilter'
* */
module.exports = {
  zh: [
    {
      id: 1,
      title: '多功能超低功耗超小尺寸远距离通信模块',
      description: 'RHF0M0E5是瑞兴恒方网络(深圳)有限公司设计的低成本，超低功耗，超小尺寸的LoRaWAN 模组和节点',
      type: 'RHF0M0E5',
      src: 'https://risinghf-official-website.oss-cn-shenzhen.aliyuncs.com/static/image/product/In_tkmuVJEhvSABtniqE7Q==.png',
      path: '/zh/02/01/01/01/',
      tag: 'module'
    },
    {
      id: 2,
      title: '雀桥中继',
      description: 'RHF3MR01是瑞兴恒方网络(深圳)有限公司设计的低成本，超低功耗的LoRaWAN设备，内置12AH电池，使用寿命大于3年。\\n支持全部标准LoRaWAN区域参数、支持设备状况管理、具备远程升级功能（FUOTA）。',
      type: 'RHF3MR01',
      src: 'https://risinghf-official-website.oss-cn-shenzhen.aliyuncs.com/static/image/product/QdnWaI9hRHFeL5ulS3iNXQ==.png',
      path: '/zh/02/01/01/01/',
      tag: 'node'
    },
    {
      id: 3,
      title: 'RHF2S208 型室外网关',
      description: 'RHF2S208是瑞兴恒方精心打造的具备支持全双工模式的电信级的LoRaWAN网关系列。内嵌Linux操作系统， 主控芯片为性能强大的ARM Cortex-A53平台，主频最高可达到1.2GHz。',
      type: 'RHF2S208',
      src: 'https://risinghf-official-website.oss-cn-shenzhen.aliyuncs.com/static/image/product/bwm3h-pLGljNDI-Hhg0oAw==.png',
      path: '/zh/02/01/01/01/',
      tag: 'gateway'
    }
  ],
  en: [
    {
      id: 1,
      title: 'Multi-function ultra Low Power Module With FSK/LoRa Radio',
      description: 'RHF0M0E5 is a low-cost, ultra-low power, ultra-small LoRaWAN module designed by Ruixing Hengfang Network (Shenzhen) Co., Ltd. ',
      type: 'RHF0M0E5',
      src: 'https://risinghf-official-website.oss-cn-shenzhen.aliyuncs.com/static/image/product/In_tkmuVJEhvSABtniqE7Q==.png',
      path: '/en/02/01/01/01/',
      tag: 'module'
    },
    {
      id: 2,
      title: 'Auk Bridge Relay',
      description: 'RHF3MR01 is a low-cost, ultra-low-power LoRaWAN device designed by Ruixing Hengfang Network (Shenzhen) Co., Ltd., with a built-in 12AH battery and a service life of more than 3 years.\\nSupport all standard LoRaWAN regional parameters, support equipment status management, and have remote upgrade function (FUOTA).',
      type: 'RHF3MR01',
      src: 'https://risinghf-official-website.oss-cn-shenzhen.aliyuncs.com/static/image/product/QdnWaI9hRHFeL5ulS3iNXQ==.png',
      path: '/zh/02/01/01/01/',
      tag: 'node'
    },
    {
      id: 3,
      title: 'RHF2S208 Outdoor Gateway',
      description: 'RHF2S208 developed by RisingHF  is a new generation GW with LoRa/LoRaWAN compliant which supports Full Duplex comunication with up to 16 channels (with Multi SFs). The GW integrates one 1.2GHz ARM Cortex-A53 CPU which run Linux OS. And also 1x or 2x SX1301 to provide LoRa transmit and receive functionality. SX1301 is a high performance LoRa processor developed by Semtech. The 2 x SX1301 full duplex hardware version will extend the network capacity to more than 2x compare to the traditional 8 channels half duplex one.',
      type: 'RHF2S208',
      src: 'https://risinghf-official-website.oss-cn-shenzhen.aliyuncs.com/static/image/product/bwm3h-pLGljNDI-Hhg0oAw==.png',
      path: '/zh/02/01/01/01/',
      tag: 'gateway'
    }
  ]
}
