const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const spnelementos = document.getElementById('nelementos');

cargarEventListener();

function cargarEventListener() {
    elementos1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

function comprarElemento(e) {
    if (e.target.classList.contains('agregar-carrito')) {
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento){
    const infoelemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h5').innerHTML,
        precio: elemento.querySelector('h4').innerHTML,
        id: elemento.querySelector('a').getAttribute('data-id')
    }
    //console.log(infoelemento);
    insertarCarrito(infoelemento);
}

function insertarCarrito(elemento){
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>
    <img src = "${elemento.imagen}" width=70 height=70 margin-top=10px />
    </td>
    <td>
    ${elemento.titulo}
    </td>
    <td>
    ${elemento.precio}
    </td>
    <td<
    <a href="#" class="borrar" data-id="${elemento.id}">X</a>
    </td>

    `;
    lista.appendChild(row);
    spnelementos.innerHTML=lista.childElementCount;
}

function eliminarElemento(e){
    let elemento;
    let elementoid;
    if(e.target.classList.contains('borrar')){
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoid = elemento.querySelector('a').getAttribute('data-id');
        spnelementos.innerHTML=lista.childElementCount;
    }
}

function vaciarCarrito(){
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    spnelementos.innerHTML=0;
    return false;
}