import React from 'react'
import Navigation from '../Navigation/Navigation'
import SlideShow  from '../SlideShow/SlideShow'
import Mission from  '../Mission/Mission'
import Community from '../Community/Community'

const Landing = () => {
    return (
        <div>
           <Navigation/>
           <SlideShow/>
           <Mission/>
           <Community/>
        </div>
    )
}

export default Landing
