import React from "react";
import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import image from '../Logoo.png'
import {NavbarBrand} from "react-bootstrap"

import "./navbar.css";

export const Navbar = () =>{
    return (
    <div className="navbar" >
        <div className="shopTitle">
                <h1>TFT Shop</h1>
            </div>
        <div>
            <img className="myImage" src={image} alt='mySvgImage' />
        </div>
        <div className="links">
            <Link to="/login"> Sign In</Link>
            <Link to="/"> Shop </Link>
            <Link className="linkcart" to="/cart">
                
                
                <ShoppingCart className="shopcart" size={32} />  
            </Link>

        </div>
    </div>
   )
}