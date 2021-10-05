import React from 'react'
import Navigation from '../Navigation/Navigation'
import SlideShow  from '../SlideShow/SlideShow'
import Mission from  '../Mission/Mission'
import Community from '../Community/Community'
import Testmonials from '../Testmonials/Testmonials'
import Signup from '../ChritianLife/ChritianLife'
import Team from '../Team/Team'
import Contactus from '../Contactus/Contactus'
import Footer from '../Footer/Footer'

const Landing = () => {
    return (
        <div>
           <Navigation/>
           <SlideShow/>
           <Mission/>
           <Community/>
           <Testmonials/>
           <Signup/>
           <Team/>
           <Contactus/>
           <Footer/>
        </div>
    )
}

export default Landing
