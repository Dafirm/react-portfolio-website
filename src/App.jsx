import React from 'react'
import './index.css'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Testimonials from './components/testimonials/Testimonials'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <Experience />
        < Services/>
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
    </>
  )
}

export default App