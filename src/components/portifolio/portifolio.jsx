/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import './portifolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const Portifolio = () => {
    return (
       <section id="portifolio">
        <h2>Projetos</h2>
        <h5>Meus projetos recentes</h5>
        <div className="container portfolio__container">
            <article className="portfolio__item">
                <div className="portfolio__item-image">
                    <img src={IMG1} alt="" />
                    <h3>this is a portifolio item title</h3>
                    <div className="portfolio__item-cta">
                    <a href="https://github.com" className="btn">GitHub</a>
                    <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary">Live Demo</a>
                    </div>
                </div>
            </article>
            <article className="portfolio__item">
                <div className="portfolio__item-image">
                    <img src={IMG2} alt="" />
                    <h3>this is a portifolio item title</h3>
                    <div className="portfolio__item-cta">
                    <a href="https://github.com" className="btn">GitHub</a>
                    <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary">Live Demo</a>
                    </div>
                </div>
            </article>
            <article className="portfolio__item">
                <div className="portfolio__item-image">
                    <img src={IMG3} alt="" />
                    <h3>this is a portifolio item title</h3>
                    <div className="portfolio__item-cta">
                    <a href="https://github.com" className="btn">GitHub</a>
                    <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary">Live Demo</a>
                    </div>
                </div>
            </article>
            <article className="portfolio__item">
                <div className="portfolio__item-image">
                    <img src={IMG4} alt="" />
                    <h3>this is a portifolio item title</h3>
                    <div className="portfolio__item-cta">
                    <a href="https://github.com" className="btn">GitHub</a>
                    <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary">Live Demo</a>
                    </div>
                </div>
            </article>
            <article className="portfolio__item">
                <div className="portfolio__item-image">
                    <img src={IMG5} alt="" />
                    <h3>this is a portifolio item title</h3>
                    <div className="portfolio__item-cta">
                    <a href="https://github.com" className="btn">GitHub</a>
                    <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary">Live Demo</a>
                    </div>
                </div>
            </article>
            <article className="portfolio__item">
                <div className="portfolio__item-image">
                    <img src={IMG6} alt="" />
                    <h3>this is a portifolio item title</h3>
                    <div className="portfolio__item-cta">
                    <a href="https://github.com" className="btn">GitHub</a>
                    <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary">Live Demo</a>
                    </div>
                </div>
            </article>
        </div>
        </section>
    )
}

export default Portifolio