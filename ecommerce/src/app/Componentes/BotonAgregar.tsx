'use client'
import React from 'react'
import { useContextCarrito } from '../Provider/ProviderCarrito'
//import { Producto } from '../Modelos/Producto'

//export default function BotonAgregar(item:Producto) {
export default function BotonAgregar({ idProducto }: { idProducto: number }) {
  const {agregarCarritoPorId} =useContextCarrito()
  return (
    <>
        <button type='button' className='btn btn-success' onClick={()=> agregarCarritoPorId(idProducto)}>Agregar Producto</button>
    </>
  )
}
