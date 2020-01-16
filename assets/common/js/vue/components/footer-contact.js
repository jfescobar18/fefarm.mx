var footerContact = Vue.component('footer-contact', {
    template: `
        <div>
            <div class="footer-contact">
                <div class="footer-information">
                    <h3>CONTACTO</h3>
                    <P>
                        Nicolás San Juan n.1511, Col. Del Valle, 03100.<br> Ciudad de México, CDMX.
                    </P>
                    <p>
                        mail. fefarm@fefarm.mx
                    </p>
                    <p>
                        Tel. 555605 - 7726
                    </p>
                </div>
                <div class="footer-form">
                    <form action="">
                        <div class="w-full">
                            <input type="text" placeholder="NOMBRE">
                        </div>
                        <div class="w-full flex">
                            <input type="email" placeholder="MAIL">
                            <input type="tel" placeholder="TEL">
                        </div>
                        <div class="text-area-container w-full">
                            <textarea name="" id="" cols="30" rows="10" placeholder="COMENTARIOS"></textarea>
                            <button class="text-white font-black rounded-lg" type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `
})

export default footerContact