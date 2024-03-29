var Vision = Vue.component('Vision', {
    template: `
        <div>
            <section-banner></section-banner>
            <div class="aboutus-tabs">
                <div class="tab-menu">
                    <router-link class="" to="mision"><i class="navbar-separator"></i>MISIÓN<i class="navbar-separator"></i></router-link>
                    <router-link class="active-link" to="vision">VISIÓN<i class="navbar-separator"></i></router-link>
                    <router-link class="" to="organigrama">ORGANIGRAMA<i class="navbar-separator"></i></router-link>
                </div>
                <div class="aboutus-info">
                    <h1>VISIÓN</h1>
                    <p>
                        Una organización dinámica e incluyente, de ámbito de actuación tanto nacional como internacional, integrada por farmacéuticos que se identifican con la misión y valores institucionales, abierta a coordinar esfuerzos en materia farmacéutica con otras organizaciones públicas y privadas.    
                    </p>
                </div>
            </div>
        </div>
    `
})

export default Vision;