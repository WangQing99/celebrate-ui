const { getPath } = require('./utils')

module.exports = {
  [getPath('/guide/')]: getGuideSidebar(),
  [getPath('/components/')]: getComponentsSidebar(),
  [getPath('/api/')]: 'auto',
}

function getComponentsSidebar() {
  return [
    {
      text: 'Basic 基础组件',
      children: [
        {
          text: 'Border 边框',
          link: '/components/basic/border',
        },
        {
          text: 'Button 按钮',
          link: '/components/basic/button',
        },
        {
          text: 'Container 布局容器',
          link: '/components/basic/container',
        },
        {
          text: 'Icon 图标',
          link: '/components/basic/icon',
        },
        {
          text: 'Layout 布局',
          link: '/components/basic/layout',
        },
        {
          text: 'Link 链接',
          link: '/components/basic/link',
        },
        {
          text: 'Scrollbar 滚动条',
          link: '/components/basic/scrollbar',
        },
        {
          text: 'Space 间距',
          link: '/components/basic/space',
        },
      ],
    },
    {
      text: 'Form 表单组件',
      children: [
        {
          text: 'Cascader 级联选择器',
          link: '/components/form/cascader',
        },
        {
          text: 'Checkbox 多选框',
          link: '/components/form/checkbox',
        },
        {
          text: 'ColorPicker 颜色选择器',
          link: '/components/form/colorPicker',
        },
        {
          text: 'DatePicker 日期选择器',
          link: '/components/form/datePicker',
        },
        {
          text: 'DateTimePicker 日期时间选择器',
          link: '/components/form/dateTimePicker',
        },
        {
          text: 'Form 表单',
          link: '/components/form/form',
        },
        {
          text: 'Input 输入框',
          link: '/components/form/input',
        },
        {
          text: 'Input Number 数字输入框',
          link: '/components/form/inputNumber',
        },
        {
          text: 'Radio 单选框',
          link: '/components/form/radio',
        },
        {
          text: 'Rate 评分',
          link: '/components/form/rate',
        },
        {
          text: 'Select 选择器',
          link: '/components/form/select',
        },
        {
          text: 'Select V2 虚拟列表选择器',
          link: '/components/form/selectV2',
        },
        {
          text: 'Slider 滑块',
          link: '/components/form/slider',
        },
        {
          text: 'Switch 开关',
          link: '/components/form/switch',
        },
        {
          text: 'TimePicker 时间选择器',
          link: '/components/form/timePicker',
        },
        {
          text: 'TimeSelect 时间选择',
          link: '/components/form/timeSelect',
        },
        {
          text: 'Transfer 穿梭框',
          link: '/components/form/transfer',
        },
        {
          text: 'Upload 上传',
          link: '/components/form/upload',
        },
      ],
    },
    {
      text: 'Data 数据展示',
      children: [
        {
          text: 'Avatar 头像',
          link: '/components/data/avatar',
        },
        {
          text: 'Badge 徽章',
          link: '/components/data/badge',
        },
        {
          text: 'Calendar 日历',
          link: '/components/data/calendar',
        },
        {
          text: 'Card 卡片',
          link: '/components/data/card',
        },
        {
          text: 'Collapse 折叠面板',
          link: '/components/data/collapse',
        },
        {
          text: 'Descriptions 描述列表',
          link: '/components/data/descriptions',
        },
        {
          text: 'Infinite Scroll 无限滚动',
          link: '/components/data/infiniteScroll',
        },
        {
          text: 'Pagination 分页',
          link: '/components/data/pagination',
        },
        {
          text: 'Progress 进度条',
          link: '/components/data/progress',
        },
        {
          text: 'Result 结果',
          link: '/components/data/result',
        },
        {
          text: 'Skeleton 骨架屏',
          link: '/components/data/skeleton',
        },
        {
          text: 'Tag 标签',
          link: '/components/data/tag',
        },
        {
          text: 'Tree 树形控件',
          link: '/components/data/tree',
        },
        {
          text: 'Tree V2 虚拟化树形控件',
          link: '/components/data/treeV2',
        },
      ],
    },
    {
      text: 'Navigation 导航',
      children: [
        {
          text: 'Affix 固钉',
          link: '/components/navigation/affix',
        },
        {
          text: 'Breadcrumb 面包屑',
          link: '/components/navigation/breadcrumb',
        },
        {
          text: 'Dropdown 下拉菜单',
          link: '/components/navigation/dropdown',
        },
        {
          text: 'Menu 菜单',
          link: '/components/navigation/menu',
        },
        {
          text: 'Page Header 页头',
          link: '/components/navigation/pageHeader',
        },
        {
          text: 'Steps 步骤条',
          link: '/components/navigation/steps',
        },
        {
          text: 'Tabs 标签页',
          link: '/components/navigation/tabs',
        },
      ],
    },
    {
      text: 'Feedback 反馈组件',
      children: [
        {
          text: 'Alert 提示',
          link: '/components/feedback/alert',
        },
        {
          text: 'Dialog 对话框',
          link: '/components/feedback/dialog',
        },
        {
          text: 'Drawer 抽屉',
          link: '/components/feedback/drawer',
        },
        {
          text: 'Loading 加载',
          link: '/components/feedback/loading',
        },
        {
          text: 'Message 消息提示',
          link: '/components/feedback/message',
        },
        {
          text: 'MessageBox 弹框',
          link: '/components/feedback/messageBox',
        },
        {
          text: 'Notification 通知',
          link: '/components/feedback/notification',
        },
        {
          text: 'Popconfirm 气泡确认框',
          link: '/components/feedback/popconfirm',
        },
        {
          text: 'Popover 气泡卡片',
          link: '/components/feedback/popover',
        },
        {
          text: 'Tooltip 文字提示',
          link: '/components/feedback/tooltip',
        },
      ],
    },
  ]
}

function getGuideSidebar() {
  return [
    {
      text: '基础',
      children: [
        {
          text: '安装',
          link: '/guide/install',
        },
        {
          text: '快速开始',
          link: '/guide/start',
        },
      ],
    },
  ]
}
