/** VARIABLES */
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

/** EVENT LISTENERS */
eventListeners();

function eventListeners(){
    formulario.addEventListener('submit',agregarTweet);
}

/** FUNCTIONS */
function agregarTweet(e){
    e.preventDefault();
    console.log('Agregando Tweet');
}