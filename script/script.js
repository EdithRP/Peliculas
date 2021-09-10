
window.onload = function () {
    const IMAGENES = [
        ('slide1'),
        ('slide2'),
        ('slide3'),
        ('slide4'),
        ('slide5'),
        ('slide6'),
        ('slide7'),
        ('slide8'),
    ];

    const flechaizquierda = document.getElementById('flecha-izquierda');
    const flechaderecha = document.getElementById('flecha-derecha');

    let posicionActual = 0;


    function pasarFoto() {
        if (posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }
   
    function retrocederFoto() {
        if (posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }

    function renderizarImagen() {
        for(let i=1;i<=IMAGENES.length-1;i++){
            document.getElementById(IMAGENES[i]).style.opacity= 0}

         document.getElementById(IMAGENES[posicionActual]).style.opacity= 1;
    }

    flechaderecha.addEventListener('click', pasarFoto);
    flechaizquierda.addEventListener('click', retrocederFoto);
    renderizarImagen();
}

/*Formulario*/

function capturarDatos(){
let nombre = document.getElementById('nombre').value;
let apellido = document.getElementById('apellido').value;
let telefono = document.getElementById('telefono').value;
let direccion = document.getElementById('direccion').value;
let observaciones = document.getElementById('Observaciones').value;

let objeto ={
    nom:nombre,
    apel:apellido,
    tel:telefono,
    dir:direccion,
    obs:observaciones
}

localStorage.setItem('Persona', JSON.stringify(objeto));
}

/*Relacionar contenido*/

function mostrar(){
    
    document.getElementById('Registro').style.opacity= 1;
    document.getElementById('flecha-izquierda').style.opacity= 0;
    document.getElementById('flecha-derecha').style.opacity= 0;
 
}
function mostrar2(){

    document.getElementById('Registro').style.opacity= 0;
    document.getElementById('flecha-izquierda').style.opacity= 1;
    document.getElementById('flecha-derecha').style.opacity= 1;

}
