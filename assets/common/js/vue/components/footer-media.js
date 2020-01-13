var footerMedia = Vue.component('footer-media', {
    template: `
        <div>
            <div class="footer-media">
                <div class="footer-media-info">
                    <p>© Copyright 2019. All Rights Reserved.</p>
                </div>
                <div class="footer-media-info">
                    <p><a target="_blank" v-bind:href="APIUrl() + 'advice/aviso.pdf'">Términos y Condiciones</a></p>
                </div>
                <div class="footer-media-info">
                    <a href="#">
                        <img src="./assets/common/img/fb.png" alt="Facebook">
                    </a>
                </div>
            </div>
        </div>
    `
})

export default footerMedia