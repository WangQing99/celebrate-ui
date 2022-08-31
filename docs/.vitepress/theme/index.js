import theme from 'vitepress/dist/client/theme-default'
import './styles/index.css'

import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

export default {
  ...theme,
  enhanceApp({ app }) {
    app.use(ElementPlus)
  },
}
