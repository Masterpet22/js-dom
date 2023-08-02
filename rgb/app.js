const inputRojo = document.getElementById('rojo')
const inputVerde = document.getElementById('verde')
const inputAzul = document.getElementById('azul')

const textoR = document.getElementById('textoR')
const textoV = document.getElementById('textoV')
const textoA = document.getElementById('textoA')

let rojo = inputRojo.value
let verde = inputVerde.value
let azul = inputAzul.value

textoR.innerText = rojo
textoA.innerText = azul
textoV.innerText = verde

//Actualizar color global
function actualizarColor(rojo, verde, azul){
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`
    document.body.style.backgroundColor = colorRGB
}
//actualizar el rojo
inputRojo.addEventListener('change', (e)=>{
    rojo = e.target.value
    textoR.innerText = rojo
    actualizarColor(rojo,verde,azul)
})
//actualizar el verde
inputVerde.addEventListener('change', (e)=>{
    verde = e.target.value
    textoV.innerText = verde
    actualizarColor(rojo,verde,azul)
})
//actualizar el azul
inputAzul.addEventListener('change', (e)=>{
    azul = e.target.value
    textoA.innerText = azul
    actualizarColor(rojo,verde,azul)
})