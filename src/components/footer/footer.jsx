/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './footer.css'
import {FaGithubAlt} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
    return (
    <footer>
        <a href="#" className="footer__logo">PRISCILLA</a>
        <ul className="permalinks">
            <li><a href="#">Home</a></li>
            <li><a href="#about">Sobre mim</a></li>
            <li><a href="#experiense">Experiência</a></li>
            <li><a href="#portifolio">Projetos</a></li>
            <li><a href="#contact">Contato</a></li>
        </ul>

        <div className="footer__socials">
            <a href="https://www.linkedin.com/in/priscilla-rarimmy-lopes-pereira-1174461aa/"><BsLinkedin /></a>
            <a href="https://github.com/priscillararimmy"><FaGithubAlt /></a>
            <a href="https://www.instagram.com/priscillararimmy/"><GrInstagram /></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; Todos os direitos reservados</small>
        </div>
    </footer>
    )
}

export  default Footer