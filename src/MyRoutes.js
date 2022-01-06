import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './pages/Nav'
import Cart from './pages/Cart'
import Main from './pages/Main'

function MyRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path='/Nav' element={<Nav />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default MyRoutes
