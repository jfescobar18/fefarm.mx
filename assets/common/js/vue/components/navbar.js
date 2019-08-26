var navbar = Vue.component('navbar', {
    props: ['buttonClassName', 'ulClassName'],
    methods: {
        AddActiveClass: function () {
            var links = document.getElementsByClassName("navbar-link");

            for (var i = 0; i < links.length; i++) {
                links[i].addEventListener("click", function () {
                    var current = document.getElementsByClassName("active-link");
                    current[0].className = current[0].className.replace(" active-link", "");
                    this.className += " active-link";
                });
            }
        },
        ShowMenu: function () {
            if (this.buttonClassName === undefined) {
                this.buttonClassName = 'displayed-nav';
                this.ulClassName = 'navbar-expanded';
            }
            else if (this.buttonClassName.length === 0) {
                this.buttonClassName = 'displayed-nav';
                this.ulClassName = 'navbar-expanded';
            }
            else {
                this.buttonClassName = '';
                this.ulClassName = '';
            }
        }
    },
    template: `
        <div class="flex pt-6 pb-6 navbar">
            <div class="w-1/4 navbar-brand -mt-6">
                <img src="assets/common/img/logo-navbar.png" alt="Main Logo">
            </div>
            <div class="w-3/4 navbar-nav">
                <div class="navbar-toggle float-right -mt-4 pr-6">
                    <button v-bind:class="buttonClassName" v-on:click="ShowMenu"></button>
                </div>
                <ul v-bind:class="'flex float-right pr-6 ' + ulClassName">
                    <li class="">
                        <router-link class="navbar-link" to="/">HOME<i class="navbar-separator"></i></router-link>
                    </li>
                    <li class="navbar-link">
                        <router-link class="" to="Mision">FEFARM<i class="navbar-separator"></i></router-link>
                    </li>
                    <li class="">
                        <router-link class="navbar-link" to="/">BECAS<i class="navbar-separator"></i></router-link>
                    </li>
                    <li class="">
                        <router-link class="navbar-link" to="/">NOTICIAS<i class="navbar-separator"></i></router-link>
                    </li>
                    <li class="">
                        <router-link class="navbar-link" to="/">TRANSPARENCIA<i class="navbar-separator"></i></router-link>
                    </li>
                    <li class="">
                        <router-link class="navbar-link" to="/">CONTACTO<i class="navbar-separator"></i></router-link>
                    </li>
                    <li class="">
                        <router-link class="navbar-link" to="/">OTRA</router-link>
                    </li>
                </ul>
            </div>
        </div>
    `,
    mounted() {
        this.AddActiveClass();
    }
})

export default navbar