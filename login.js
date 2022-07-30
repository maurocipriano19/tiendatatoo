class Usuario {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

const deshabilitarLogin = () => {   //Cambia formato de btn a deshabilitado
    btnLogin.value = "Menores de edad no pueden ingresar";
    btnLogin.classList.add('deshabilitado');
}
const habilitarLogin = () => {   //Cambia formato de btn a habilitado
    btnLogin.value = "Ingresar";
    btnLogin.classList.remove('deshabilitado');
}


const loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit', (e) => { //Evitar recargo de pagina
    e.preventDefault();
})

const btnLogin = document.querySelector('#btnLogin');
btnLogin.addEventListener('click', () => {
    if (btnLogin.classList.contains('deshabilitado')) { //Si el btn está desabilitado
        habilitarLogin(); //habilito el btn
        return; //Finalizo la función ejecutada por el evento click
    }

    let nombre = document.querySelector('#nombreInput').value;
    let edad = parseInt(document.querySelector('#edadInput').value);

    let autorizacionBtnContenedor = document.querySelector('.formAutorizacion'); //contenedor de radio inputs
    if (autorizacionBtnContenedor.classList.contains('show')) { //Si está visible el contenedor
        if (loginForm.autorizacion[0].checked) {
            let usuario = new Usuario(nombre, edad); //Creo un objeto de tipo Usuario con los datos de los inputs
            localStorage.setItem('usuario', JSON.stringify(usuario));  //Guardo los datos en el localstorage
            window.location.href = './tienda.html'
        } else {
            deshabilitarLogin();
        }


        //Si esta checkeada la primera opcion, redirecciono a la tienda (tiene autorizacion)
        //Sino, ejecuto función para deshabilitar el login
    }

    if (edad >= 18) {
        let usuario = new Usuario(nombre, edad); //Creo un objeto de tipo Usuario con los datos de los inputs
        localStorage.setItem('usuario', JSON.stringify(usuario));  //Guardo los datos en el localstorage
        window.location.href = './tienda.html'  //redirecciono a tienda
    } else {
        //es menor de edad, muestro contenedor de radio inputs
        autorizacionBtnContenedor.classList.add('show');
    }
})