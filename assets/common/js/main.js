import navibar from './vue/components/navibar.js';
import mainBanner from './vue/components/main-banner.js';
import sectionBanner from './vue/components/section-banner.js';
import footerContact from './vue/components/footer-contact.js';
import footerMedia from './vue/components/footer-media.js';
import aboutusCards from './vue/components/aboutus-cards.js'
import Mision from './vue/components/mision.js'
import Vision from './vue/components/vision.js'
import Organigrama from './vue/components/organigrama.js'
import Reglamento from './vue/components/Reglamento.js'
import Solicitud from './vue/components/Solicitud.js'
import Evidencias from './vue/components/Evidencias.js'
import Requisitos from './vue/components/Requisitos.js'

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
            path: '/Reglamento',
            name: 'Reglamento',
            component: Reglamento
        },
        {
            path: '/Solicitud',
            name: 'Solicitud',
            component: Solicitud
        },
        {
            path: '/Evidencias',
            name: 'Evidencias',
            component: Evidencias
        },
        {
            path: '/Requisitos',
            name: 'Requisitos',
            component: Requisitos
        }
    ]
});

const app = new Vue({
    el: '#app',
    router
})