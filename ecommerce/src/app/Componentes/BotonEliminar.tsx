/*
import React from 'react'
import { Producto } from '../Modelos/Producto'

export default function BotonEliminar(item:Producto) {
  return (
    <>
            <button type='button' className='btn btn-danger' >Eliminar Producto</button>

    </>
  )
}*/


'use client'
import React from 'react'
import { useContextCarrito } from '../Provider/ProviderCarrito'

export default function BotonEliminar({ idProducto }: { idProducto: number }) {
  const { eliminarDelCarrito } = useContextCarrito()
  
  return (
    <>
      <button 
        type='button' 
        className='btn btn-danger' 
        onClick={() => eliminarDelCarrito(idProducto)}
      >
        Eliminar Producto
      </button>
    </>
  )
}