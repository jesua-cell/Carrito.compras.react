import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import CarritoPage from './pages/CarritoPage'
import CompraPage from './pages/CompraPage'
import ProductosProvider from './context/ProductosProvider'
import CarritoProvider from './context/CarritoProvider'

const CarritoApp = () => {
    return (
        <ProductosProvider>
            <CarritoProvider>
                <NavBar></NavBar>
                <div className='container'>
                    <Routes>
                        <Route path='/' element={<CompraPage></CompraPage>}></Route>
                        <Route path='/carrito' element={<CarritoPage></CarritoPage>}></Route>
                        <Route path='/*' element={<navigate to='/' />}></Route>
                    </Routes>
                </div>
            </CarritoProvider>
        </ProductosProvider>
    )
}

export default CarritoApp
