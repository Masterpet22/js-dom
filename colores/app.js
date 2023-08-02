const boton = document.getElementById('boton');
const color = document.getElementById('color');

function generarColor(){
    let digitos = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++){
        let indice = Math.floor(Math.random() * 16);
        color += digitos[indice];
    }
    
    return color;
}

boton.addEventListener('click', function(){
    let colorAleatorio = generarColor();

    color.textContent = colorAleatorio;

    document.body.style.backgroundColor = colorAleatorio;
})