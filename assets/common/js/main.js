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
import Solicitudes from './vue/components/Solicitudes.js'
import Solicitud from './vue/components/Solicitud.js'
import Evidencias from './vue/components/Evidencias.js'
import Requisitos from './vue/components/Requisitos.js'
import Noticias from './vue/components/Noticias.js'

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
            path: '/Solicitudes',
            name: 'Solicitudes',
            component: Solicitudes
        },
        {
            path: '/Solicitud/:Request_Id',
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
        },
        {
            path: '/Noticias',
            name: 'Noticias',
            component: Noticias
        }
    ]
});

const app = new Vue({
    el: '#app',
    router
})