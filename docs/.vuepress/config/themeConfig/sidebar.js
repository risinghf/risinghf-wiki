// ！！！注：此文件没有使用到，仅用于测试和侧边栏数据格式的参考。

// 侧边栏
module.exports = {
  zh: [
    {
      title: 'IoTSquare 使用手册',
      collapsable: true,
      children: [
        '/02.manual/10.iotsquare/',
        '/02.manual/15.ladtp/',
        '/02.manual/25.relay/',
        '/02.manual/20.pico-net/',
      ],
    },
    {
      title: 'IoTSquare API 文档',
      collapsable: true,
      children: [
        '/01.api/10.iotsquare/',
        '/01.api/15.openapi/'],
    },
  ],
  en: [
    {
      title: 'IoTSquare User Manual',
      collapsable: true,
      children: [
        '/en/02.manual/10.iotsquare/',
        '/en/02.manual/15.ladtp/',
        '/en/02.manual/25.relay/',
        '/en/02.manual/20.pico-net/',
      ],
    },
    {
      title: 'IoTSquare API Docs',
      collapsable: true,
      children: [
        '/en/01.api/10.iotsquare/',
        '/en/01.api/15.openapi/'],
    },
  ],
}
