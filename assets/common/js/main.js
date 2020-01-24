import navibar from './vue/components/navibar.js?n=1.2';
import mainBanner from './vue/components/main-banner.js?n=1.2';
import sectionBanner from './vue/components/section-banner.js?n=1.2';
import footerContact from './vue/components/footer-contact.js?n=1.2';
import footerMedia from './vue/components/footer-media.js?n=1.2';
import aboutusCards from './vue/components/aboutus-cards.js?n=1.2'
import Mision from './vue/components/mision.js?n=1.2'
import Vision from './vue/components/vision.js?n=1.2'
import Organigrama from './vue/components/organigrama.js?n=1.2'
import Reglamento from './vue/components/Reglamento.js?n=1.2'
import Solicitudes from './vue/components/Solicitudes.js?n=1.2'
import Solicitud from './vue/components/Solicitud.js?n=1.2'
import Evidencias from './vue/components/Evidencias.js?n=1.2'
import Requisitos from './vue/components/Requisitos.js?n=1.2'
import Noticias from './vue/components/Noticias.js?n=1.2'

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