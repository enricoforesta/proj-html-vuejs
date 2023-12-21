import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//free
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
//regular
import { faComment } from '@fortawesome/free-regular-svg-icons'

//brands
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
library.add(faPlay, faArrowLeft, faArrowRight, faArrowUp, faInstagram, faLinkedinIn, faFacebookF, faXTwitter, faComment)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
