var navibar = Vue.component('navibar', {
    props: ['buttonClassName', 'ulClassName'],
    methods: {
        initUI: function () {
            var links = document.getElementsByClassName("navibar-link");
            for (let i = 0; i < links.length; i++) {
                links[i].addEventListener("click", function () {
                    for (let i = 0; i < links.length; i++) {
                        links[i].className = links[i].className.replace(" active-link", "");
                    }
                    this.className += " active-link";
                });
            }

            let dropdownToggle = document.getElementsByClassName('dropdown-toggle');
            for (let i = 0; i < dropdownToggle.length; i++) {
                dropdownToggle[i].addEventListener('mouseover', this.showDropdown);
            }

            let dropdownMenu = document.getElementsByClassName('dropdown-menu');
            for (let i = 0; i < dropdownMenu.length; i++) {
                dropdownMenu[i].addEventListener('mouseleave', this.changeDefOut);
            }
        },
        showDropdown: function (e) {
            if (e.target.parentElement.querySelector('ul') !== null) {
                e.target.parentElement.querySelector('ul').classList.toggle('show');
            }
        },
        changeDefOut: function (e) {
            e.target.className = e.target.className.replace(' show', '');
        },
        ShowMenu: function () {
            if (this.buttonClassName === undefined) {
                this.buttonClassName = 'displayed-nav';
                this.ulClassName = 'navibar-expanded';
            }
            else if (this.buttonClassName.length === 0) {
                this.buttonClassName = 'displayed-nav';
                this.ulClassName = 'navibar-expanded';
            }
            else {
                this.buttonClassName = '';
                this.ulClassName = '';
            }
        }
    },
    template: `
        <div>
            <div class="flex pt-6 pb-6 navibar">
                <div class="w-1/4 navibar-brand -mt-6">
                    <img src="assets/common/img/logo-navibar.png" alt="Main Logo">
                </div>
                <div class="w-3/4 navibar-nav">
                    <div class="navibar-toggle float-right -mt-4 pr-6">
                        <button v-bind:class="buttonClassName" v-on:click="ShowMenu"></button>
                    </div>
                    <ul v-bind:class="'flex float-right pr-6 ' + ulClassName">
                        <li class="navibar-link">
                            <router-link to="/">HOME<i class="navibar-separator"></i></router-link>
                        </li>
                        <li class="navibar-link">
                            <router-link to="/Mision">FEFARM<i class="navibar-separator"></i></router-link>
                        </li>
                        <li class="navibar-link dropdown">
                            <router-link class="dropdown-toggle" to="">BECAS&nbsp;<i class="fas fa-caret-down"></i><i class="navibar-separator"></i></router-link>
                            <ul class="dropdown-menu">
                                <li><router-link to="/Reglamento">Reglamento</router-link></li>
                                <li><router-link to="/Solicitudes">Solicitud y Documentacion</router-link></li>
                            </ul>
                        </li>
                        <li class="navibar-link dropdown">
                            <router-link class="dropdown-toggle" to="/">CONVOCATORIAS&nbsp;<i class="fas fa-caret-down"></i><i class="navibar-separator"></i></router-link>
                            <ul class="dropdown-menu">
                                <li><router-link to="/Evidencias">Evidencias</router-link></li>
                                <li><router-link to="/Requisitos">Requisitos</router-link></li>
                            </ul>
                        </li>
                        <li class="navibar-link">
                            <router-link to="/">NOTICIAS<i class="navibar-separator"></i></router-link>
                        </li>
                        <li class="navibar-link">
                            <router-link to="/">NUMERALIA</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `,
    mounted() {
        this.initUI();
    }
})

export default navibar