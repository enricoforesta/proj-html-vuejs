import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
library.add(faPlay, faArrowLeft, faArrowRight)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
