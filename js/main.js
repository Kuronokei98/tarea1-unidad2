/*para hacer que la barra lateral funcione*/
const btnToggle= document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', function() {
document.getElementById('sidebar').classList.toggle('active');
});

/*para hacer que el elemento de lista "inicio" de la barra haga aparecer el div que contiene-
al boton saludar y el mensaje de saludo a la vez que oculta el formulario por si pasa de formulario a inicio*/

function mostrarinic(){
    document.getElementById('contmsge').style.display = 'flex';
    document.getElementById('registro').style.display = 'none';
}

/*está configurado para que el saludo no aparezca solo el boton saludar esta funcion hace aparecer el mensaje de saludo*/
function saludar(){
    document.getElementById('mensaj').style.display = 'flex';
}
/*esta funcion oculta el mensaje del saludo*/
function ocultsalud(){
    document.getElementById('mensaj').style.display = 'none';
}


/*esta funcion oculta el div que contiene al -
boton saludar y al mensaje de saludo, se le agregó al hacer click en "formulario"*/
function ocultinic(){
    document.getElementById('contmsge').style.display = 'none';
    document.getElementById('registro').style.display = 'block';
}


