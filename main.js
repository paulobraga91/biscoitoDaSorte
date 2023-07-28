const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const biscoitoFechado = document.querySelector(".imgBiscoito")
const btnReset = document.querySelector("#btnReset")
let frases = ['A vida é bela', 'Traina mais', 'Você é feio','a vida é bela', 'Camarão que dorme a onda leva', 'Olhe seu IMC']
let  randomNumber = Math.ceil(Math.random()* 5)

biscoitoFechado.addEventListener('click',handleTryClick)
btnReset.addEventListener('click',handleResetClick)
document.addEventListener('keydown',resetEnter())

function resetEnter(){
    if(e.key == 'Enter' && screen1.classList.contains('hide') ){
        handleResetClick()
    }
}

function toggleScren(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function handleResetClick(){
    toggleScren()
}

function handleTryClick(){
    let  randomNumber = Math.ceil(Math.random()* 5)
    event.preventDefault()
    const frase = screen2.querySelector("p")
    toggleScren()
    screen2.querySelector("p").innerText = `A frase do dia é: ${frases[randomNumber]}`
}
