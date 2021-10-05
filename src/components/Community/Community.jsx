import React from "react";
import Building1 from "../../assets/building1.jpg";
import EmptyArtal from "../../assets/Empty-artal.jpg";
import Artal1 from "../../assets/Artal1.jpg";
import Building3 from "../../assets/building3.jpg";
import Lisbon from "../../assets/lisbon-3.jpg";
import London from "../../assets/london.jpg";
import Community from "../../assets/community1.jpg";
import People from "../../assets/peaple.jpg";
import Berlin from "../../assets/berlin.jpg";
import SanFrancisco from "../../assets/san-francisco.jpg";
import { Link } from "react-router-dom";

const Communities = () => {
  return (
    <section className="section-community">
      <div className="row ">
        <h2 className="community-heading">Our Community</h2>
      </div>
      <div className="row community-row">
        <div className="col span-1-of-5 box">
          <img src={Building1} alt="Head quators" className="Community-img" />
          <h3>UECR</h3>
          <div className="community-features">
            <i className="icon ion-md-school  icon-big"></i>
            <Link to="/community1-activity" className="community-links">
              Activities
            </Link>
          </div>
          <div className="community-features">
            <i className="ion-md-people icon-big"></i>
            1000+ Members
          </div>
          <div className="community-features">
            <i className="icon ion-md-cart  icon-big"></i>
            <Link to="/https://www.twitter.com" className="community-links">
              {" "}
              @twitter_accout
            </Link>
          </div>
        </div>
        <div className="col span-1-of-5 box  ">
          <img src={EmptyArtal} alt="Head quators2" className="Community-img" />
          <h3>Kibungo</h3>
          <div className="community-features">
            <i className="icon ion-md-school  icon-big"></i>
            <Link to="/community2-activity" className="community-links">
              Activities
            </Link>
          </div>
          <div className="community-features">
            <i className="ion-md-people icon-big"></i>
            15000+ Members
          </div>
          <div className="community-features">
            <i className="icon ion-md-cart  icon-big"></i>
            <Link to="/https://www.twitter.com" className="community-links">
              {" "}
              @twitter_accout
            </Link>
          </div>
        </div>
        <div className="col span-1-of-5 box">
          <img src={Artal1} alt="Head quators3" className="Community-img" />
          <h3>Ruhengeri</h3>
          <div className="community-features">
            <i className="icon ion-md-school  icon-big"></i>
            <Link to="/community3-activity" className="community-links">
              Activities
            </Link>
          </div>
          <div className="community-features">
            <i className="ion-md-people icon-big"></i>
            2000+ Members
          </div>
          <div className="community-features">
            <i className="icon ion-md-cart  icon-big"></i>
            <Link to="/https://www.twitter.com" className="community-links">
              {" "}
              @twitter_accout
            </Link>
          </div>
        </div>
        <div className="col span-1-of-5 box">
          <img src={Building3} alt="Head quators4" className="Community-img" />
          <h3>Nyundo</h3>
          <div className="community-features">
            <i className="icon ion-md-school  icon-big"></i>
            <Link to="/community4-activity" className="community-links">
              Activities
            </Link>
          </div>
          <div className="community-features">
            <i className="ion-md-people icon-big"></i>
            2500+ Members
          </div>
          <div className="community-features">
            <i className="icon ion-md-cart  icon-big"></i>
            <Link to="/https://www.twitter.com" className="community-links">
              {" "}
              @twitter_accout
            </Link>
          </div>
        </div>
        <div className="col span-1-of-5 box">
          <img src={Lisbon} alt="Head quators5" className="Community-img" />
          <h3>Kabgayi</h3>
          <div className="community-features">
            <i className="icon ion-md-school  icon-big"></i>
            <Link to="/community5-activity" className="community-links">
              Activities
            </Link>
          </div>
          <div className="community-features">
            <i className="ion-md-people icon-big"></i>
            3000+ Members
          </div>
          <div className="community-features">
            <i className="icon ion-md-cart  icon-big"></i>
            <Link to="/https://www.twitter.com" className="community-links">
              {" "}
              @twitter_accout
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col span-1-of-5 box">
          <img src={London} alt="Head quators6" className="Community-img" />
          <h3>Butare</h3>
          <div className="community-features">
            <i className="icon ion-md-school  icon-big"></i>
            <Link to="/community6-activity" className="community-links">
              Activities
            </Link>
          </div>
          <div className="community-features">
            <i className="ion-md-people icon-big"></i>
            35000+ Members
          </div>
          <div className="community-features">
            <i className="icon ion-md-cart  icon-big"></i>
            <Link to="/https://www.twitter.com" className="community-links">
              {" "}
              @twitter_accout
            </Link>
          </div>
        </div>
        <div className="col span-1-of-5 box  ">
          <img src={Berlin} alt="Head quators7" className="Community-img" />
          <h3>Nyamagabe</h3>
          <div className="community-features">
            <i className="icon ion-md-school  icon-big"></i>
            <Link to="/community7-activity" className="community-links">
              Activities
            </Link>
          </div>
          <div className="community-features">
            <i className="ion-md-people icon-big"></i>
            4000+ Members
          </div>
          <div className="community-features">
            <i className="icon ion-md-cart  icon-big"></i>
            <Link to="/https://www.twitter.com" className="community-links">
              {" "}
              @twitter_accout
            </Link>
          </div>
        </div>
        <div className="col span-1-of-5 box">
          <img
            src={SanFrancisco}
            alt="Head quators8"
            className="Community-img"
          />
          <h3>Cyangugu</h3>
          <div className="community-features">
            <i className="icon ion-md-school  icon-big"></i>
            <Link to="/community8-activity" className="community-links">
              Activities
            </Link>
          </div>
          <div className="community-features">
            <i className="ion-md-people icon-big"></i>
            4500+ Members
          </div>
          <div className="community-features">
            <i className="icon ion-md-cart  icon-big"></i>
            <Link to="/https://www.twitter.com" className="community-links">
              {" "}
              @twitter_accout
            </Link>
          </div>
        </div>
        <div className="col span-1-of-5 box">
          <img src={Community} alt="Head quators" className="Community-img" />
          <h3>Byumba</h3>
          <div className="community-features">
            <i className="icon ion-md-school  icon-big"></i>
            <Link to="/community9-activity" className="community-links">
              Activities
            </Link>
          </div>
          <div className="community-features">
            <i className="ion-md-people icon-big"></i>
            5000+ Members
          </div>
          <div className="community-features">
            <i className="icon ion-md-cart  icon-big"></i>
            <Link to="/https://www.twitter.com" className="community-links">
              {" "}
              @twitter_accout
            </Link>
          </div>
        </div>
        <div className="col span-1-of-5 box">
          <img src={People} alt="Head quators" className="Community-img" />
          <h3>Kigali</h3>
          <div className="community-features">
            <i className="icon ion-md-school  icon-big"></i>
            <Link to="/community10-activity" className="community-links">
              Activities
            </Link>
          </div>
          <div className="community-features">
            <i className="ion-md-people icon-big"></i>
            5500+ Members
          </div>
          <div className="community-features">
            <i className="icon ion-md-cart  icon-big"></i>

            <Link to="/https://www.twitter.com" className="community-links">
              {" "}
              @twitter_accout
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Communities;
