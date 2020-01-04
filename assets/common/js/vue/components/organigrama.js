var Organigrama = Vue.component('Vision', {
    template: `
        <div>
            <section-banner></section-banner>
            <div class="aboutus-tabs">
                <div class="tab-menu">
                    <router-link class="" to="mision"><i class="navbar-separator"></i>MISIÓN<i class="navbar-separator"></i></router-link>
                    <router-link class="" to="vision">VISIÓN<i class="navbar-separator"></i></router-link>
                    <router-link class="active-link" to="organigrama">ORGANIGRAMA<i class="navbar-separator"></i></router-link>
                </div>
                <div class="aboutus-info">
                    <h1>ORGANIGRAMA</h1>
                    <p>
                    
                    </p>
                </div>
            </div>
        </div>
    `
})

export default Organigrama;