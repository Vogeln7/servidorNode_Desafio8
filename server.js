const express=require('express');

let producto=require('./productos');
const app=express();
app.use(express.json())

const PORT=8080;

app.get('/productos',(req,res)=>{
    res.send(producto.productosListados)
})

app.get('/productos/:id',(req,res)=>{
    let idProducto=req.params.id;
    res.send(producto.filtrarPorId(idProducto))
})

app.post('/productos/guardar',(req,res)=>{
    let productoAGuardar=req.body;    
    let productoGuardado=producto.nuevoProducto(productoAGuardar);
    res.send(productoGuardado);
})

app.listen(PORT,()=>{
    console.log(`El servidor se creó correctamente y esta escuchando peticiones en el puerto: ${PORT}`)
})