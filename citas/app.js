let boton = document.getElementById('cambiar')
let cita = document.getElementById('cita')
let autor = document.getElementById('autor')

function entero(min,max){
    return Math.floor(Math.random() * (max - min) + min)
}

function cambiarCita(){
    let indice = entero(0, citas.length)
    cita.innerText = `"${citas[indice].texto}"`
    autor.innerText = citas[indice].autor
}

cambiarCita()

boton.addEventListener('click', cambiarCita)