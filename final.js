'use strict';

/*

 Gueiser, Roni Esteban
 Yamamoto, Ana Paula

 */


let catalogo = [];

let categorias = [
    'Ropa',
    'Invierno',
    'Accesorios',
];

let producto1 = {
    nombre: 'Buzo',
    precio: 1800,
    img: ['img/Ropa/BuzoVerde.png', 'img/Ropa/espaldaBuzoVerde.png'],
    descripcion: 'Buzo de entrenamiento',
    categoria: 0,
    id: '1',


};

let producto2 = {
    nombre: 'Remera',
    precio: 1100,
    img: ['img/Ropa/remeraNegra.png', 'img/Ropa/espaldaRemera.png'],
    descripcion: 'Remera Dri-Fit para correr',
    categoria: 0,
    id: '2',
};

let producto3 = {
    nombre: 'Short',
    precio: 700,
    img: ['img/Ropa/shortNegro.png', 'img/Ropa/traseroShort.png'],
    descripcion: 'Short para salir a correr',
    categoria: 0,
    id: '3',
};

let producto4 = {
    nombre: 'Calzas',
    precio: 2000,
    img: ['img/Frio/calzaNegra.png', 'img/Frio/humanoCalzas.png'],
    descripcion: 'Calzas para correr en invierno',
    categoria: 1,
    id: '4',
};

let producto5 = {
    nombre: 'Bolso Nike',
    precio: 4500,
    img: ['img/Frio/bolsoNike.png', 'img/Frio/bolsoNike2.png'],
    descripcion: 'Bolso para llevar la ropa de entrenamiento',
    categoria: 1,
    id: '5',
};

let producto6 = {
    nombre: 'Guantes',
    precio: 700,
    img: ['img/Frio/guantesNegros.png', 'img/Frio/guantesNegrosCostado.png'],
    descripcion: 'Guantes para correr',
    categoria: 1,
    id: '6',
};

let producto7 = {
    nombre: 'Botella',
    precio: 1500,
    img: ['img/Accesorios/botellaAzul.png', 'img/Accesorios/botellaColores.png'],
    descripcion: 'Botella para entrenar',
    categoria: 2,
    id: '7',
};

let producto8 = {
    nombre: 'Reloj',
    precio: 3500,
    img: ['img/Accesorios/Reloj.png', 'img/Accesorios/relojAtras.png' ],
    descripcion: 'Reloj Runner',
    categoria: 2,
    id: '8',
};

let producto9 = {
    nombre: 'Porta Celular',
    precio: 1850,
    img: ['img/Accesorios/portaCelular.png', 'img/Accesorios/portaCelularCierre.png'],
    descripcion: 'Portador de celular',
    categoria: 2,
    id: '9',
};

catalogo.push(producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8,producto9);


let bannersPromo = [
    {
        imagen: 'img/Banner/Oferta_calzas.jpg',
        precio: 2000,
        id: 4,
        nombre: 'Calzas',
    },
    {
        imagen: 'img/Banner/Oferta_reloj.jpg',
        precio: 3500,
        id:8,
        nombre: 'Reloj',
    },
    {
        imagen: 'img/Banner/Oferta_remera.jpg',
        precio: 1100,
        id: 2,
        nombre: 'Remera',

    }]


const d = document;




let Carrito = {
    productosId: [],
    cantidad: [],
    totalAPagar: 0,
    totalItems: 0,
    detalle: [],
};

if (localStorage.Carrito){
    Carrito = JSON.parse(localStorage.Carrito)
} else {
    localStorage.Carrito = JSON.stringify(Carrito)
}






let ListadoDeProductos = d.querySelector('#productos');

let carritoModal = d.querySelector('#ver');
// console.log(ListadoDeProductos)




    let DivPrincipal = d.createElement('div');
    DivPrincipal.classList = 'row';
    ListadoDeProductos.appendChild(DivPrincipal)

const todosLosProductos = () => {
    for (let producto of catalogo) {

//Creamos primer Producto del carrito


        let div1 = d.createElement('div');
        div1.classList = `col-md-6 col-lg-4 ${producto.categoria} div1`;
        div1.id = producto.id
        DivPrincipal.appendChild(div1);

        let div2 = d.createElement('div');
        div2.classList = 'ajuste';
        div1.appendChild(div2);

        let img = d.createElement('img');
        img.src = producto.img[0];
        img.alt = producto.nombre;
        div2.appendChild(img);



        let div3 = d.createElement('div');
        div3.classList = 'd-flex flex-column align-items-center';
        div2.appendChild(div3);

        let h3 = d.createElement('h3');
        h3.innerHTML = producto.nombre;
        div3.appendChild(h3);

        let p = d.createElement('p');
        p.innerHTML = 'Precio: $';
        div3.appendChild(p);

        let span = d.createElement('span');
        span.innerHTML = producto.precio;
        p.appendChild(span);

        let p2 = d.createElement('p');
        p2.classList = 'desc';
        p2.innerHTML = producto.descripcion;
        div3.appendChild(p2);

        let button = d.createElement('button');
        button.classList = 'agregar'
        button.innerHTML = 'Agregar';
        button.id = 'sumar'
        button.dataset.id = producto.id;
        button.dataset.val = producto.precio;
        button.dataset.nombre = producto.nombre;
        div3.appendChild(button);

        let button2 = d.createElement('button');
        button2.classList = 'quitar'
        button2.innerHTML = 'Quitar';
        button2.id = 'restar'
        button2.dataset.id = producto.id;
        button2.dataset.val = producto.precio;
        button2.dataset.nombre = producto.nombre;
        div3.appendChild(button2);


        let agregarItems = d.querySelector('#agregar');
        let pagar = d.querySelector('#pagar');



        // //Boton agregar "anda"
        // button.addEventListener('click', () => {
        //     contador++
        //     agregar.innerHTML = contador;
        //
        //     totalAPagar += producto.precio;
        //     pagar.innerHTML = totalAPagar;
        //
        //     Carrito.push(producto)
        //     console.log(Carrito)
        //
        //
        //
        // });






        img.addEventListener('click', () => {
            let divModal = d.createElement('div');
            divModal.id = 'modalProducto';
            divModal.classList = 'modal';
            //console.log(div);


            //Agrego el div al html
            d.querySelector('body').appendChild(divModal);


            let a = d.createElement('a');
            a.href = 'javascript:void(0)';
            a.innerHTML = 'X';

            divModal.appendChild(a)



            let divCarrousel = d.createElement('div');
            divCarrousel.id = 'carouselExampleIndicators';
            divCarrousel.classList = 'carousel slide';
            divCarrousel.setAttribute('data-bs-ride', 'carousel')

            divModal.appendChild(divCarrousel);

            let divModal2 = d.createElement('div');
            divModal2.classList = 'carousel-indicators';

            divCarrousel.appendChild(divModal2);

            let botonModal = d.createElement('button');
            botonModal.type = 'button';
            botonModal.classList = 'active';
            botonModal.setAttribute('aria-current', 'true')
            botonModal.setAttribute('aria-label', 'Slide 1')
            botonModal.setAttribute('data-bs-target', '#carouselExampleIndicators');
            botonModal.setAttribute('data-bs-slide-to', '0');
            divModal2.appendChild(botonModal);


            let botonModal2 = d.createElement('button');
            botonModal2.type = 'button';
            botonModal2.setAttribute('aria-label', 'Slide 2')
            botonModal2.setAttribute('data-bs-target', '#carouselExampleIndicators');
            botonModal2.setAttribute('data-bs-slide-to', '1');
            divModal2.appendChild(botonModal2);


            let divInner = d.createElement('div');
            divInner.classList = 'carousel-inner';
            divCarrousel.appendChild(divInner);

            let divImagen = d.createElement('div');
            divImagen.classList = 'carousel-item active arreglo';
            divInner.appendChild(divImagen);


            let imgCarrousel = d.createElement('img')
            imgCarrousel.src = producto.img[0];
            imgCarrousel.classList = 'd-block w-100';
            imgCarrousel.alt = producto.descripcion;
            divImagen.appendChild(imgCarrousel);

            let divImg2 = d.createElement('div');
            divImg2.classList = 'carousel-item arreglo';
            divInner.appendChild(divImg2);

            let imgCarrousel2 = d.createElement('img')
            imgCarrousel2.src = producto.img[1];
            imgCarrousel2.classList = 'd-block w-100';
            imgCarrousel2.alt = producto.descripcion;
            divImg2.appendChild(imgCarrousel2);


            let botonPrev = d.createElement('button');
            botonPrev.setAttribute('data-bs-target', '#carouselExampleIndicators');
            botonPrev.setAttribute('data-bs-slide', 'prev');
            botonPrev.classList = 'carousel-control-prev';
            botonPrev.type = 'button';

            divCarrousel.appendChild(botonPrev);

            let spanPrev = d.createElement('span');
            spanPrev.classList = 'carousel-control-prev-icon';
            spanPrev.setAttribute('aria-hidden', 'true')
            botonPrev.appendChild(spanPrev);

            let spanPrev2 = d.createElement('span');
            spanPrev2.setAttribute('aria-hidden', 'true')
            spanPrev2.classList = 'visually-hidden';
            spanPrev2.innerHTML = 'Previous';
            botonPrev.appendChild(spanPrev2);

            let botonPrev2 = d.createElement('button');
            botonPrev2.setAttribute('data-bs-target', '#carouselExampleIndicators');
            botonPrev2.setAttribute('data-bs-slide', 'next');
            botonPrev2.classList = 'carousel-control-next';
            botonPrev2.type = 'button';

            divCarrousel.appendChild(botonPrev2);

            let spanNext = d.createElement('span');
            spanNext.classList = 'carousel-control-next-icon';
            botonPrev2.appendChild(spanNext);

            let spanNext2 = d.createElement('span');
            spanNext2.classList = 'visually-hidden';
            spanNext2.innerHTML = 'Next'
            botonPrev2.appendChild(spanNext2);





            let h3Modal = d.createElement('h3');
            h3Modal.innerHTML = producto.nombre;

            divModal.appendChild(h3Modal);

            let pModal = d.createElement('p');
            pModal.innerHTML = 'Precio: $';

            divModal.appendChild(pModal);

            let spanModal = d.createElement('span');
            spanModal.innerHTML = producto.precio;

            pModal.appendChild(spanModal);


            let descModal = d.createElement('p');
            descModal.innerHTML = producto.descripcion;

            divModal.appendChild(descModal);

            let buttonModal = d.createElement('button');
            buttonModal.classList = 'agregar'
            buttonModal.innerHTML = 'Agregar';
            buttonModal.id = 'sumarModal'
            divModal.appendChild(buttonModal);

            let buttonModal2 = d.createElement('button');
            buttonModal2.classList = 'quitar'
            buttonModal2.innerHTML = 'Quitar';
            buttonModal2.id = 'restarModal'
            divModal.appendChild(buttonModal2);


            window.onkeydown = function (e) {

                if (e.key === 'Escape'){
                    divModal.remove()
                }

            }


            //Programo el cierre
            a.addEventListener('click', (e) => {
                divModal.remove()
            })



            buttonModal.addEventListener('click', () => {
                contador++
                agregarItems.innerHTML = contador;

                Carrito.totalAPagar += producto.precio;
                pagar.innerHTML = totalAPagar;

                Carrito.push(producto)
                console.log(Carrito)



            })


        })



    }
}

todosLosProductos();


    //ESTABA ACA


    let reset = d.querySelector('#eliminar');

    reset.addEventListener('click', () => {
        localStorage.clear()
        location.reload();
    })


let pCarrito;

let liCarrito;

let ulCarrito;


carritoModal.addEventListener('click', (e) =>{


    let divCarrito = d.createElement('div');
    divCarrito.id = 'modalCarrito';
    divCarrito.classList = 'modal class="modal container-fluid"';

    d.body.appendChild(divCarrito);


    let aCarrito = d.createElement('a');
    aCarrito.href = 'javascript:void(0)';
    aCarrito.innerHTML = 'X';

    divCarrito.appendChild(aCarrito);

    //Programo el cierre
    aCarrito.addEventListener('click', (e) => {
        divCarrito.remove()
    })





    pCarrito = d.createElement('p');
    pCarrito.innerHTML = `Items: ${Carrito.totalItems} - Total: $${Carrito.totalAPagar}`;



    divCarrito.appendChild(pCarrito);

    let divCarrito2 = d.createElement('div');
    divCarrito2.classList = 'row row_carrito';

    divCarrito.appendChild(divCarrito2);




    ulCarrito = d.createElement('ul');
    ulCarrito.classList = 'row ul';
    divCarrito.appendChild(ulCarrito);


    for (let compras of Carrito.detalle){

        liCarrito = d.createElement('li');
        liCarrito.classList = 'col-12';

            liCarrito.innerHTML = `${compras[0]} - $ ${compras[1]} x ${compras[3]+2}`

            ulCarrito.appendChild(liCarrito);


    }

    let buttonCarrito = d.createElement('button');
    buttonCarrito.classList = 'finalizar'
    buttonCarrito.innerHTML = 'Finalizar compra';
    buttonCarrito.id = 'sumarCarrito'
    divCarrito.appendChild(buttonCarrito);

    let buttonCarrito2 = d.createElement('button');
    buttonCarrito2.classList = 'volver'
    buttonCarrito2.innerHTML = 'Volver';
    buttonCarrito2.id = 'volverCarrito'
    divCarrito.appendChild(buttonCarrito2);

    window.onkeydown = function (e) {

        if (e.key === 'Escape'){
            divCarrito.remove()
        }

    }

    buttonCarrito2.addEventListener('click', () =>{
        divCarrito.remove()
    });



    buttonCarrito.addEventListener('click', (qualifiedName, value) => {

        divCarrito.remove();

        let aside = d.createElement('aside');
        d.body.appendChild(aside);


        let divFormulario = d.createElement('div');
        divFormulario.id = 'modalCarrito';
        divFormulario.classList = 'modal';

        aside.appendChild(divFormulario);

        let aFormulario = d.createElement('a');
        aFormulario.href = 'javascript:void(0)';
        aFormulario.innerHTML = 'X';

        //Programo el cierre
        aFormulario.addEventListener('click', (e) => {
            divFormulario.remove()
        })

        divFormulario.appendChild(aFormulario);

        let formFormulario = d.createElement('form');
        formFormulario.action = 'enviar_formulario.php';
        formFormulario.method = 'post';
        formFormulario.enctype = 'application/x-www-form-urlencoded';
        formFormulario.classList = 'row';

        divFormulario.appendChild(formFormulario);


        let divFormulario2 = d.createElement('div');
        divFormulario2.classList = 'col-10 m-auto mt-5';

        formFormulario.appendChild(divFormulario2);

        let divForumalio3 = d.createElement('div');
        divForumalio3.classList = 'mb-3';

        divFormulario2.appendChild(divForumalio3);


        let labelFormulario = d.createElement('label');
        labelFormulario.htmlFor = 'Nombre_Apellido';
        labelFormulario.classList = 'form-label';
        labelFormulario.innerHTML = 'Nombre y Apellido';

        divForumalio3.appendChild(labelFormulario);

        let inputFormulario = d.createElement('input');
        inputFormulario.type = 'text';
        inputFormulario.classList = 'form-control';
        inputFormulario.id = 'Nombre_Apellido';
        inputFormulario.placeholder = 'Nombre y Apellido';
        inputFormulario.name = 'nombre';
        inputFormulario.setAttribute('required', value);

        divForumalio3.appendChild(inputFormulario);


        let divForumalio4 = d.createElement('div');
        divForumalio4.classList = 'mb-3';

        divFormulario2.appendChild(divForumalio4);


        let labelFormulario1 = d.createElement('label');
        labelFormulario1.htmlFor = 'Su_Email';
        labelFormulario1.classList = 'form-label';
        labelFormulario1.innerHTML = 'Email';

        divForumalio4.appendChild(labelFormulario1);

        let inputFormulario1 = d.createElement('input');
        inputFormulario1.type = 'email';
        inputFormulario1.classList = 'form-control';
        inputFormulario1.id = 'Su_Email';
        inputFormulario1.placeholder = 'name@example.com';
        inputFormulario1.name = 'Email';
        inputFormulario1.setAttribute('required', value);

        divForumalio4.appendChild(inputFormulario1);


        let divForumalio5 = d.createElement('div');
        divForumalio5.classList = 'mb-3';

        divFormulario2.appendChild(divForumalio5);

        let labelFormulario2 = d.createElement('label');
        labelFormulario2.htmlFor = 'Telefono';
        labelFormulario2.classList = 'form-label';
        labelFormulario2.innerHTML = 'Telefono';

        divForumalio5.appendChild(labelFormulario2);

        let inputFormulario2 = d.createElement('input');
        inputFormulario2.type = 'number';
        inputFormulario2.classList = 'form-control';
        inputFormulario2.id = 'Telefono';
        inputFormulario2.placeholder = '1122223333';
        inputFormulario2.name = 'telefono';
        inputFormulario2.setAttribute('min', '1100000000')
        inputFormulario2.setAttribute('max', '1199999999')
        inputFormulario2.setAttribute('required', value);

        divForumalio5.appendChild(inputFormulario2);


        let divForumalio6 = d.createElement('div');
        divForumalio6.classList = 'mb-3';

        divFormulario2.appendChild(divForumalio6);

        let labelFormulario3 = d.createElement('label');
        labelFormulario3.htmlFor = 'direccion';
        labelFormulario3.classList = 'form-label';
        labelFormulario3.innerHTML = 'Lugar de entrega';

        divForumalio6.appendChild(labelFormulario3);


        let inputFormulario3 = d.createElement('input');
        inputFormulario3.type = 'text';
        inputFormulario3.classList = 'form-control';
        inputFormulario3.id = 'direccion';
        inputFormulario3.placeholder = 'Dirección...';
        inputFormulario3.name = 'Direccion';
        inputFormulario3.setAttribute('required', value);

        divForumalio6.appendChild(inputFormulario3);


        let divForumalio7 = d.createElement('div');
        divForumalio7.classList = 'mb-3';

        divFormulario2.appendChild(divForumalio7);


        let labelFormulario4 = d.createElement('label');
        labelFormulario4.htmlFor = 'Fecha';
        labelFormulario4.classList = 'form-label';
        labelFormulario4.innerHTML = 'Fecha de entrega';

        divForumalio7.appendChild(labelFormulario4);

        let inputFormulario4 = d.createElement('input');
        inputFormulario4.type = 'date';
        inputFormulario4.classList = 'form-control';
        inputFormulario4.id = 'Fecha';
        inputFormulario4.name = 'fecha';


        divForumalio7.appendChild(inputFormulario4);



        let divForumalio8 = d.createElement('div');
        divForumalio8.classList = 'mb-3';

        divFormulario2.appendChild(divForumalio8);

        let labelFormulario5 = d.createElement('label');
        labelFormulario5.htmlFor = 'ccn';
        labelFormulario5.innerHTML = 'Numero Tarjeta de Credito:';

        divForumalio8.appendChild(labelFormulario5);


        let inputFormulario5 = d.createElement('input');
        inputFormulario5.type = 'tel';
        inputFormulario5.classList = 'form-control';
        inputFormulario5.id = 'ccn';
        inputFormulario5.inputMode = 'numeric';
        inputFormulario5.autocomplete = 'cc-number';
        inputFormulario5.placeholder = 'xxxx xxxx xxxx xxxx';
        inputFormulario5.setAttribute('required', value);


        divForumalio8.appendChild(inputFormulario5);


        let divForumalio9 = d.createElement('div');
        divForumalio9.classList = 'inputs';

        divFormulario2.appendChild(divForumalio9);


        let inputFormulario6 = d.createElement('input');
        inputFormulario6.type = 'submit';
        inputFormulario6.value = 'Enviar';
        inputFormulario6.classList = 'finalizar mb-3';

        divForumalio9.appendChild(inputFormulario6);

        let inputFormulario7 = d.createElement('input');
        inputFormulario7.id = 'cerrar';
        inputFormulario7.value = 'Volver';
        inputFormulario7.classList = 'volver mb-3';
        inputFormulario7.type = 'submit';

        divForumalio9.appendChild(inputFormulario7);


        inputFormulario6.addEventListener('click', () => {
            aside.remove();
            // location.reload();

            Carrito = {
                productosId: [],
                cantidad: [],
                totalAPagar: 0,
                totalItems: 0,
                detalle: [],
            };

            let agregarItems = d.querySelector('#agregar');
            agregarItems.innerHTML = Carrito.totalItems;

            let pagar = d.querySelector('#pagar');
            pagar.innerHTML = Carrito.totalAPagar;

        })


        let cerrarForm = d.querySelector('#cerrar');

        cerrarForm.addEventListener('click', () => {

            aside.remove();

        })

        window.onkeydown = function (e) {

            if (e.key === 'Escape'){
                aside.remove()
            }

        }


    })



})


let todas = d.querySelector('#todas');

    todas.addEventListener('click', () => {

        borrarTodas();
        todosLosProductos();
        funcionAgregar();
        botonQuitar();
    })


const borrarTodas = () => {
        let divPrincipal = d.getElementsByClassName('div1');

        for (let borrar of divPrincipal){
            borrar.remove();
        }

    for (let borrar of divPrincipal){
        borrar.remove();
    }

    for (let borrar of divPrincipal){
        borrar.remove();
    }

    for (let borrar of divPrincipal){
        borrar.remove();
    }
}


const elimiarProductosRopa = () => {

        let clase0 = d.getElementsByClassName('0');

        for (let primerClase of clase0){
            //console.log(primerClase);
            primerClase.remove();
        }

        for (let primerClase of clase0){
            //console.log(primerClase);
            primerClase.remove();
        }

}

const elimiarProductosInvierno = () => {

    let clase1 = d.getElementsByClassName('1');

    for (let primerClase of clase1){
        //console.log(primerClase);
        primerClase.remove();
    }

    for (let primerClase of clase1){
        //console.log(primerClase);
        primerClase.remove();
    }

}

const elimiarProductosAccesorio = () => {

    let clase2 = d.getElementsByClassName('2');

    for (let primerClase of clase2){
        //console.log(primerClase);
        primerClase.remove();
    }

    for (let primerClase of clase2){
        //console.log(primerClase);
        primerClase.remove();
    }

}



const generadorDeBanner = () => {
    let divPromo = d.createElement('div');
    divPromo.classList = 'modal';
    divPromo.id = 'Promo1';

    d.body.appendChild(divPromo);


    let aPromo = d.createElement('a');
    aPromo.href = 'javascript:void(0)';
    aPromo.innerHTML = 'X';

    divPromo.appendChild(aPromo);


    let num = Math.floor(Math.random() *3);



    let imgPromo = d.createElement('img');
    imgPromo.src = bannersPromo[`${num}`].imagen;
    console.log(num)
    imgPromo.alt = 'Oferta de Calzas para invierno';
    imgPromo.classList = 'bannerModal';

    divPromo.appendChild(imgPromo);

    let botonBanner = d.createElement('button');
    botonBanner.dataset.val = bannersPromo[`${num}`].precio;
    botonBanner.dataset.id = bannersPromo[`${num}`].id;
    botonBanner.dataset.nombre = bannersPromo[`${num}`].nombre;
    botonBanner.classList = 'agregar';
    botonBanner.innerHTML = 'Agregar al Carrito'

    divPromo.appendChild(botonBanner);


    funcionAdd(botonBanner);
    //funcionAgregar();

    aPromo.addEventListener('click', (e) => {
        divPromo.remove()
    })

    setTimeout(() => {
        divPromo.remove()
    }, 10000)
}



let ropa = d.querySelector('#ropa');

    ropa.addEventListener('click', () => {




        borrarTodas();
        todosLosProductos();
        elimiarProductosInvierno();
        elimiarProductosAccesorio();

        funcionAgregar();
        botonQuitar();



        generadorDeBanner();




    })

let invierno = d.querySelector('#invierno');

    invierno.addEventListener('click', () => {





        borrarTodas();
        todosLosProductos();

        elimiarProductosRopa();
        elimiarProductosAccesorio();

        funcionAgregar();
        botonQuitar();

        generadorDeBanner();

    })

let accesorios = d.querySelector('#accesorios');

    accesorios.addEventListener('click', () => {



        borrarTodas();
        todosLosProductos();

        elimiarProductosInvierno();
        elimiarProductosRopa();


        funcionAgregar();
        botonQuitar();

        generadorDeBanner();

    })


let botones = d.getElementsByClassName('agregar');
//console.log(botones);


const funcionAdd = (botoncito) => {
        botoncito.addEventListener('click', (e) => {
        //console.log(e.target.dataset.id);
        //console.log(e.target.dataset.val);

        let id = parseInt(e.target.dataset.id);
        let val = parseInt(e.target.dataset.val);

        //console.log(carrito.productosId.indexOf(id));

        // Verifico si ya existe el producto:
        let indice = Carrito.productosId.indexOf(id);
        //console.log(id);
        //console.log(val);
            console.log(indice)
        if (indice !== -1) {
            // Si existe, actualizo el índice de la cantidad:
            Carrito.cantidad[indice]++;
            //console.log(Carrito.cantidad)



            //console.log(Carrito.detalle[indice][1])


            Carrito.detalle[indice][1] += val;
            Carrito.detalle[indice][3]++;




            //Carrito.detalle.push([e.target.dataset.nombre, val, id, Carrito.cantidad[indice]]);
        } else {
            // Si no existe, creo el índice en productosId y cantidad:
            Carrito.productosId.push(id);
            Carrito.cantidad.push(1);
            Carrito.detalle.push([e.target.dataset.nombre, val, id, indice]);
            //Carrito.detalle.push(e.target.dataset.val);
        }
        // Actualizo el total:
        Carrito.total = parseInt(Carrito.total) + val;
        Carrito.totalItems++;

        let agregarItems = d.querySelector('#agregar');
        agregarItems.innerHTML = Carrito.totalItems;

        let pagar = d.querySelector('#pagar');
        Carrito.totalAPagar += val;
        pagar.innerHTML = Carrito.totalAPagar;

        localStorage.Carrito = JSON.stringify(Carrito)
    });
}



const funcionAgregar = () => {
    for (let botoncito of botones){
        funcionAdd(botoncito);
    }
        // botoncito.addEventListener('click', (e) => {
        //     //console.log(e.target.dataset.id);
        //     //console.log(e.target.dataset.val);
        //
        //     let id = parseInt(e.target.dataset.id);
        //     let val = parseInt(e.target.dataset.val);
        //
        //     //console.log(carrito.productosId.indexOf(id));
        //
        //     // Verifico si ya existe el producto:
        //     let indice = Carrito.productosId.indexOf(id);
        //     console.log(id);
        //     console.log(val);
        //     if (indice !== -1) {
        //         // Si existe, actualizo el índice de la cantidad:
        //         Carrito.cantidad[indice]++;
        //         console.log(Carrito.cantidad)
        //         Carrito.detalle.push([e.target.dataset.nombre, e.target.dataset.val, e.target.dataset.id]);
        //     } else {
        //         // Si no existe, creo el índice en productosId y cantidad:
        //         Carrito.productosId.push(id);
        //         Carrito.cantidad.push(1);
        //         Carrito.detalle.push([e.target.dataset.nombre, e.target.dataset.val, e.target.dataset.id]);
        //         //Carrito.detalle.push(e.target.dataset.val);
        //     }
        //     // Actualizo el total:
        //     Carrito.total = parseInt(Carrito.total) + val;
        //     Carrito.totalItems++;
        //
        //     agregar.innerHTML = Carrito.totalItems;
        //
        //     Carrito.totalAPagar += val;
        //     pagar.innerHTML = Carrito.totalAPagar;
        // });




}

funcionAgregar();



let botones2 = d.getElementsByClassName('quitar');


const funcionTake = (botoncito2) => {
    botoncito2.addEventListener('click', (e) => {
        let id = parseInt(e.target.dataset.id);
        //console.log(id);
        let val = parseInt(e.target.dataset.val);
        // Verifico si ya existe el producto:
        let indice = Carrito.productosId.indexOf(id);
        // console.log(indice);


        if (indice !== -1) {
            // Verifico si llegó a cero:
            if (Carrito.cantidad[indice] > 0) {
                // Si existe, actualizo el índice de la cantidad:
                Carrito.cantidad[indice]--;
                // Actualizo el total:
                Carrito.totalAPagar = parseInt(Carrito.totalAPagar) - val;
                Carrito.totalItems--;



                let agregarItems = d.querySelector('#agregar');
                let pagar = d.querySelector('#pagar');
                agregarItems.innerHTML = Carrito.totalItems;
                pagar.innerHTML = Carrito.totalAPagar;

                Carrito.detalle[indice][1] -= val;
                Carrito.detalle[indice][3]--;

                for (let productoA of Carrito.detalle){
                    //console.log(productoA)
                    if (parseInt(productoA[2]) === id && Carrito.detalle[indice][1] === 0){

                        let indice2 = Carrito.detalle.indexOf(productoA);
                        console.log(indice2);




                        for (let buscarCantidad of Carrito.cantidad) {

                            if (buscarCantidad === 0){

                                Carrito.cantidad.splice(indice2, 1);


                            }


                        }



                        for (let buscarId of Carrito.productosId){

                        if (buscarId === productoA[2]){

                            Carrito.productosId.splice(indice2, 1);


                            }

                        }

                        Carrito.detalle.splice(indice2, 1);

                        localStorage.Carrito = JSON.stringify(Carrito)
                        return;

                    }

                }




            }
        }



    });
}



const botonQuitar = () => {
    for (let botoncito2 of botones2) {
        funcionTake(botoncito2)
    }
}

botonQuitar();






















