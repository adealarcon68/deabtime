let tiempoRef = Date.now()
let cronometrar = false
let acumulado = 0

let tiempoRef_t2 = Date.now()
let cronometrar_t2 = false
let acumulado_t2 = 0

let tiempoRef_t3 = Date.now()
let cronometrar_t3 = false
let acumulado_t3 = 0

function iniciar(tarea) {
    switch (tarea) {
        case "tar1":
            cronometrar = true;
            break;
        case "tar2":
            cronometrar_t2 = true;
            break;
        case "tar3":
            cronometrar_t3 = true;
            break;
    }
}

function pausar(tarea) {
    switch (tarea) {
        case "tar1":
            cronometrar = false;
            break;
        case "tar2":
            cronometrar_t2 = false;
            break;
        case "tar3":
            cronometrar_t3 = false;
            break;
    }
}

function reiniciar(tarea) {
    switch (tarea) {
        case "tar1":
            acumulado = 0;
            break;
        case "tar2":
            acumulado_t2 = 0;
            break;
        case "tar3":
            acumulado_t3 = 0;
            break;            
    }    
}

function finalizar(tarea) {
    switch (tarea) {
        case "tar1":
            acumulado_t1 = 0;
            break;
        case "tar2":
            acumulado_t2 = 0;
            break;
        case "tar3":
            acumulado_t3 = 0;
            break;
    }
}

setInterval(() => {
    let tiempo = document.getElementById("tiempo_t1")
    if (cronometrar) {
        acumulado += Date.now() - tiempoRef
    }
    tiempoRef = Date.now()
    tiempo.innerHTML = formatearMS(acumulado)
    
}, 1000 / 60);

setInterval(() => {
    let tiempo_t2 = document.getElementById("tiempo_t2")
    if (cronometrar_t2) {
        acumulado_t2 += Date.now() - tiempoRef_t2
    }
    tiempoRef_t2 = Date.now()
    tiempo_t2.innerHTML = formatearMS(acumulado_t2)
}, 1000 / 60);

setInterval(() => {
    let tiempo_t3 = document.getElementById("tiempo_t3")
    if (cronometrar_t3) {
        acumulado_t3 += Date.now() - tiempoRef_t3
    }
    tiempoRef_t3 = Date.now()
    tiempo_t3.innerHTML = formatearMS(acumulado_t3)
}, 1000 / 60);

function formatearMS(tiempo_ms) {
    let MS = tiempo_ms % 1000
    
    //Agregué la variable St para solucionar el problema de contar los minutos y horas.

    let St = Math.floor(((tiempo_ms - MS) / 1000))
    let S = St%60
    let M = Math.floor((St / 60) % 60)
    let H = Math.floor((St/60 / 60))
    Number.prototype.ceros = function (n) {
        return (this + "").padStart(n, 0)
    }

    return H.ceros(2) + ":" + M.ceros(2) + ":" + S.ceros(2)
        + "." + MS.ceros(3)
}

