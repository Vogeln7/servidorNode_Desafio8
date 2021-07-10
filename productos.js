class Producto{
    productos=[];
    idProducto=0;
        
    nuevoProducto(producto){
        this.productos.push({
            titulo: producto.title,
            precio: producto.price,
            urlFoto: producto.thumbnail,
            id:++this.idProducto
        });
        return(this.productos[this.idProducto-1]); 
    }

    get productosListados(){
        if (this.productos.length==0){
            throw new Error("No existen productos");
        }
        return this.productos;
    }
    filtrarPorId(id){
        return this.productos[id-1];
    }
}

module.exports= new Producto;