// localStorage  tiene varios metodos.
// sessionStorage la diferencia entre el local y session, funcionan de la misma forma,
// el localStorage lo que tiene que cuando guardas la informacion y apagas el compuatdor o
// reinicias la informacion no se Pierde, en cambio el sessionStorage si, si se apaga el computador se pierde la informacion
// por lo tanto en ciertos casos tenemos que tener en cuenta esta condicion,

//getItem trae lo guardado
//setItem guarda los valores

// localStorage.setItem("nombre", "andres");
// localStorage.setItem("numero", 5);
// localStorage.setItem("valor", true);
// localStorage.setItem("arreglo", [1, 2, 3, 4, 5]);
// localStorage.setItem("objeto", {nombre: "fabian", edad: 4});

// console.log(localStorage);

//podemos agregar las querramos.

//Como podemos hacer para traer esos datos a futuro-

// let numero = localStorage.getItem("numero");// esto me trae o retorna el 5

// // console.log(numero);

// console.log(typeof(numero));


// console.log(localStorage);



// para recorrer un objeto tenemos que usar un for normal, como hago?? 
// esto me dara como resultado todad las key, pero desordenadas. y no es un arreglo, es mas un objeto y no tiene orden.



// for (let i = 0; i < localStorage.length; i++) {
//     let clave = localStorage.key(i);
//     console.log(clave);
// }


//Para traer todos las claves y todos los valores voy a pedirlos por consola de esta manera

// for (let i = 0; i < localStorage.length; i++) {
//     let clave = localStorage.key(i);
//     console.log("clave", clave);
//     console.log("valor", localStorage.getItem(clave));
// }

// si queremos eliminar alguno de los datros lo quentenemos que hacer es removeItem()


// localStorage.removeItem("numero");// elimina un elemento pasado su  key

// localStorage.clear(); // elimina todo el CacheStorage

// el sessionStorage se trabaja de la misma manera que el localStorage

// sessionStorage.setItem("nombre", "german");

// // console.log(sessionStorage);
// localStorage.clear();

// JSON
// creamos una variable de un arreglo y de un objeto, y le pasamos el localStorage, y le pasamos un JSON, y lo convierto en en json,
//  y se va a guardar como un objeto y un arreglo.

// let arreglo = [1, 2, 3, 4, 5];

// localStorage.setItem("arreglo", JSON.stringify(arreglo));

// let objeto = {nombre: "fabian", edad: 4};
// localStorage.setItem("objeto", JSON.stringify(objeto) );

// console.log(arreglo);
// console.log(objeto);

// como hacemos para traer algo del localStorage po sel sessionStorage??
// si lo traemos con el localStorage.getItem nos lo traera con otro formato, para esto hay un ,metodo.

// let objeto = localStorage.getItem("objeto");
// console.log(objeto);


//JSON.parse
// como hago para que me lo traiga como relamente es?? ya que el JSON.stringify le da la estructura par guardarlo en el  localStorage.
// Ahora que metodo usamos para traerlo como el formato que es realmeente???
// Aparece el JSON.parse, este lo que hace es traer el objeto o el arreglo como era realmente, entonces hay que parsearlo.

// let objeto = JSON.parse(localStorage.getItem("objeto"));
// console.log(objeto);

// otra forma de hacerlo es guardarlo en otra variable

// let objetoString = localStorage.getItem("objeto")
// let objeto = JSON.parse(objetoString);
// console.log(objeto);

// let arregloString = localStorage.getItem("arreglo");
// let arreglo = JSON.parse(arregloString)
// console.log(arreglo);

// como guardar un arrego con varios objetos dentro

// const guardarStorage = (clave, valor) => {localStorage.setItem(clave, valor)
// };

// const productos = [
//     { id: 1, producto: "arroz", precio: 125},
//     { id: 2, producto: "fideos", precio: 70},
//     { id: 3, producto: "pan", precio: 50},
//     { id: 4, producto: "flan", precio: 100},
// ];

// for (const producto of productos) {
//     guardarStorage(producto.id, JSON.stringify(producto))
// }


// localStorage.setItem("productos", JSON.stringify(productos)
// )


//vamos hacer un ejemplo de ssionStorage

// let usuario;
// let usuarioStorage = localStorage.getItem("usuario");

// // console.log(usuarioStorage);

// if (usuarioStorage) {
//     let mensaje = `bienvenido ${usuarioStorage}`;
//     alert(mensaje);
// } else {
//     usuario = prompt("ingrese su nombre");
//     localStorage.setItem("usuario", usuario);
//     alert("bienvenido por primera vez")
// }


// que pasa si lo hacemos con ssesionStorage?

// let usuario;
// let usuarioStorage = sessionStorage.getItem("usuario");

// // console.log(usuarioStorage);

// if (usuarioStorage) {
//     let mensaje = `bienvenido ${usuarioStorage}`;
//     alert(mensaje);
// } else {
//     usuario = prompt("ingrese su nombre");
//     sessionStorage.setItem("usuario", usuario);
//     alert("bienvenido por primera vez")
// }


const productos = [
    { id: 1, producto: "arroz", precio: 125},
    { id: 2, producto: "fideos", precio: 70},
    { id: 3, producto: "pan", precio: 50},
    { id: 4, producto: "flan", precio: 100},
];


let carritoStorage = localStorage.setItem("carrito");
let carrito = [];

if (carritoStorage) {
    carrito = JSON.parse(carritoStorage);
}

if (carrito.length > 0) {
    carrito.forEach(elemento => {
        let item = document.createElement("div");
        item.innerHTML = `
                            <h2>id: ${elemento.id}</h2>
                            <p>nombre: ${elemento.producto}</p>
                            <b>$ ${elemento.precio}</b>
        `;
    });

    document.body.append(item);

}else {
    let item = document.createElement("div");
    item.innerHTML = "no hay productos";
    
    document.body.append(item);
};

let boton = document.createElement("boton");
boton.addEventListener("click", () => {
    localStorage.clear();
})







