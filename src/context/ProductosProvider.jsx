import React from 'react'
import { ProductosContext } from './ProductoContext'
import { useEffect, useState } from 'react'

const ProductosProvider = ({children}) => {

    const [productos, setProductos] = useState([])

    const fetchProductos = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setProductos(data)
        console.log(data)
    }

    useEffect(() => {
        fetchProductos()
    }, [])

  return (
    <>
        <ProductosContext.Provider value={{productos}}>
            {children}
        </ProductosContext.Provider>
    </>
  )
}

export default ProductosProvider
