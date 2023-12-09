
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import router from './router'
import '@/styles/common.scss'
// import { getCategoryAPI } from '@/api/Test'
const app = createApp(App)

app.use(createPinia())
app.use(router)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// let categoryList: object = null
//  getCategoryAPI().then(res => {
//   categoryList = res.data
//   console.log(categoryList);
// })

app.mount('#app')
