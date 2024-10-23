
import React, { useContext, useEffect, useState } from 'react'
import Card from '../components/Card'
import { ProductosContext } from '../context/ProductoContext'
import { CarritoContext } from '../context/CarritoContext'

const CompraPage = () => {

    const { agregarCompra, eliminarCompra } = useContext(CarritoContext)

    const { productos } = useContext( ProductosContext )

    const handleAgregar = (compra) => {
        agregarCompra(compra)
    }  
    const handleQuitar = (id) => {
        eliminarCompra(id)
    }

    return (
        <>
            <h1>Comprar</h1>
            <hr />


            {productos.map(producto => (
                <Card
                key={producto.id}
                imagen={producto.image}
                titulo={producto.title}
                descripcion={producto.description}
                precio={producto.price}
                handleAgregar={()=> handleAgregar(producto)}
                handleQuitar={()=> handleQuitar(producto.id)}
                ></Card>
            ))}
        </>
    )
}

export default CompraPage
