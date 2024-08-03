import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import bolsa_icon from '../Assets/icons8-shopping-bag-100.png';
import login from '../Assets/icons8-usuario-48.png';
import { Link } from 'react-router-dom';
export const Navbar = () => {

    const [menu,setMenu] = useState("shop");

  return (
    <div class = 'navbar'>
        <div className = "nav-logo">
            <img src={logo} width={105} height={60} alt="" />
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("tienda")}}><Link style={{textDecoration: 'none'}} to='/'>Tienda</Link>{menu==="tienda"? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("hombres")}}><Link style={{textDecoration: 'none'}} to='/hombres'>Hombre</Link>{menu==="hombres"? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mujeres")}}><Link style={{textDecoration: 'none'}} to='/mujeres'>Mujer</Link>{menu==="mujeres"? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("niños")}}><Link style={{textDecoration: 'none'}} to='/niños'>Niños</Link>{menu==="niños"? <hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link style={{textDecoration: 'none'}} to='/login'><img src={login} height={35} alt=""/></Link>
            <Link style={{textDecoration: 'none'}} to='/carrito'><img src={bolsa_icon} height={30} alt="" /></Link>
            <div className="nav-cart-count">0</div> 
        </div>
    </div>
  )
}
