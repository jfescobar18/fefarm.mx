var Becas = Vue.component('Becas', {
    methods: {
        AddActiveLink: function () {
            var links = document.getElementsByClassName("navbar-link");
            for (let i = 0; i < links.length; i++) {
                links[i].className = links[i].className.replace(" active-link", "");
            }
            links[2].className += " active-link";
        }
    },
    template: `
        <div>
            <section-banner></section-banner>
            <div class="pdf-container">

                <div class='pdf-card'>
                    <div class='wave -one'></div>
                    <div class='wave -two'></div>
                    <div class='wave -three'></div>
                    <div class='title'>TitleTitleTitleTitleTitle</div>
                </div>
                <div class='pdf-card'>
                    <div class='wave -one'></div>
                    <div class='wave -two'></div>
                    <div class='wave -three'></div>
                    <div class='title'>TitleTitleTitleTitleTitle</div>
                </div>
                <div class='pdf-card'>
                    <div class='wave -one'></div>
                    <div class='wave -two'></div>
                    <div class='wave -three'></div>
                    <div class='title'>TitleTitleTitleTitleTitle</div>
                </div>

                <div class='pdf-card'>
                    <div class='wave -one'></div>
                    <div class='wave -two'></div>
                    <div class='wave -three'></div>
                    <div class='title'>TitleTitleTitleTitleTitle</div>
                </div>
                <div class='pdf-card'>
                    <div class='wave -one'></div>
                    <div class='wave -two'></div>
                    <div class='wave -three'></div>
                    <div class='title'>TitleTitleTitleTitleTitle</div>
                </div>
            </div>
        </div>
    `,
    mounted() {
        this.AddActiveLink();
    }
})

export default Becas;