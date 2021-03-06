import React from "react";
import './header.css'
import CTA from "./CTA";
import ME from '../../assets/dev.png'
import HeaderSocials from "./headerSocials";
const Header = () => {
    return (
       <header>
        <div className="container header__container">
        <h5>Olá, eu sou </h5>
        <h1>Priscilla Rarimmy</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
            <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">&#8595;</a>
        </div>
       </header>
    )
}

export default Header
