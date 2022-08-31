const { getPath } = require('./utils')

module.exports = [
  { text: '指南', link: '/guide/install',activeMatch: getPath('^/guide/') },
  { text: '组件', link: '/components/basic/border', activeMatch: getPath('^/components/') },
  { text: 'API 参考', link: '/api/' },
]
