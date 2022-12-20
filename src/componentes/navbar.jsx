import { Link } from "react-router-dom";
import React from 'react'

export const navbar = () => {
    return (
        <div className="">
            <Link to='/'>INICIO</Link>
            <Link to='/productos'>PRODUCTOS</Link>
            <Link to='/formulario'>CONTACTO</Link>
        </div>
    )
}


export default navbar ;