import React from "react";
import Logo from "../../assets/UECCRRRR.png";
import { Link } from "react-router-dom";
// import { animateScroll as scroll } from "react-scroll/modules"

const Footer = () => {
  return (
    <footer className="footer" >
      <div className="row footer-row">
        <img src={Logo} className="footer-logo" alt="footer" />
      </div>
      <div className="row">
        <div className="footer-link-container">
          <Link to="/about" className="footer-links">
            About us
          </Link>
          <Link to="/contactus" className="footer-links">
            Contact us
          </Link>
          <ul className="footer-list">
            <li className="footer-item">
              <i className="icon ion-md-cart  icon-big"></i>
              <Link to="/https://www.facebook.com">facebook</Link>
            </li>
            <li className="footer-item">
              <i className="icon ion-md-cart  icon-big"></i>
              <Link to="/https://www.twiter.com">twiter</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="row footer-row">
        <p>Copyright&copy;2021 all rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
