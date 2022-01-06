import React from 'react'
import { useSelector } from 'react-redux';


function Navbar() {
    //const cart_value=useSelector(store=>store)
    const cart_value=useSelector(store=>store.cartValue)

    return (
        <>
            <h1>Number of the item in the cart: {cart_value.cart_count}</h1>
        </>
    )
}

export default Navbar
