import React from 'react'
import Header from '../Header/Header'
import Services from '../Services/Services'
import Projects from '../Projects/Projects'
import About from '../About/About'
import Contact from '../Contact/Contact'

function Home() {
  return (
    <>
        <Header />
        <Services />
        <Projects />
        <About />
        <Contact />
    </>
  )
}

export default Home
