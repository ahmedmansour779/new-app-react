import React from 'react'
import AboutUs from './components/About Us/AboutUs'
import AccordionComponent from './components/AccordionComponent/AccordionComponent'
import CountactUs from './components/CountactUs/CountactUs'
import CreativSpeakersComponent from './components/Creative Speakers/CreativSpeakers'
import Header from './components/Header'
import NavBar from './components/NavBar'
import OverView from './components/NavbarHome/OverView'
import OurPrograms from './components/Our programs'
import OurSponsorsHome from './components/Our Sponsors/OurSponsorsHome'
import Register from './components/Register'
import Venue from './components/venue/Venue'
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
            <OurPrograms />
            <Register />
            <AccordionComponent />
            <Venue />
            <OurSponsorsHome />
            <CountactUs />
        </>
    )
}

export default Home