import React from 'react'
import AboutUs from '../About Us'
import Header from './components/Header'
import NavBar from './components/NavBar'
import OverView from './components/NavbarHome/OverView'

function Home() {
    return (
        <>
            <NavBar />
            <Header />
            <AboutUs />
            <OverView />
        </>
    )
}

export default Home