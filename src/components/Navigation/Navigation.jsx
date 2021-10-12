import React from "react";
import Logo from '../../assets/UECCRRRR.png'
import {Link} from 'react-router-dom'
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
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/news">News</Link>
                </li>
                <li>
                  <Link to="/mission">Mission</Link>
                </li>
                <li>
                  <Link to="/community">Community</Link>
                </li>
                <li>
                  <Link to="prayer-groups">Prayer groups</Link>
                </li>
                <li>
                  <Link to="/chart-rooms">Chart Room</Link>
                </li>
                <li>
                  <Link to="/history">History</Link>
                </li>
                <li>
                  <Link to="/documents">Documents</Link>
                </li>
                <li>
                  <Link to="/lang">
                    <select name="language" id="lang" className="Translate">
                      <option>RW</option>
                      <option>EN</option>
                      <option>US</option>
                    </select>
                  </Link>
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
