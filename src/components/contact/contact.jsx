/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlineWhatsApp} from 'react-icons/ai'

const Contact = () => {
    return (
        <section id="contact">
            <h2>Contato</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <HiOutlineMail className="contact_option-icon" />
                        <h4>Email</h4>
                        <h5>priscillararimmy@hotmail.com</h5>
                        <a href="mailto:priscillararimmy@hotmail.com" target="_blank" rel="noreferrer">Envie</a>
                    </article>
                    <article className="contact__option">
                        <AiOutlineWhatsApp className="contact_option-icon" />
                        <h4>Whatsapp</h4>
                        <h5>priscillararimmy</h5>
                        <a href="https://api.whatsapp.com/send?phone=5548996371654" target="_blank" rel="noreferrer">Envie</a>
                    </article>
                    
                </div>
                <form action="">
                    <input type="text" name="name" placeholder="Nome completo" required />
                    <input type="email" name="email" placeholder="Seu email" required />
                    <textarea name="message" rows="7" placeholder="Deixe sua mensagem" required></textarea>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>

        </section>
    )
}

export default Contact