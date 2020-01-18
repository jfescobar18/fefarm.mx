var Solicitud = Vue.component('Solicitud', {
    props: {
        RequestTemplate: {
            default: {}
        },
        ApplicationFormData: {
            default: new FormData()
        },
        Profile_Image_Url: {
            default: 'assets/common/img/avatar.png'
        },
        ProfileImage: {
            default: null
        },
        TutorSignature: {
            default: null
        },
        PersonSignature: {
            default: null
        },
        BirthCertificate: {
            default: null
        },
        CURP: {
            default: null
        },
        OfficialId: {
            default: null
        },
        ResidencyProof: {
            default: null
        },
        Kardex: {
            default: null
        },
        IncomeProof: {
            default: null
        },
        ReregistrationProof: {
            default: null
        },
        ComplementaryDocumentation: {
            default: null
        },
        SmallPhotography: {
            default: null
        },
        BankAccount: {
            default: null
        }
    },
    methods: {
        initUI: function () {
            animInput();
            this.loadRequest();
        },
        loadRequest: function () {
            showLoader();
            this.$http.get(APIUrl() + 'Requests/GetRequestTemplate/' + this.$route.params.Request_Id, {
                headers: {
                    APIKey: config.APIKey
                }
            }).then(
                response => {
                    this.RequestTemplate = response.body;
                    this.RequestTemplate.Request_JSON_Body = JSON.parse(this.RequestTemplate.Request_JSON_Body);
                    hideLoader();
                },
                err => {
                    console.log(err);
                    error_swal('Error...', 'Error interno estamos trabajando para solucionarlo');
                    hideLoader();
                }
            );
        },
        sendRequest: function () {
            var span = document.createElement("span");
            span.innerHTML = 'Aceptas el <a target="_blank" href="' + APIUrl() + 'advice/aviso.pdf">Aviso de Privacidad</a>';
            swal({
                icon: "warning",
                title: 'Aviso de privacidad',
                html: true,
                content: span,
                buttons: true,
                dangerMode: true
            }).then((value) => {
                if (value) {
                    if (this.ProfileImage === null) {
                        warning_swal('Sin archivo', 'No has adjuntado tu fotografía');
                    }
                    else if (this.TutorSignature === null) {
                        warning_swal('Sin archivo', 'No has adjuntado Nombre y firma del padre o tutor');
                    }
                    else if (this.PersonSignature === null) {
                        warning_swal('Sin archivo', 'No has adjuntado Nombre y firma del aspirante');
                    }
                    else if (this.BirthCertificate === null) {
                        warning_swal('Sin archivo', 'No has adjuntado Acta de nacimiento');
                    }
                    else if (this.CURP === null) {
                        warning_swal('Sin archivo', 'No has adjuntado CURP');
                    }
                    else if (this.OfficialId === null) {
                        warning_swal('Sin archivo', 'No has adjuntado Identificación oficial');
                    }
                    else if (this.ResidencyProof === null) {
                        warning_swal('Sin archivo', 'No has adjuntado Comprobante de domicilio');
                    }
                    else if (this.Kardex === null) {
                        warning_swal('Sin archivo', 'No has adjuntado Historial académico');
                    }
                    else if (this.IncomeProof === null) {
                        warning_swal('Sin archivo', 'No has adjuntado Comprobante de ingresos');
                    }
                    else if (this.ReregistrationProof === null) {
                        warning_swal('Sin archivo', 'No has adjuntado Comprobante de reinscripción');
                    }
                    else if (this.ComplementaryDocumentation === null) {
                        warning_swal('Sin archivo', 'No has adjuntado Documentos complementarios');
                    }
                    else if (this.SmallPhotography === null) {
                        warning_swal('Sin archivo', 'No has adjuntado Fotografía tamaño infantil');
                    }
                    else if (this.BankAccount === null) {
                        warning_swal('Sin archivo', 'No has adjuntado Cuenta bancaria');
                    }
                    else {
                        showLoader();

                        if (!this.ApplicationFormData.has('Application_JSON_Body')) {
                            this.ApplicationFormData.append('Application_JSON_Body', JSON.stringify(this.RequestTemplate.Request_JSON_Body));
                        }

                        if (!this.ApplicationFormData.has('Request_Id')) {
                            this.ApplicationFormData.append('Request_Id', this.$route.params.Request_Id);
                        }

                        this.$http.post(APIUrl() + 'Application/AddApplication', this.ApplicationFormData, {
                            headers: {
                                APIKey: config.APIKey
                            }
                        }).then(
                            response => {
                                console.log(response);

                                swal({
                                    icon: "success",
                                    title: '¡Éxito!',
                                    text: `Solicitud enviada correctamente tu número de folio es: ${response.body.IdNumber}`
                                }).then((value) => {
                                    this.$router.push(`/Solicitudes`)
                                });

                                hideLoader();
                            },
                            err => {
                                console.log(err);

                                if (err.body.error === 'NotNull') {
                                    warning_swal('Solicitud enviada', 'Ya existe una solicitud asignada a este CURP');
                                }
                                else {
                                    error_swal('Error...', 'Error interno estamos trabajando para solucionarlo');
                                }
                                hideLoader();
                            }
                        );
                    }
                }
                else {
                    hideLoader();
                }
            });
        },
        onFileChange: function (e, key) {
            for (let i = 0; i < e.target.files.length; i++) {
                const file = e.target.files[i];

                key = key === 'complementary-documentation' ? 'complementary-documentation' + i : key;
                this.Profile_Image_Url = key === 'profile-image' ? URL.createObjectURL(file) : this.Profile_Image_Url;

                if (this.ApplicationFormData.get(key) === null) {
                    this.ApplicationFormData.append(key, file);
                }
                else {
                    this.ApplicationFormData.set(key, file);
                }
            }
        },
    },
    template: `
        <div>
            <section-banner></section-banner>
            
            <h1 class="content-title">SOLICITUD DE BECA Y ESTUDIO SOCIOECONÓMICO</h1>

            <div class="pdf-container">
                <div class="container">
                    <form v-on:submit.prevent="sendRequest">
                    <div class="row thumbnail">
                        <div class="col-md-2 col-md-offset-10 pt-5">
                            <img class="profile-picture" v-bind:src="Profile_Image_Url" alt="profile"/>

                            <input v-model="ProfileImage" v-on:change="onFileChange(event, 'profile-image')" type="file" id="file" class="input-file" accept="image/x-png,image/jpeg">
                            <label for="file" class="btn btn-tertiary js-labelFile">
                                <i class="icon fa fa-check"></i>
                                <span class="js-fileName">Sube tu foto</span>
                            </label>
                        </div>

                        <div v-for="(input, index) in RequestTemplate.Request_JSON_Body" v-bind:class="'col-md-' + input.size">
                            <div class="form-group">
                                <label v-if="input.type !== '7' && input.type !== '8' && input.type !== '9' && input.type !== '10'" v-bind:for="'input-id-' + input.id" v-bind:for="'input-id-' + input.id">{{input.label}}</label>
                                
                                <input v-if="input.type === '1'" v-model="input.answers[0]" type="text" class="form-control" placeholder="" v-bind:id="'input-id-' + input.id">
                                
                                <input v-if="input.type === '2'" v-model="input.answers[0]" type="date" class="form-control" placeholder="" v-bind:id="'input-id-' + input.id">
                                
                                <select v-if="input.type === '3'" v-model="input.answers[0]" v-bind:id="'input-id-' + input.id" class="form-control">
                                    <option v-for="(option, index) in input.values.array" v-bind:value="index">{{ option.split(';').join(',') }}</option>
                                </select>
                                
                                <template v-if="input.type === '4'">
                                    <br />
                                    <template v-for="(option, index) in input.values.array">
                                        <input v-model="input.answers[index]" type="checkbox" value="option" v-bind:id="'checkbox-group-option-' + input.id + '-' + index"> {{ option.split(';').join(',') }}
                                        <br v-if="index < input.values.array.length - 1" />
                                    </template>
                                </template>
                                
                                <input v-if="input.type === '5'" v-model="input.answers[0]" type="checkbox" v-bind:id="'input-id-' + input.id">
                                
                                <textarea v-if="input.type === '6'" v-model="input.answers[0]" class="form-control" v-bind:id="'input-id-' + input.id" rows="10">{{ input.answers[0] }}</textarea>
                                
                                <template v-if="input.type === '7'">
                                    <hr />
                                    <h3>{{ input.label }}</h3>
                                </template>

                                <template v-if="input.type === '8'">
                                    <h4>{{ input.label }}</h4>
                                </template>

                                <template v-if="input.type === '9'">
                                    <small>{{ input.label }}</small>
                                </template>

                                <template v-if="input.type === '10'">
                                    <p>{{ input.label }}</p>
                                </template>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <hr class="mb-6 mt-6" />
                            <h4 class="text-center mb-10">Firmas<br /><small>(En formato PDF)</small></h4>
                        </div>

                        <div class="col-md-4 col-md-offset-2 mb-6">
                            <label class="lbl-input-file">Nombre y firma del padre o tutor</label>
                            <input v-model="TutorSignature" v-on:change="onFileChange(event, 'tutor-signature')" type="file" id="tutor-signature" class="input-file" accept="application/pdf">
                            <label for="tutor-signature" class="btn btn-tertiary js-labelFile">
                                <i class="icon fa fa-check"></i>
                                <span class="js-fileName">Sube un archivo</span>
                            </label>
                        </div>

                        <div class="col-md-4 mb-6">
                            <label class="lbl-input-file">Nombre y firma del aspirante</label>
                            <input v-model="PersonSignature" v-on:change="onFileChange(event, 'person-signature')" type="file" id="person-signature" class="input-file" accept="application/pdf">
                            <label for="person-signature" class="btn btn-tertiary js-labelFile">
                                <i class="icon fa fa-check"></i>
                                <span class="js-fileName">Sube un archivo</span>
                            </label>
                        </div>

                        <div class="col-md-12">
                            <hr class="mb-6 mt-6" />
                            <h4 class="text-center mb-10">Documentación<br /><small>(En formato PDF)</h4>
                        </div>

                        <div class="col-md-4 mb-6">
                            <label class="lbl-input-file">Acta de nacimiento</label>
                            <input v-model="BirthCertificate" v-on:change="onFileChange(event, 'birth-certificate')" type="file" id="birth-certificate" class="input-file" accept="application/pdf">
                            <label for="birth-certificate" class="btn btn-tertiary js-labelFile">
                                <i class="icon fa fa-check"></i>
                                <span class="js-fileName">Sube un archivo</span>
                            </label>
                        </div>

                        <div class="col-md-4 mb-6">
                            <label class="lbl-input-file">CURP</label>
                            <input v-model="CURP" v-on:change="onFileChange(event, 'CURP')" type="file" id="CURP" class="input-file" accept="application/pdf">
                            <label for="CURP" class="btn btn-tertiary js-labelFile">
                                <i class="icon fa fa-check"></i>
                                <span class="js-fileName">Sube un archivo</span>
                            </label>
                        </div>

                        <div class="col-md-4 mb-6">
                            <label class="lbl-input-file">Identificación oficial
                                <span class="qs"><i class="fas fa-info-circle"></i>
                                    <span class="custom-popover above">Tal como cartilla del servicio militar nacional, pasaporte, credencial para votar con fotografía, acta de nacimiento u otra identificación</span>
                                </span>
                            </label>
                            <input v-model="OfficialId" v-on:change="onFileChange(event, 'official-id')" type="file" id="official-id" class="input-file" accept="application/pdf">
                            <label for="official-id" class="btn btn-tertiary js-labelFile">
                                <i class="icon fa fa-check"></i>
                                <span class="js-fileName">Sube un archivo</span>
                            </label>
                        </div>

                        <div class="col-md-4 mb-6">
                            <label class="lbl-input-file">Comprobante de domicilio
                                <span class="qs"><i class="fas fa-info-circle"></i>
                                    <span class="custom-popover above">Recibo de luz, agua, predial o teléfono, o en su caso, escrito libre de la autoridad local en el que se valide la residencia del solicitante (no mayor a tres meses)</span>
                                </span>
                            </label>
                            <input v-model="ResidencyProof" v-on:change="onFileChange(event, 'residency-proof')" type="file" id="residency-proof" class="input-file" accept="application/pdf">
                            <label for="residency-proof" class="btn btn-tertiary js-labelFile">
                                <i class="icon fa fa-check"></i>
                                <span class="js-fileName">Sube un archivo</span>
                            </label>
                        </div>

                        <div class="col-md-4 mb-6">
                            <label class="lbl-input-file">Historial académico
                                <span class="qs"><i class="fas fa-info-circle"></i>
                                    <span class="custom-popover above">Y/o kardex emitida por la IES en papel membretado y firmado por el responsable del área que incluya, las calificaciones y el promedio final, expresados númericamente del último ciclo escolar, en donde se demuestre haber obtenido un promedio mínimo de 8.0 (ocho) en las materias y/o asignaturas</span>
                                </span>
                            </label>
                            <input v-model="Kardex" v-on:change="onFileChange(event, 'kardex')" type="file" id="kardex" class="input-file" accept="application/pdf">
                            <label for="kardex" class="btn btn-tertiary js-labelFile">
                                <i class="icon fa fa-check"></i>
                                <span class="js-fileName">Sube un archivo</span>
                            </label>
                        </div>

                        <div class="col-md-4 mb-6">
                            <label class="lbl-input-file">Comprobante de ingresos
                                <span class="qs"><i class="fas fa-info-circle"></i>
                                    <span class="custom-popover above">Del mes anterior a la fecha de entrega de documentos que pueden ser: los últimos talones de pago, constancia de percepciones, recibo de pago por salario; en caso no contar con ninguno de estos, puede elaborar una carta "bajo protesta de decir la verdad" indicando sus ingresos mensuales</span>
                                </span>
                            </label>
                            <input v-model="IncomeProof" v-on:change="onFileChange(event, 'income-proof')" type="file" id="income-proof" class="input-file" accept="application/pdf">
                            <label for="income-proof" class="btn btn-tertiary js-labelFile">
                                <i class="icon fa fa-check"></i>
                                <span class="js-fileName">Sube un archivo</span>
                            </label>
                        </div>

                        <div class="col-md-4 mb-6">
                            <label class="lbl-input-file">Comprobante de reinscripción
                                <span class="qs"><i class="fas fa-info-circle"></i>
                                    <span class="custom-popover above">O tira de materias para el ciclo {{ new Date().getFullYear() }}-{{ new Date().getFullYear() + 1 }}</span>
                                </span>
                            </label>
                            <input v-model="ReregistrationProof" v-on:change="onFileChange(event, 're-registration-proof')" type="file" id="re-registration-proof" class="input-file" accept="application/pdf">
                            <label for="re-registration-proof" class="btn btn-tertiary js-labelFile">
                                <i class="icon fa fa-check"></i>
                                <span class="js-fileName">Sube un archivo</span>
                            </label>
                        </div>

                        <div class="col-md-4 mb-6">
                            <label class="lbl-input-file">Documentos complementarios
                                <span class="qs"><i class="fas fa-info-circle"></i>
                                    <span class="custom-popover above">Necesarios para sustentar la Solicitud de Becas, Estancias y Estudio socioeconómico<br />(puede subir uno o más documentos)</span>
                                </span>
                            </label>
                            <input v-model="ComplementaryDocumentation" v-on:change="onFileChange(event, 'complementary-documentation')" type="file" id="complementary-documentation" class="input-file" accept="application/pdf" multiple>
                            <label for="complementary-documentation" class="btn btn-tertiary js-labelFile">
                                <i class="icon fa fa-check"></i>
                                <span class="js-fileName">Subir archivos</span>
                            </label>
                        </div>

                        <div class="col-md-4 mb-6">
                            <label class="lbl-input-file">Fotografía tamaño infantil</label>
                            <input v-model="SmallPhotography" v-on:change="onFileChange(event, 'small-photography')" type="file" id="small-photography" class="input-file" accept="application/pdf">
                            <label for="small-photography" class="btn btn-tertiary js-labelFile">
                                <i class="icon fa fa-check"></i>
                                <span class="js-fileName">Sube un archivo</span>
                            </label>
                        </div>

                        <div class="col-md-4 mb-6 col-md-offset-4">
                            <label class="lbl-input-file">Cuenta bancaria
                                <span class="qs"><i class="fas fa-info-circle"></i>
                                    <span class="custom-popover above">A su nombre y número CLABE</span>
                                </span>
                            </label>
                            <input v-model="BankAccount" v-on:change="onFileChange(event, 'bank-account')" type="file" id="bank-account" class="input-file" accept="application/pdf">
                            <label for="bank-account" class="btn btn-tertiary js-labelFile">
                                <i class="icon fa fa-check"></i>
                                <span class="js-fileName">Sube un archivo</span>
                            </label>
                        </div>
                    </div>
                        <button type="submit" class="btn btn-primary">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    `,
    mounted() {
        this.initUI();
    }
})

export default Solicitud;