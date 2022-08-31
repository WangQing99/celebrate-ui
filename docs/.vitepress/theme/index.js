import theme from 'vitepress/dist/client/theme-default'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import { registerComponents } from './register-components'
import './styles/index.css'

export default {
  ...theme,
  enhanceApp({ app }) {
    registerComponents(app)
  },
}
