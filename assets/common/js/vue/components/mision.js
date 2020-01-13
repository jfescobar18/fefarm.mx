var Mision = Vue.component('Mision', {
    template: `
        <div>
            <section-banner></section-banner>
            <div class="aboutus-tabs">
                <div class="tab-menu">
                    <router-link class="active-link" to="mision"><i class="navbar-separator"></i>MISIÓN<i class="navbar-separator"></i></router-link>
                    <router-link class="" to="vision">VISIÓN<i class="navbar-separator"></i></router-link>
                    <router-link class="" to="organigrama">ORGANIGRAMA<i class="navbar-separator"></i></router-link>
                </div>
                <div class="aboutus-info">
                    <h1>MISIÓN</h1>
                    <p>
                        La Misión de la FEFARM es otorgar becas para estudio o estancias de corta duración en el área de farmacia y en áreas afines para lo cual establecerá los convenios o acuerdos que sean necesarios con instituciones públicas o privadas, fundaciones nacionales o extranjeras y ofrecerá para un número de éstas anualmente, mediante convocatoria pública.
                        <br />
                        De manera particular, buscará promover la atención de la sociedad mexicana a fin de incentivar en ella la Farmacia Hospitalaria y Farmacia Comunitaria, otorgando para tal efecto, apoyo ya sea económico o distintivo a los que se destaquen por sus trabajos en estos rubros.
                    </p>
                </div>
            </div>
        </div>
    `
})

export default Mision;