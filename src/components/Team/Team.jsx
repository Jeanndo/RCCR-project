import React from "react";
import { Link } from "react-router-dom";
import Customer from "../../assets/customer-1.jpg";
import Customer2 from "../../assets/customer-2.jpg";
import Customer3 from "../../assets/customer-3.jpg";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

const Team = () => {
  return (
    <section className="section-team">
      <div className="row">
        <h2 className="team-heading">Get in touch with our team</h2>
      </div>
      <div >
        <div className="col span-1-of-7">
          <div className="card">
            <img src={Customer} alt="team-member-name" />
            <div>Name</div>
            <div>Title</div>
            <div>Diocese</div>
            <div>
              <FacebookIcon
                style={{
                  color: "#e67e22",
                  fontSize: "20px",
                  marginBottom: "-5px",
                  marginRight: "5px",
                }}
              />
              <Link to="/https://www.facebook.com" className="social-media">
                facebook
              </Link>
            </div>
            <div>
              <TwitterIcon
                style={{
                  color: "#e67e22",
                  fontSize: "20px",
                  marginBottom: "-5px",
                  marginRight: "5px",
                }}
              />
              <Link to="/https://www.twitter.com" className="social-media">
                Twitter
              </Link>
            </div>
          </div>
        </div>
        <div className="col span-1-of-7">
          <div className="card">
            <img src={Customer2} alt="team-member 2" />
            <div>Name</div>
            <div>Title</div>
            <div>Diocese</div>
            <div>
              <FacebookIcon
                style={{
                  color: "#e67e22",
                  fontSize: "20px",
                  marginBottom: "-5px",
                  marginRight: "5px",
                }}
              />
              <Link to="/https://www.facebook.com" className="social-media">
                facebook
              </Link>
            </div>
            <div>
              <TwitterIcon
                style={{
                  color: "#e67e22",
                  fontSize: "20px",
                  marginBottom: "-5px",
                  marginRight: "5px",
                }}
              />
              <Link to="/https://www.twitter.com" className="social-media">
                Twitter
              </Link>
            </div>
          </div>
        </div>

        <div className="col span-1-of-7">
          <div className="card">
            <img src={Customer3} alt="team-member3" />
            <div>Name</div>
            <div>Title</div>
            <div>Diocese</div>
            <div>
              <FacebookIcon
                style={{
                  color: "#e67e22",
                  fontSize: "20px",
                  marginBottom: "-5px",
                  marginRight: "5px",
                }}
              />
              <Link to="/https://www.facebook.com" className="social-media">
                facebook
              </Link>
            </div>
            <div>
              <TwitterIcon
                style={{
                  color: "#e67e22",
                  fontSize: "20px",
                  marginBottom: "-5px",
                  marginRight: "5px",
                }}
              />
              <Link to="/https://www.twitter.com" className="social-media">
                Twitter
              </Link>
            </div>
          </div>
        </div>
        <div className="col span-1-of-7">
          <div className="card">
            <img src={Customer} alt="team-member4" />
            <div>Name</div>
            <div>Title</div>
            <div>Diocese</div>
            <div>
              <FacebookIcon
                style={{
                  color: "#e67e22",
                  fontSize: "20px",
                  marginBottom: "-5px",
                  marginRight: "5px",
                }}
              />
              <Link to="/https://www.facebook.com" className="social-media">
                facebook
              </Link>
            </div>
            <div>
              <TwitterIcon
                style={{
                  color: "#e67e22",
                  fontSize: "20px",
                  marginBottom: "-5px",
                  marginRight: "5px",
                }}
              />
              <Link to="/https://www.twitter.com" className="social-media">
                Twitter
              </Link>
            </div>
          </div>
        </div>
        <div className="col span-1-of-7">
          <div className="card">
            <img src={Customer2} alt="team-member5" />
            <div>Name</div>
            <div>Title</div>
            <div>Diocese</div>
            <div>
              <FacebookIcon
                style={{
                  color: "#e67e22",
                  fontSize: "20px",
                  marginBottom: "-5px",
                  marginRight: "5px",
                }}
              />
              <Link to="/https://www.facebook.com" className="social-media">
                facebook
              </Link>
            </div>
            <div>
              <TwitterIcon
                style={{
                  color: "#e67e22",
                  fontSize: "20px",
                  marginBottom: "-5px",
                  marginRight: "5px",
                }}
              />
              <Link to="/https://www.twitter.com" className="social-media">
                Twitter
              </Link>
            </div>
          </div>
        </div>
        <div className="col span-1-of-7">
          <div className="card">
            <img src={Customer3} alt="team-member-n" />
            <div>Name</div>
            <div>Title</div>
            <div>Diocese</div>
            <div>
              <FacebookIcon
                style={{
                  color: "#e67e22",
                  fontSize: "20px",
                  marginBottom: "-5px",
                  marginRight: "5px",
                }}
              />
              <Link to="/https://www.facebook.com" className="social-media">
                facebook
              </Link>
            </div>
            <div>
              <TwitterIcon
                style={{
                  color: "#e67e22",
                  fontSize: "20px",
                  marginBottom: "-5px",
                  marginRight: "5px",
                }}
              />
              <Link to="/https://www.twitter.com" className="social-media">
                Twitter
              </Link>
            </div>
          </div>
        </div>
        <div className="col span-1-of-7">
          <div className="card">
            <img src={Customer} alt="teamn" />
            <div>Name</div>
            <div>Title</div>
            <div>Diocese</div>
            <div>
              <FacebookIcon
                style={{
                  color: "#e67e22",
                  fontSize: "20px",
                  marginBottom: "-5px",
                  marginRight: "5px",
                }}
              />
              <Link to="/https://www.facebook.com" className="social-media">
                facebook
              </Link>
            </div>
            <div>
              <TwitterIcon
                style={{
                  color: "#e67e22",
                  fontSize: "20px",
                  marginBottom: "-5px",
                  marginRight: "5px",
                }}
              />
              <Link to="/https://www.twitter.com" className="social-media">
                Twitter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
