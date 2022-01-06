import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">cart</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Nav
