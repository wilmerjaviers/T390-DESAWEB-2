'use client'
import React, { useContext, useEffect, useState } from 'react'
import { PlantillaReact } from '../Modelos/PlantillaReact'
import { contextCarrito } from '../Contexto/ContextCarrito'
import { Producto } from '../Modelos/Producto'

//children (renderizamos los componente /consumidores)
//dar funcionalidad a la definicion del contexto
//exportar contexto

export default function ProviderCarrito({children}:PlantillaReact) {

 const [producto, setProducto]= useState<Producto[]>([
    {
        idProducto:1,
        nombreProducto:'Arroz',
        precioProducto:10,
        isvProducto:10.5,
        imgProducto:''
    },
    {
        idProducto:2,
        nombreProducto:'papas',
        precioProducto:10,
        isvProducto:10.5,
        imgProducto:''
    },
    {
        idProducto:3,
        nombreProducto:'zanahorias',
        precioProducto:10,
        isvProducto:10.5,
        imgProducto:''
    },
    {
        idProducto:4,
        nombreProducto:'pescado',
        precioProducto:10,
        isvProducto:10.5,
        imgProducto:''
    }
 ]);
 const [productoCarrito, setProductoCarrito]= useState<Producto[]>([]);
 
 function agregarCarrito(producto:Producto){
        alert('prodcuto agregado al carrito')
        setProductoCarrito([...productoCarrito,producto])
 }


//agregar producto por id
 function agregarCarritoPorId(idProducto: number){
        const productoEncontrado = producto.find(p => p.idProducto === idProducto);
        if (productoEncontrado) {
            alert('producto agregado al carrito')
            setProductoCarrito([...productoCarrito, productoEncontrado])
        }
 }

  
// eliminar del carrito

function eliminarDelCarrito(idProducto: number) {
  
//correccion al error de eliminar todos los productos 
  const indiceAEliminar = productoCarrito.findIndex(
    producto => producto.idProducto === idProducto
  );
  
 
  if (indiceAEliminar !== -1) {
   
    const nuevosProductos = [...productoCarrito];
    
    
    nuevosProductos.splice(indiceAEliminar, 1);
    
    
    setProductoCarrito(nuevosProductos);
    alert('Producto eliminado del carrito');
  }
}


 useEffect(()=>{
        console.log(productoCarrito)
 },[productoCarrito])

  return (
    <contextCarrito.Provider value={{
        producto,
        productoCarrito,
        setProductoCarrito,
        agregarCarrito, 
        agregarCarritoPorId,
        eliminarDelCarrito
    }}> 
        {children}
    </contextCarrito.Provider>
   
  )
}


export function useContextCarrito(){
    //hook
    return useContext(contextCarrito)
}