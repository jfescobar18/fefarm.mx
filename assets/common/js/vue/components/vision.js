var Vision = Vue.component('Vision', {
    methods: {
        AddActiveLink: function () {
            var links = document.getElementsByClassName("navbar-link");
            for (let i = 0; i < links.length; i++) {
                links[i].className = links[i].className.replace(" active-link", "");
            }
            links[1].className += " active-link";
        }
    },
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
                        Organización dinámica e incluyente, integrada por farmacéuticos que se identifican con la misión y valores institucionales, abierta a coordinar esfuerzos en materia farmacéutica con otras organizaciones públicas y privadas de ámbito nacional como internacional.
                    </p>
                </div>
            </div>
        </div>
    `,
    mounted() {
        this.AddActiveLink();
    }
})

export default Vision;