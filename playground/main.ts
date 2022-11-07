import { createApp } from 'vue'
import CelebrateUI from '../packages/celebrate-ui/index'
import '../packages/theme-chalk/src/index.scss'
import App from './App.vue'
import { setupRouter } from './router'
;(() => {
  const app = createApp(App)

  app.use(CelebrateUI)

  setupRouter(app)

  app.mount('#app')
})()
