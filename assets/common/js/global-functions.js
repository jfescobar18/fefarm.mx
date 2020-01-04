function APIUrl() {
    if (window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost') {
        return config.LocalhostURL;
    }
    else {
        return config.ProductionURL;
    }
}

function showLoader() {
    var loader = document.getElementById('loader');
    loader.className += ' displayed';
}

function hideLoader() {
    var loader = document.getElementById('loader');
    loader.className = loader.className.replace(/\bdisplayed\b/g, '');
}

function error_swal(title, message) {
    swal({
        icon: "error",
        title: title,
        text: message
    });
}

function warning_swal(title, message) {
    swal({
        icon: "info",
        title: title,
        text: message
    });
}

function succes_swal(title, message) {
    swal({
        icon: "success",
        title: title,
        text: message
    });
}