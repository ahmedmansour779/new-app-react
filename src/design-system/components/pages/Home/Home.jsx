import React from 'react'
import AboutUs from './components/About Us/AboutUs'
import CreativSpeakersComponent from './components/Creative Speakers/CreativSpeakers'
import Header from './components/Header'
import NavBar from './components/NavBar'
import OverView from './components/NavbarHome/OverView'
import WatchVideo from './components/Watch Video'

function Home() {
    return (
        <>
            <NavBar />
            <Header />
            <AboutUs />
            <OverView />
            <WatchVideo />
            <CreativSpeakersComponent />
        </>
    )
}

export default Home