const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: require.resolve('../../theme'),
  title: "RisingHF Docs",
  description: '瑞兴恒方产品文档',
  // base: '/',
  markdown: {
    lineNumbers: true, // 代码行号
  },
  locales: {
    '/zh/': {
      lang: 'zh-CN',
      title: 'RisingHF Docs',
      description: '瑞兴恒方产品文档'
    },
    '/en/': {
      lang: 'en-US',
      title: 'RisingHF Docs',
      description: 'RisingHF Docs'
    }
  },

  head,
  plugins,
  themeConfig,
}
