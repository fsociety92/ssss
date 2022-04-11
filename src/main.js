import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import apolloProvider  from "./apollo/provider";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(apolloProvider)
app.mount('#app')
