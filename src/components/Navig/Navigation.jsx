import React from "react";
import Logo from '../../assets/UECCRRRR.png'
import {Link} from 'react-scroll'
import { useHistory } from "react-router-dom";

const Navigation = () => {

const history = useHistory()

  return (
    <div>
      <header>
        <nav>
          <div className="container">
            <div className="item item--1">
              <img
                onClick={()=>history.push("/")}
                src={Logo}
                alt="RCCR log"
                className="logo"
              />
              <ul className="main-nav">
                <li>
                  <Link to="/" style={{color:'#fff'}}>Home</Link>
                </li>
                <li>
                  <Link to="/news" style={{color:'#fff'}}>News</Link>
                </li>
                <li>
                  <Link to="/mission"smooth={true} duration={1000} style={{color:'#fff'}}>Mission</Link>
                </li>
                <li>
                  <Link to="community" smooth={true} duration={1000} style={{color:'#fff'}}>Community</Link>
                </li>
                <li>
                  <Link to="prayer-groups" style={{color:'#fff'}}>Prayer groups</Link>
                </li>
                <li>
                  <Link to="/chart-rooms" style={{color:'#fff'}}>Chart Room</Link>
                </li>
                <li>
                  <Link to="testmony" smooth={true} duration={1000} style={{color:'#fff'}}>Testmonials</Link>
                </li>
                <li>
                  <Link to="team" smooth={true} duration={1000} style={{color:'#fff'}}>Team</Link>
                </li>
                <li>
                  <Link to="/history" style={{color:'#fff'}}>History</Link>
                </li>
                <li>
                  <Link to="/documents" style={{color:'#fff'}}>Documents</Link>
                </li>
                <li>
                  <Link to="/lang" style={{color:'#fff'}}>
                    <select name="language" id="lang" className="Translate">
                      <option>RW</option>
                      <option>EN</option>
                      <option>US</option>
                    </select>
                  </Link>
                </li>
                <li>
                  <Link to="signup" smooth={true} duration={1000} style={{color:'#fff'}}>Signup</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
