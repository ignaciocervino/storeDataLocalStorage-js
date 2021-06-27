/** VARIABLES */
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

/** EVENT LISTENERS */
eventListeners();
function eventListeners(){
    //Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit',agregarTweet);
    //Cuando el documento esta listo
    document.addEventListener('DOMContentLoaded',() => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];//Si le marca null, que le devuelva un arreglo vacio
        //console.log(tweets);
        crearHTML();
    });
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
    tweets = [...tweets,tweetObj];

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
            //Agregar boton de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';
            //Añadir la function de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            };
			//Crear el HTML
			const li = document.createElement('li');
			//Añadir texto
			li.innerText = tweet.tweet;
            //Asignar boton
            li.appendChild(btnEliminar);
			//Agregarlo en el html
			listaTweets.appendChild(li);
		});
	}

    sincronizarStorage();
}

//Agrega los tweet actuales a LocalStorage
function sincronizarStorage(){
    localStorage.setItem('tweets',JSON.stringify(tweets));
}

function limpiarHTML(){
	while(listaTweets.firstChild){
		listaTweets.removeChild(listaTweets.firstChild);
	}
}

//Elimina un tweet
function borrarTweet(id){
    tweets = tweets.filter(tweet => tweet.id !== id);//Todos los demas menos el que borramos
    crearHTML();
}