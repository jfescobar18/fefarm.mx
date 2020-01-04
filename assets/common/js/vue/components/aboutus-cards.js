var aboutusCards = Vue.component('aboutus-cards', {
    props: {
        target: {
            type: String,
            default: 'target-orange'
        },
        gear: {
            type: String,
            default: 'gear-orange'
        },
        diagram: {
            type: String,
            default: 'diagram-orange'
        }
    },
    methods: {
        CardOn: function (type) {
            switch (type) {
                case 'target':
                    this.target = 'target-blue';
                    break;
                case 'gear':
                    this.gear = 'gear-blue';
                    break;
                case 'diagram':
                    this.diagram = 'diagram-blue';
                    break;
            }

        },
        CardOut: function () {
            this.target = 'target-orange';
            this.gear = 'gear-orange';
            this.diagram = 'diagram-orange';
        }
    },
    template: `
        <div>
            <main-banner></main-banner>
            <div class="aboutus">
                <div v-on:mouseover="CardOn('target')" v-on:mouseleave="CardOut" class="aboutus-card rounded-lg w-1/6">
                    <div>
                        <router-link to="/">
                            <img v-bind:src="'./assets/common/img/' + target + '.png'" alt="Target Orange">
                            <h3>OBJETIVO</h3>
                        </router-link>
                    </div>
                </div>
                <div v-on:mouseover="CardOn('gear')" v-on:mouseleave="CardOut" class="aboutus-card rounded-lg w-1/6">
                    <div>
                        <router-link to="Mision">
                            <img v-bind:src="'./assets/common/img/' + gear + '.png'" alt="Gear Orange">
                            <h3>MISIÓN & VISIÓN</h3>
                        </router-link>
                    </div>
                </div>
                <div v-on:mouseover="CardOn('diagram')" v-on:mouseleave="CardOut" class="aboutus-card rounded-lg w-1/6">
                    <div>
                        <router-link to="/aboutusTabs">
                            <img v-bind:src="'./assets/common/img/' + diagram + '.png'" alt="Diagram Orange">
                            <h3>ORGANIGRAMA</h3>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    `
})

export default aboutusCards