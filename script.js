
// entrega 2 array de objetos  filter find

let articulos = [
    {id: 1209, nombre:"play 5" , precio:2000000 , cantidad:7 , categoria:"consola" },
    {id: 1529, nombre:"xbox" , precio:1400000 , cantidad:12 , categoria:"consola" },
    {id: 2234, nombre:"nintento" , precio:1000000 , cantidad:5 , categoria:"consola" },
    {id: 5599, nombre:"mario bross" , precio:250000 , cantidad:11 , categoria:"video juego" },
    {id: 4677, nombre:"fornite" , precio:100000 , cantidad:34 , categoria:"video juego"},
    {id: 7689, nombre:"fifa" , precio:280000 , cantidad:75 , categoria:"video juego" },
    {id: 1123, nombre:"audifono" , precio:25000 , cantidad:20 , categoria:"accesorio" },
    {id: 1198, nombre:"microfono" , precio:80000 , cantidad:15 , categoria:"accesorio" },
    {id: 4430, nombre:"pc gamer" , precio:4000000 , cantidad:2 , categoria:"consola" },
];
console.log(articulos)

let menu= "Bienvenido a la tienda de Videojuegos \n INGRESE \n1 Seleccionar producto  \n2 Total carrito \n3 Articulos \n4 Categorias productos  \n0 para salir del menú"
let opcion = Number(prompt(menu));
let carrito= []

while(opcion !== 0){
    if (opcion ===1){
        let idArticulo= Number (prompt(listar (articulos)));
        if (articulos.some(articulo => articulo.id === idArticulo)){

            let articuloBuscado = articulos.find(articulo => articulo.id === idArticulo);
            console.log(articuloBuscado);
    
            console.log(idArticulo)
            let indiceArticulo= articulos.findIndex(articulo => articulo.id === idArticulo);
            console.log(indiceArticulo);

            if(indiceArticulo !== -1){
                 carrito.push({
                    id: articuloBuscado.id,
                    nombre: articuloBuscado.nombre,
                    precio: articuloBuscado.precio,
                    categoria: articuloBuscado.categoria
                })
            }
        } else {
            alert( "EL id ingresado no existe")
        }
    } else if (opcion ===2){
        let sumaArticulos = 0
        carrito.forEach(elemento => {
            sumaArticulos = sumaArticulos + elemento.precio 
        })
        alert("El valor de los productos es : " + sumaArticulos);

    } else if (opcion ===3){
        // recorre todos los articulos del carrito  para agregar el nombre a la variable que se va mostrar
        let mostrarCarrito = " "
        carrito.forEach(elemento => {
            mostrarCarrito = mostrarCarrito + "\n" + elemento.nombre
             
        })
        alert("Articulos: " + mostrarCarrito);

    } else if (opcion === 4){
        let categoria = prompt("consola \n video juego \n accesorio")
        let articulosCategoriaSeleccionada = carrito.filter(elemento => elemento.categoria === categoria)

        // recorre todos los articulos de la categoria seleccionada para agregar el nombre a la variable que se va mostrar
        let mostrar = " "
        articulosCategoriaSeleccionada.forEach(elemento => {
            mostrar = mostrar + "\n" + elemento.nombre
        })
        alert(mostrar)
    }

    console.log(carrito);

    opcion = Number(prompt(menu));
}

function listar (listaArticulos){
    return listaArticulos.map(articulo => articulo.id + " - " + articulo.nombre + " " + articulo.precio).join("\n")
}