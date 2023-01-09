import './styles/index.css'

import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

export default {
  enhanceApp({ app }) {
    app.use(ElementPlus)
  },
}
