import { createApp } from 'vue'
import CelebrateUI from '../dist/celebrate-ui'
import 'element-plus/dist/index.css'
;(async () => {
  const apps = import.meta.glob('./src/*.vue')
  const name = location.pathname.replace(/^\//, '') || 'App'
  const file = apps[`./src/${name}.vue`]
  if (!file) {
    location.pathname = 'App'
    return
  }
  const App = ((await file()) as any).default
  const app = createApp(App)
  app.use(CelebrateUI)
  app.mount('#app')
})()
