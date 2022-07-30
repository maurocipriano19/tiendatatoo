let usuario = JSON.parse(localStorage.getItem('usuario')); //obtengo objeto usuario del localStorage
let mensaje = document.querySelector('#mensaje');
mensaje.textContent = `Bienvenida/o ${usuario.nombre}`;



//Mètodos de busqueda
const productos = [

    { nombre: 'Helix', precio: 1000, img: "./imagenes/helix.png" },
    { nombre: 'Helix Curvo', precio: 1000, img: "./imagenes/helix2.png" },
    { nombre: "Septum", precio: 1200, img: "./imagenes/septum.png" },
    { nombre: "Bridge", precio: 1500, img: "./imagenes/bridge.png" },
    { nombre: "Clicker", precio: 2000, img: "./imagenes/clicker.png" },
    { nombre: "Clicker 2", precio: 2000, img: "./imagenes/clicker2.png" },
    { nombre: "Combo 22 ", precio: 1250, img: "./imagenes/combo22.png" },
    { nombre: "ombligo 1", precio: 715, img: "./imagenes/ombligo1.png" },
    { nombre: "Ombligo 2", precio: 715, img: "./imagenes/ombligo2.png" },
    { nombre: "Ombligo 3", precio: 715, img: "./imagenes/ombligo3.png" },
    { nombre: "Ombligo 4", precio: 715, img: "./imagenes/ombligo4.png" },
    { nombre: "Ombligo 5", precio: 715, img: "./imagenes/ombligo5.png" },
    { nombre: "Ombligo 6", precio: 715, img: "./imagenes/ombligo6.png" },
    { nombre: "Ombligo 7", precio: 2700, img: "./imagenes/ombligo7.png" },
    { nombre: "Falso 1", precio: 299, img: "./imagenes/falso1.png" },
    { nombre: "Falso 2", precio: 359, img: "./imagenes/falso2.png" },
    { nombre: "Falso 3", precio: 359, img: "./imagenes/falso3.png" },
    { nombre: "Snake", precio: 790, img: "./imagenes/snake.png" },
    { nombre: "Cruz", precio: 350, img: "./imagenes/cruz.png" },
    { nombre: "Cruz 2", precio: 650, img: "./imagenes/cruz2.png" },

];

const formulario = document.getElementById("formulario");
const boton = document.getElementById("boton");
const resultado = document.getElementById("resultado");


const filtrar = () => {
    //console.log(formulario.value);
    resultado.innerHTML = '';

    const texto = formulario.value.toLowerCase();
    for (let producto of productos) {
        let nombre = producto.nombre.toLowerCase();
        if (nombre.indexOf(texto) !== -1) {
            resultado.innerHTML += `
            <div class="card-deck ">
                 <div class="card">
                    <img src=${producto.img} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre} </h5>
                        <b>Precio:$ ${producto.precio}</b>
                    </div>
                </div>     
            </div>           
                       
                `;
        }
    }

    if (resultado.innerHTML === '') {
        resultado.innerHTML += `
        <div>no se encontro el producto.....</div>                
        `;
    }

}

boton.addEventListener('click', filtrar)
formulario.addEventListener('keyup', filtrar)

filtrar();




/*
let busqueda = prompt("ingrese el nombre del producto a buscar su precio");
let producto = productos.find(elemento => elemento.nombre.toLocaleLowerCase() === busqueda.toLocaleLowerCase());
alert(`El precio del producto ${busqueda} es ${producto.precio}`);
*/


// if (productos.find(elemento => elemento.nombre = !busqueda)) {
//     alert("el producto no esta disponible") // probé de varias formas y no funciona! :(
// }


//-------------------FILTRADO DE PRECIO-----------------------------------------------------

/*
//DOM 

let container = document.getElementById("container");
let filtro = parseInt(prompt("ingrese el precio maximo que esta dispuesto a pagar"));

let filtrados = productos.filter(elemento => elemento.precio <= filtro);

for (const producto of filtrados) {
    let item = document.createElement("div");
    item.innerHTML = `<h2>Id: ${producto.id}</h2>
                     <p>Producto: ${producto.nombre}</p>
                     <b>Precio: ${producto.precio}</b>
                     <img src= ${producto.img}>`;

    container.append(item);
}
*/
//--------------------------------------------------------------------------------


//event
let miFormulario = document.getElementById("formulario2");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    let formulario = e.target

    console.log(formulario.children[1].value);
    console.log(formulario.children[3].value);
    console.log(formulario.children[5].value);

    //VALIDO EL GENERO
    function validarRadio() {
        var s = "no";
        for (var i = 0; i < document.f1.genero.length; i++) {
            if (document.f1.genero[i].checked) {
                console.log(document.f1.genero[i].value);
                // console.log(formulario.children[1].value);
                s = "si";
            }
        }
        if (s == "no") {
            alert("Debe seleccionar algo");
        }
    }

    validarRadio();

}






const btn1 = document.getElementById('button');

document.getElementById('formulario2')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn1.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_aopuk81';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn1.value = 'Enviar mensaje!';
      alert('Mensaje enviado correctamente');
    }, (err) => {
      btn1.value = 'Enviar mensaje!';
      alert(JSON.stringify(err));
    });
});


















//Nuestros tatuadores

const btn = document.querySelector('#myBtn')
btn.addEventListener('click', () => {

    Swal.fire({
        title: 'Mauro  Cesari',
        text: 'Desde muy chico me interese por el dibujo. Fomentado por mi madre, avancé en mi técnica y en conocer sobre la historia del arte. Luego comencé la carrera de Arquitectura, la cual me equipo con herramientas  muy útiles en mi búsqueda constante. Hoy en día, impulsado por un aprendizaje académico en Bellas Artes, busco reinventarme y avanzar día a día para lograr madurar y poder compartirlo con todos los que lo necesiten.',
        imageUrl: './imagenes/gonza.png',
        imageWidth: 350,
        imageHeight: 300,
        imageAlt: 'Custom image',
    })
})


const btn2 = document.querySelector('#myBtn2')
btn2.addEventListener('click', () => {

    Swal.fire({
        title: 'Maria Sol Romero',
        text: 'Nací en la ciudad de Salta. ¡ Rodeada de Arte! Desde los Paisajes, la flora y la fauna hasta los proyectos artísticos familiares. Lo que me permitió crecer con mas libertad de expresión. Valorando el medio ambiente que nos rodea y mirando al mundo con menos prejuicio.  A través de mi obra dejo un mensaje, dejo en cada pincelada un pedacito de mi. ',
        imageUrl: './imagenes/lau.png',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
    })
})

const btn3 = document.querySelector('#myBtn3')
btn3.addEventListener('click', () => {

    Swal.fire({
        title: 'Alan Santander',
        text: 'Nací en la ciudad de Salta. ¡ Rodeada de Arte! Desde los Paisajes, la flora y la fauna hasta los proyectos artísticos familiares. Lo que me permitió crecer con mas libertad de expresión. Valorando el medio ambiente que nos rodea y mirando al mundo con menos prejuicio.  A través de mi obra dejo un mensaje, dejo en cada pincelada un pedacito de mi. ',
        imageUrl: './imagenes/alan.png',
        imageWidth: 400,
        imageHeight: 300,
        imageAlt: 'Custom image',
    })
})

const btn4 = document.querySelector('#myBtn4')
btn4.addEventListener('click', () => {

    Swal.fire({
        title: 'Hernan Leguizamon',
        text: 'Nací en la ciudad de Salta. ¡ Rodeada de Arte! Desde los Paisajes, la flora y la fauna hasta los proyectos artísticos familiares. Lo que me permitió crecer con mas libertad de expresión. Valorando el medio ambiente que nos rodea y mirando al mundo con menos prejuicio.  A través de mi obra dejo un mensaje, dejo en cada pincelada un pedacito de mi. ',
        imageUrl: './imagenes/hernan.png',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
    })
})

const btn5 = document.querySelector('#myBtn5')
btn5.addEventListener('click', () => {

    Swal.fire({
        title: 'Micaela Arenas',
        text: 'Nací en la ciudad de Salta. ¡ Rodeada de Arte! Desde los Paisajes, la flora y la fauna hasta los proyectos artísticos familiares. Lo que me permitió crecer con mas libertad de expresión. Valorando el medio ambiente que nos rodea y mirando al mundo con menos prejuicio.  A través de mi obra dejo un mensaje, dejo en cada pincelada un pedacito de mi. ',
        imageUrl: './imagenes/maria2.jpg',
        imageWidth: 300,
        imageHeight: 400,
        imageAlt: 'Custom image',
    })
})






