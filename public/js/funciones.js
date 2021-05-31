//Funcion basica normal
function mostrarmensaje(mensaje) {
    console.log(mensaje);
}

//funcion en tipo flecha

var mostrarmensaje = mensaje => console.log(mensaje);

///almacenando una funcion en una variable
var mostrarAlert = function(mensaje) {
    alert(mensaje);
}

/// 

var sumar = function(a,b) {
    return a+b;
}

/// funciones tipo flecha

var sumar = (a,b) => a+b;


let edades = [1,2,5,3,6];

edades.forEach(element => {
    console.log(element);
});

console.log('nombre: ',document.getElementById('usuario').value);

function guardar() {

   validarCampovacio('usuario'); 
   validarCampovacio('password'); 
   validarCorreo('correo');

    console.log('nombre: ',document.getElementById('usuario').value);
    console.log('password: ',document.getElementById('password').value);
}

var validarCampovacio = (id) => {

    if (document.getElementById(id).value == '') {
        document.getElementById(id).classList.remove('input-succes');
        document.getElementById(id).classList.add('input-error');
    } else {
        document.getElementById(id).classList.remove('input-error');
        document.getElementById(id).classList.add('input-succes');
    }

};

var cambiarEstilos = ()=>{

    const parrafo = document.getElementById('parrafo');
    parrafo.style.backgroundColor = 'black';
};


var validarCorreo = (campo) => {

    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    if (regex.test(campo)) {
        document.getElementById(id).classList.remove('input-error');
        document.getElementById(id).classList.add('input-succes'); 
    }else {
        document.getElementById(id).classList.remove('input-succes');
        document.getElementById(id).classList.add('input-error');
    }

};


