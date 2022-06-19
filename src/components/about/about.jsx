import React from "react";
import './about.css'
import ME from '../../assets/about-me2.jpg'
import {BsAwardFill} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {MdOutlineFolderSpecial} from 'react-icons/md'

const About = () => {
    return (
        <section id="about">
            <h2>Sobre mim</h2>
            <div className="container about__container">
                <div className="about__me">
                    <img src={ME} alt='About' />
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <BsAwardFill className="about__icon" />
                            <h5>Experiência</h5>
                            <small>1 ano </small>
                        </article>
                        <article className="about__card">
                            <FiUsers className="about__icon" />
                            <h5>Clientes</h5>
                            <small>10+ Worldwide</small>
                        </article>
                        <article className="about__card">
                            <MdOutlineFolderSpecial className="about__icon" />
                            <h5>Projetos</h5>
                            <small>15+ Completos</small>
                        </article>
                    </div>

                   <p>
                   Sou estudante do curso de Análise e Desenvolvimento, em processo de transição de carreira, nesse sentido busco desafios profissionais que venham enriquecer e fortalecer meus conhecimentos como desenvolvedora. Apaixonada por tecnologia, sou dedicada, focada e  estou em busca de aprender e evoluir sempre. 
                   Experiências em programação com: HTML, CSS, WordPress, Bootstrap, JavaScrip, Typescript, NodeJS, ReactJ,  styled-components,  MUI styled, MongoDB, Moongose, GraphQL, SQL,  PostgreSQL.
                   </p>
                   <a href="#contact" className="btn btn-primary">Vamos conversar!</a>
                </div>
            </div>
        </section>
    )
}

export default About