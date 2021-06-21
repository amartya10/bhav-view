import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store  from './store/index'


const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')

app.config.globalProperties.$filters = {
    formatValue(value,type) {
        if (type !== undefined){
            if (type === "number" ){
                return  Number(value).toLocaleString('en-IN')

            }
            else if (type === "price" ) {
                return Number(value).toLocaleString('en-IN', { style: 'currency', currency: 'INR' })
            }
            
        }
        return value
    }
  }