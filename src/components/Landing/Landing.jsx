import React from 'react'
import Navigation from '../Navigation/Navigation'
import SlideShow  from '../SlideShow/SlideShow'
import Mission from  '../Mission/Mission'
import Community from '../Community/Community'
import Testmonials from '../Testmonials/Testmonials'
import Signup from '../ChritianLife/ChritianLife'

const Landing = () => {
    return (
        <div>
           <Navigation/>
           <SlideShow/>
           <Mission/>
           <Community/>
           <Testmonials/>
           <Signup/>
        </div>
    )
}

export default Landing
