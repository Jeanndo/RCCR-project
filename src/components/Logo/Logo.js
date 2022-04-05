import React from 'react'
import {Link} from 'react-router-dom'
import burgerLog from '../../assets/UECCRRRR.png'
import './Logo.css'
const logo = (props) => (
    <Link to="/"><div className= 'Logo' style={{height:props.height}}><img src ={burgerLog} alt ="MyBurger" />
</div></Link>
)
export default logo