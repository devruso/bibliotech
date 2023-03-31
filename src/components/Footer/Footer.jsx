import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css"


export function Footer(){

    return (
    <footer className="footer">
        <ul className="social_list">
            <li> <a href="https://facebook.com"></a> <FaFacebook/> </li>
            <li> <a href="https://instagram.com"></a><FaInstagram/> </li>
            <a href="https://linkedin.com" ><li> <FaLinkedin/> </li></a>

        </ul>
        
            <span className= "copy_right">Bibliotech</span> &copy;2023
        
    </footer>
    );
}

