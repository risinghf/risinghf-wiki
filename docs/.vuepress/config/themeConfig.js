const nav = require('./themeConfig/nav.js');
const sidebar = require('./themeConfig/sidebar.js');
const htmlModules = require('./themeConfig/htmlModules.js');

// 主题配置
module.exports = {
  sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
  logo: '/img/favicon.ico', // 导航栏logo
  repo: 'risinghf/risinghf-wiki', // 导航栏右侧生成Github链接
  searchMaxSuggestions: 10, // 搜索结果显示最大数
  lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
  docsDir: 'docs', // 编辑的文件夹
  editLinks: true, // 启用编辑
  editLinkText: '编辑',
  locales: {
    '/zh/': {
      selectText: '选择语言',
      label: '简体中文',
      editLinkText: '在 Github 上编辑此页',
      nav: nav.zh
    },
    '/en/': {
      selectText: 'Languages',
      label: 'English',
      editLinkText: 'Edit this page on Github',
      nav: nav.en
    }
  },

  //*** Vdoing配置 ***//
  category: false,
  tag: false,
  archive: false,
  categoryText: '',
  titleBadge: false,// 文章标题前的图标
  updateBar: {
    showToArticle: false,
    moreArticle: ''
  },
  rightMenuBar: true, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
  sidebarOpen: true, // 初始状态是否打开侧边栏，默认true
  pageButton: false, // 是否显示快捷翻页按钮，默认true
  sidebar: 'structuring',
  // sidebar,

  social: {
    // 页脚栏社交图标
    // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
    icons: [
      {
        iconClass: 'icon-youjian',
        title: 'Email',
        link: 'mailto:support@risinghf.com',
      },
      {
        iconClass: 'icon-github',
        title: 'GitHub',
        link: 'https://github.com/risinghf',
      }
    ]
  },
  footer: {
    // 页脚信息
    createYear: 2018,
    copyrightInfo:
      'RisingHF All Rights Reserved 粤ICP备15095124号', // 版权信息
  },
  htmlModules
}
