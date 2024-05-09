// localStorage  tiene varios metodos.
// sessionStorage la diferencia entre el local y session, funcionan de la misma forma,
// el localStorage lo que tiene que cuando guardas la informacion y apagas el compuatdor o
// reinicias la informacion no se Pierde, en cambio el sessionStorage si, si se apaga el computador se pierde la informacion
// por lo tanto en ciertos casos tenemos que tener en cuenta esta condicion,


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


// como hago para que me lo traiga como relamente es?? ya que el JSON.stringify le da la estructura par guardarlo en el  localStorage.
// Ahora que metodo usamos para traerlo como el formato que es realmeente???