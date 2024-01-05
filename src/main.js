import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'

import '@tabler/core/dist/css/tabler.css'
import '@tabler/core/dist/js/tabler.js'

const app = createApp(App)


app.config.errorHandler = (err, vm, info) => {
    console.log('errorHandler', err, vm, info)
}

app.config.performance = true

console.log('app.config', app.config)

app.mount('#app')
