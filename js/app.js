
let tiempoRef = Date.now()
let acumulado = 0
let cronometrar = false

setInterval(() =>{
    let tiempo =document.getElementById("tiempo")
    if(cronometrar){
        acumulado += Date.now()-tiempoRef
    }
    tiempoRef= Date.now()
    tiempo.innerHTML = formatearMs(acumulado)
}),1000/60;

function formatearMs(tiempo_ms){
    let MS = tiempo_ms % 1000
    let S = Math.floor(((tiempo_ms-MS)/1000)%60)
    let M =Math.floor(((S/60) % 60))
    let H = Math.floor((M/60))

    Number.prototype.ceros=function(n){
        return(this +"").padStart(n,0)
    }
    return H.ceros(2)+":"+M.ceros(2)+":"+S.ceros(2)+"."+MS.ceros(3)

}

function iniciar(){
    cronometrar = true;
    let pausa = document.getElementById("pausa")
    pausa.innerHTML =
    /*html*/`
    <p onclick="pausar()""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pause</title><path d="M14,19H18V5H14M6,19H10V5H6V19Z" /></svg></p>
    `
}

function pausar(){
    cronometrar = false;
}
function reiniciar(){
    acumulado = 0;
    let pausa = document.getElementById("pausa")
    pausa.innerHTML = "";
    
        
        
}