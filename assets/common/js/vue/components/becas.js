var Becas = Vue.component('Becas', {
    props: ['PDFs'],
    methods: {
        AddActiveLink: function () {
            var links = document.getElementsByClassName("navbar-link");
            for (let i = 0; i < links.length; i++) {
                links[i].className = links[i].className.replace(" active-link", "");
            }
            links[2].className += " active-link";
            this.GetPdfs();
        },
        GetPdfs: function () {
            this.$http.get('http://api.fefarm.mx/GrantPDF/GetGrantPDFs').then(
                response => {
                    console.log(response.body);
                    if (response.status === 200) {
                        this.PDFs = response.body;
                    }
                },
                err => {
                    console.log(err);
                    swal({
                        icon: "error",
                        title: "¡Ups!",
                        text: "Algo ha ido mal, intenta más tarde"
                    });
                }
            );
        }
    },
    template: `
        <div>
            <section-banner></section-banner>
            <div class="pdf-container">

                <div class='pdf-card' v-for="pdf in PDFs">
                    <div class='wave -one'></div>
                    <div class='wave -two'></div>
                    <div class='wave -three'></div>
                    <div class='title'>
                        <a v-bind:href="'http://api.fefarm.mx/' + pdf.Grant_PDF_Path" target="_target">
                            {{pdf.Grant_PDF_Name}}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `,
    mounted() {
        this.AddActiveLink();
    }
})

export default Becas;