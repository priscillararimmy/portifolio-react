import React from "react";
import './experiense.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experiense = () => {
    return (
        <section id="experiense">
            <h2>Minhas Skills</h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend</h3>
                    <div className="experience__content">
                        <article className="experiense__details">
                            <BsFillPatchCheckFill className="experience_details-icon"/>
                            <div>
                            <h4>HTML</h4>
                            <small className="text-light">Intermediário</small>
                            </div>
                        </article>
                        <article className="experiense__details">
                            <BsFillPatchCheckFill className="experience_details-icon" />
                            <div>
                            <h4>CSS</h4>
                            <small className="text-light">Intermediário</small>
                            </div>
                        </article>
                        <article className="experiense__details">
                            <BsFillPatchCheckFill className="experience_details-icon" />
                            <div>
                            <h4>JavaScrip</h4>
                            <small className="text-light">Intermediário</small>
                            </div>
                        </article>
                        <article className="experiense__details">
                            <BsFillPatchCheckFill className="experience_details-icon" />
                            <div>
                            <h4>WordPress</h4>
                            <small className="text-light">Intermediário</small>
                            </div>
                        </article>
                        <article className="experiense__details">
                            <BsFillPatchCheckFill className="experience_details-icon" />
                            <div>
                            <h4>Bootstrap</h4>
                            <small className="text-light">Intermediário</small>
                            </div>
                        </article>
                        <article className="experiense__details">
                            <BsFillPatchCheckFill className="experience_details-icon" />
                            <div>
                            <h4>ReactJs</h4>
                            <small className="text-light">Básico</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__backend">
                <h3>Backend</h3>
                    <div className="experience__content">
                        <article className="experiense__details">
                            <BsFillPatchCheckFill className="experience_details-icon" />
                            <div>
                            <h4>NodeJs</h4>
                            <small className="text-light">Básico</small>
                            </div>
                        </article>
                        <article className="experiense__details">
                            <BsFillPatchCheckFill className="experience_details-icon" />
                            <div>
                            <h4>MySQL</h4>
                            <small className="text-light">Básico</small>
                            </div>
                        </article>
                        <article className="experiense__details">
                            <BsFillPatchCheckFill className="experience_details-icon" />
                            <div>
                            <h4>MongoDB</h4>
                            <small className="text-light">Básico</small>
                            </div>
                        </article>
                        <article className="experiense__details">
                            <BsFillPatchCheckFill className="experience_details-icon"/>
                            <div>
                            <h4>Postgress</h4>
                            <small className="text-light">Básico</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experiense