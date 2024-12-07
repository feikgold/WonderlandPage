

// Detección de dispositivo usando el Agente de Usuario
function detectDevice() {
    var userAgent = navigator.userAgent;
    var isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);

    if (isMobile) {
        document.getElementById("mobile-download").style.display = "block";
        document.getElementById("pc-download").style.display = "none";
    } else {
        document.getElementById("mobile-download").style.display = "none";
        document.getElementById("pc-download").style.display = "block";
        generateQRCode(); // Si es escritorio, genera el QR
    }
}

// Generar el QR con la URL de la APK usando la API pública
function generateQRCode() {
    var qrContainer = document.getElementById('qr-code');
    var apkUrl = 'https://github.com/feikgold/WonderlandPaginaExamen/releases/download/100/wonderland_et.apk';
    var qrImageUrl = "https://api.qrserver.com/v1/create-qr-code/?data=" + encodeURIComponent(apkUrl) + "&size=150x150";

    var img = document.createElement("img");
    img.src = qrImageUrl;
    img.alt = "QR Code para descargar la app";

    qrContainer.innerHTML = "";
    qrContainer.appendChild(img);
}

// Ejecutar la detección cuando la página cargue
window.onload = function () {
    detectDevice();
    window.onresize = detectDevice; // Para ajustar el contenido si cambia el tamaño de la pantalla
};



