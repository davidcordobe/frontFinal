
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
        <nav className="nav">
            <NavLink 
            to='/'
            className={({isActive}) => (isActive ? 'link active' : 'link')}
            >INICIO</NavLink>
            <NavLink 
            to='/productos'
            className={({isActive}) => (isActive ? 'link active' : 'link')}
            >PRODUCTOS</NavLink>
            <NavLink 
            to='/formulario'
            className={({isActive}) => (isActive ? 'link active' : 'link')}
            >CONTACTO</NavLink>
            
            <Outlet />
        </nav>
    )
}


export default Layout ;