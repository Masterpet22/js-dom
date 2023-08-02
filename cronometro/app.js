const btnInicio = document.getElementById('inicio')
const btnReinicio = document.getElementById('reiniciar')
const cronometro = document.getElementById('cronometro')

let [horas, minutos, segundos] = [0,0,0]

let intervalo
let estado = 'pausado'

function actualizarCronometro(){
    segundos++

    if(segundos/60===1){
        segundos = 0
        minutos++

        if(minutos/60===1){
            minutos = 0
            horas++
        }
    }
    const segundosFormato = asignarFormato(segundos)
    const minutosFormato = asignarFormato(minutos)
    const horasFormato = asignarFormato(horas)

    cronometro.innerText = `${horasFormato}:${minutosFormato}:${segundosFormato}`
}

function asignarFormato(unidadDeTiempo){
    return unidadDeTiempo < 10 ? '0' + unidadDeTiempo : unidadDeTiempo
}

btnInicio.addEventListener('click', function(){
    if(estado === 'pausado'){
        intervalo = window.setInterval(actualizarCronometro, 1000)
        btnInicio.innerHTML = '<i class="bi bi-pause-fill"></i>'
        btnInicio.classList.remove('iniciar')
        btnInicio.classList.add('pausar')
        estado = 'activo'
    }else{
        window.clearInterval(intervalo)
        btnInicio.innerHTML = '<i class="bi bi-play-fill"></i>'
        btnInicio.classList.remove('pausar')
        btnInicio.classList.add('iniciar')
        estado = 'pausado'
    }
})

btnReinicio.addEventListener('click', function(){
    window.clearInterval(intervalo)

    horas = 0
    minutos = 0
    segundos = 0

    cronometro.innerText = '00:00:00'

    btnInicio.innerHTML = '<i class="bi bi-play-fill"></i>'
    btnInicio.classList.remove('pausar')
    btnInicio.classList.add('iniciar')
    estado = 'pausado'
})