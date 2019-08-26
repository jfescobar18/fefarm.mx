var Mision = Vue.component('Mision', {
    methods: {
        AddActiveLink: function () {
            var link = document.getElementsByClassName("navbar-link")[1];
            link.className += " active-link";
        }
    },
    template: `
        <div class="aboutus-tabs">
            <div class="tab-menu">
                <router-link class="active-link" to="mision"><i class="navbar-separator"></i>MISIÓN<i class="navbar-separator"></i></router-link>
                <router-link class="" to="vision">VISIÓN<i class="navbar-separator"></i></router-link>
                <router-link class="" to="organigrama">ORGANIGRAMA<i class="navbar-separator"></i></router-link>
            </div>
            <div class="aboutus-info">
                <h1>MISIÓN</h1>
                <p>
                    Promover la atención de los grupos más vulnerables de la sociedad mexicana a fin de incentivar en el País la Farmacia Comunitaria, otorgando para tal efecto apoyos e incentivos para el desarrollo de la misma.
                </p>
            </div>
        </div>
    `,
    mounted() {
        this.AddActiveLink();
    }
})

export default Mision;