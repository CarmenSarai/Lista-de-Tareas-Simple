require('./bootstrap');

import Vue from 'vue'
import App from './vue/app.vue'


import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faTrashCan,faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faPlus, faTrashCan, faSquarePlus)

Vue.component('font-awesome-icon', FontAwesomeIcon)


const app = new Vue({
    el: '#app',
    components: { App }
});



