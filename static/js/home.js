
var agente = navigator.userAgent.toLowerCase()

document.getElementById("LinkDescarga").style.display = "none";
document.getElementById("QRDescarga").style.display = "none";


if (agente.includes('iphone') || agente.includes('android'))  {
    document.getElementById("LinkDescarga").style.display = "inline-block";
}else{
    document.getElementById("QRDescarga").style.display = "block";    
}


