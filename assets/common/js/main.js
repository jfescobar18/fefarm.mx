import navbar from './vue/components/navbar.js';
import mainBanner from './vue/components/main-banner.js';
import sectionBanner from './vue/components/section-banner.js';
import footerContact from './vue/components/footer-contact.js';
import footerMedia from './vue/components/footer-media.js';
import aboutusCards from './vue/components/aboutus-cards.js'
import Mision from './vue/components/mision.js'
import Vision from './vue/components/vision.js'
import Organigrama from './vue/components/organigrama.js'
import Becas from './vue/components/becas.js'

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'aboutus-cards',
            component: aboutusCards
        },
        {
            path: '/Mision',
            name: 'Mision',
            component: Mision
        },
        {
            path: '/Vision',
            name: 'Vision',
            component: Vision
        },
        {
            path: '/Organigrama',
            name: 'Organigrama',
            component: Organigrama
        },
        {
            path: '/Becas',
            name: 'Becas',
            component: Becas
        }
    ]
});

const app = new Vue({
    el: '#app',
    router
})