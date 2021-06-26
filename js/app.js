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
    //textarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;
    if(tweet === ''){
        mostrarError('Un mensaje no puede ir vacio');
        return; //Evita que se siga ejecutando la funcion
    }
    console.log(tweet);
}

function mostrarError(mensaje){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('error');
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    setTimeout(()=>{
        mensajeError.remove();
    },3000);
}