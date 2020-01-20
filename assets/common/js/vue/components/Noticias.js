var Noticias = Vue.component('Noticias', {
    props: {
        PDFs: {
            default: {}
        }
    },
    methods: {
        loadPDFs: function () {
            showLoader();
            this.$http.get(APIUrl() + 'NewsPDF/GetPDFs', {
                headers: {
                    APIKey: window.config.APIKey
                }
            }).then(
                response => {
                    this.PDFs = response.body.map(function (x) {
                        x.New_PDF_Path = APIUrl() + x.New_PDF_Path;
                        return x
                    });
                    hideLoader();
                },
                err => {
                    console.log(err);
                    error_swal('Error...', 'Error interno estamos trabajando para solucionarlo');
                    hideLoader();
                }
            );
        },
    },
    template: `
        <div>
            <section-banner></section-banner>
            
            <h1 class="content-title">NOTICIAS</h1>

            <div class="pdf-container">
                <div class='pdf-card' v-for="pdf in PDFs">
                    <div class='wave -one'></div>
                    <div class='wave -two'></div>
                    <div class='wave -three'></div>
                    <div class='title'>
                        <a v-bind:href="pdf.New_PDF_Path" target="_target">
                            {{pdf.New_PDF_Name}}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `,
    mounted() {
        this.loadPDFs();
    }
})

export default Noticias;