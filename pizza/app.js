const toppings = document.getElementsByClassName('topping')
for (run of toppings){
    run.addEventListener('click', e => console.log(e.target.innerText)
    )
}