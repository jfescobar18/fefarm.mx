var Solicitud = Vue.component('Solicitud', {
    props: {
        RequestTemplates: {
            default: []
        }
    },
    methods: {
        loadRequests: function () {
            showLoader();
            this.$http.get(APIUrl() + 'Requests/GetOpenRequestTemplates', {
                headers: {
                    APIKey: config.APIKey
                }
            }).then(
                response => {
                    this.RequestTemplates = response.body.map(function (x) {
                        x.Display_Request_Start_Date = formatDate(new Date(x.Request_Start_Date));
                        x.Display_Request_Finish_Date = formatDate(new Date(x.Request_Finish_Date));
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
        loadRequest: function (Request_Id) {
            this.$router.push(`Solicitud/${Request_Id}`)
        }
    },
    template: `
        <div>
            <section-banner></section-banner>
            
            <h1 class="content-title">SOLICITUD DE BECA Y ESTUDIO SOCIOECONÓMICO</h1>

            <div class="pdf-container">
                <div class="container">
                    <div v-for="request in RequestTemplates" v-on:click="loadRequest(request.Request_Id)" class="col-md-3 request-card">
                        <div class="col-md-12 thumbnail">
                            <b>{{ request.Request_Name }}</b>
                            <br />
                            {{ request.Display_Request_Start_Date }} - {{ request.Display_Request_Finish_Date }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    mounted() {
        this.loadRequests();
    }
})

export default Solicitud;