import React from "react";
import Logo from "../../assets/UECCRRRR.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="row footer-row">
        <img src={Logo} class="footer-logo" alt="footer" />
      </div>
      <div class="row">
        <div class="footer-link-container">
          <Link to="/about" class="footer-links">
            About us
          </Link>
          <Link to="/contactus" class="footer-links">
            Contact us
          </Link>
          <ul class="footer-list">
            <li class="footer-item">
              <i class="icon ion-md-cart  icon-big"></i>
              <Link to="/https://www.facebook.com">facebook</Link>
            </li>
            <li class="footer-item">
              <i class="icon ion-md-cart  icon-big"></i>
              <Link to="/https://www.twiter.com">twiter</Link>
            </li>
          </ul>
        </div>
      </div>
      <div class="row footer-row">
        <p>Copyright&copy;2021 all rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
