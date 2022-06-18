import React from "react";
import './header.css'
import CV from '../../assets/PriscillaRarimmy-CV.pdf'

const CTA = () => {
    return(
        <div className="cta">
            <a href={CV} download className="btn">Download CV</a>
            <a href="#contact" className="btn btn-primary">Vamos conversar!</a>
        </div>
    )
}

export default CTA