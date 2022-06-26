import React from "react"
import Header from "./components/header/header.jsx"
import Nav from "./components/nav/nav"
import About from "./components/about/about"
import Experience from "./components/experience/experiense"
import Portifolio from "./components/portifolio/portifolio"
import Contact from "./components/contact/contact"
import Footer from "./components/footer/footer"


const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Portifolio />
            <Contact />
            <Footer />
        </>
    )
}

export default App