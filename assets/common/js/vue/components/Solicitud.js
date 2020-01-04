var Solicitud = Vue.component('Solicitud', {
    props: ['PDFs'],
    methods: {
        initUI: function () {
        }
    },
    template: `
        <div>
            <section-banner></section-banner>
            
            <h1 class="content-title">SOLICITUD Y DOCUMENTACIÓN</h1>

            <div class="pdf-container">
                <div class="container">
                    <form>
                        <h2>Nombre de la beca</h2>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="first">Nombre(s)</label>
                                    <input type="text" class="form-control" placeholder="" id="first">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="last">Apellidos</label>
                                    <input type="text" class="form-control" placeholder="" id="last">
                                </div>
                            </div>
                        </div>
                
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="company">Carrera</label>
                                    <input type="text" class="form-control" placeholder="" id="company">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="phone">Teléfono</label>
                                    <input type="tel" class="form-control" id="phone" placeholder="Teléfono">
                                </div>
                            </div>
                        </div>
                
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" class="form-control" id="email" placeholder="Email">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="url">Dirección</label>
                                    <input type="url" class="form-control" id="url" placeholder="Dirección">
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="email">Campo</label>
                                    <input type="email" class="form-control" id="email" placeholder="Campo">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="url">Opción</label>
                                    <select class="form-control" name="opt" id="opt">
                                        <option value="0">Opcion 0</option>
                                        <option value="1">Opcion 1</option>
                                        <option value="2">Opcion 2</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="email">Texto</label>
                                    <textarea rows="3" class="form-control" id="text" placeholder="Text"></textarea>
                                </div>
                            </div>
                        </div>
                
                        <label for="contact-preference">Pregunta 1</label>
                        <div class="radio">
                            <label>
                                <input type="radio" name="contact-preference" id="contact-preference" value="am" checked>Respuesta 1
                            </label>
                        </div>
                        <div class="radio">
                            <label>
                                <input type="radio" name="contact-preference" id="contact-preference" value="pm" checked>Respuesta 2
                            </label>
                        </div>
                
                        <label for="newsletter">Pregunta 2</label>
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" value="Sure!" id="newsletter"> Si
                            </label>
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