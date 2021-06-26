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
    const tweetObj = {
    	id: Date.now(),
    	tweet // This is the same as do tweet: tweet
    }
    //Añado al arreglo de tweeets
    tweets = [...tweets,tweet];

    //Crear html
    crearHTML();

    //Reiniciar formulario
    formulario.reset();
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

function crearHTML(){
	limpiarHTML();
	if(tweets.length >0){
		tweets.forEach(tweet => {
			//Crear el HTML
			const li = document.createElement('li');
			//Añadir texto
			li.innerText = tweet;
			//Agregarlo en el html
			listaTweets.appendChild(li);
		});
	}
}

function limpiarHTML(){
	while(listaTweets.firstChild){
		listaTweets.removeChild(listaTweets.firstChild);
	}
}