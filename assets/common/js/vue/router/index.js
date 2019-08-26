import aboutusCards from '../components/aboutus-cards.js'
import Mision from '../components/mision.js'
import Vision from '../components/vision.js'
import Organigrama from '../components/organigrama.js'

const router = new VueRouter({
    mode: 'history',
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
        }
    ]
})

export default router;