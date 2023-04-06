import React from 'react';
import "./Footer.css"
import facebook from '../../assets/images/facebook.png'
import linkedin from '../../assets/images/linkedin.png'
import instagram from '../../assets/images/instagram.jpg'
import apple from '../../assets/images/apple.png'
import gpay from '../../assets/images/gpay.png'


export function Footer() {

    return (
        
<footer className="rodape_painel mt-5">
    <div className="container">
        <div className="row">
        <div className='col-sm-3'>
            <ul className="ul_interior">
                    <li>
                        <h2>Biblioteca Virtual</h2>
                    </li>
                    <li className="Biblioteca"><a href="#">Explore o Acervo</a></li>
                    <li className="Biblioteca"><a href="/Ajuda">Ajuda</a></li>              
            </ul>
        </div>
        <div className='col-sm-3'>
            <ul className="ul_interior">
                    <li>
                        <h2>Quem somos</h2>
                    </li>
                    <li className="quemSomos"><a href="#">Quem Somos</a></li>
                    <li className="quemSomos"><a href="#">Editoras Parceiras</a></li>
            </ul>
        </div>
        <div className='col-sm-3'>
            <ul className="ul_interior" >
                    <li>
                        <h2>Conta</h2>
                    </li>
                    <li className="conta"><a href="/Login">Gerenciar conta</a></li>
                    <li className="conta"><a href="/Blog">Blog</a></li>
            </ul>
        </div>       
        <div className='col-sm-3'>
            <h2> Redes sociais:</h2>
            <ul className="rede_social" >
                <li><a href="https://www.facebook.com" target="_blank"><img src={facebook} className=" lazyloaded" alt="Facebook" width="30" height="30" ></img></a></li>
                <li><a href="https://www.linkedin.com" target="_blank"><img src={linkedin} className=" lazyloaded" alt="Linkedin" width="30" height="30" ></img></a></li>
                <li><a href="https://www.instagram.com" target="_blank"><img src={instagram} className=" lazyloaded" alt="Instagram" width="30" height="30" ></img></a></li>

            </ul>
        </div>
        </div>
    </div>
    <div className="row">
        <ul className="downloadapp" >
                <li>
                    Disponível para download
                </li>
                <li><a href="https://apps.apple.com" target="_blank" title="Ir Para a Apple Store" aria-label="Baixar Aplicativo na Apple Store"><img src={apple} className=" lazyloaded" alt="" width="110" height="36" ></img></a></li>
                <li><a href="https://play.google.com/store/" target="_blank" title="Ir Para a Play Store" aria-label="Baixar Aplicativo na Play Store"><img src={gpay} className=" lazyloaded" alt="" width="110" height="36" ></img></a></li>
        </ul>
    </div>
<hr/>
    <div className="row">
        <span className="rodape__texto"> © 2023 Copyright: SoulCode </span>

        <ul className="listainline" >
                <li><a href="/PoliticaPrivacidade">Politica de Privacidade</a></li>
                <li><a href="#">Termos e condições</a></li>
        </ul>
    </div>
</footer>
    );
}
    