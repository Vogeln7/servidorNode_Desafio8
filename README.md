# servidorNode_Desafio8
Servidor de express que permite almacenar y obtener items dentro de un array de productos almacenado en memoria.

# Info
El servidor se monta en el puerto 8080.
# Rutas
GET : localhost:8080/productos : Lista los productos guardados -- Si no hay productos devuelve error.
GET : localhost:8080/productos/:id : Muestra un producto por ID -- Si no hay cohincidencias devuelve error.
POST : localhost:8080/productos/guardar : Guarda un producto nuevo en el array productos. Recibe datos en formato JSON con el siguiente formato: {
            "title": "(Nombre Producto)",
            "price": "(Precio)",
            "thumbnail":"(url foto producto)"            
}
Retorna el objeto creado agregandole una propiedad unica ID. EJ:{
    "titulo": "Cuchara",
    "precio": 100,
    "urlFoto": "url foto producto",
    "id": 5
}

