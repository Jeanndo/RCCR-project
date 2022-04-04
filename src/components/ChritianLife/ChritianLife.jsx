import React from "react";
import { Link } from "react-router-dom";

const ChritianLife = () => {
  return (
    <section className="section-signup" id="signup">
      <div className="row">
        <h2 className="Signup-heading">
          Time to start living a christian life from to day
        </h2>
        <p className="Signup-para">
          Are you realy boared to live non a christian life? Don't worry! here
          is the answer,Jesus is our Reedmer. when Jesus christ returned back to
          heaven He left us The Holy spirit to be our right in our daily life,
          so, don't wait it's a to join your charismatic community and start
          live as a christian and offcourse we wish you to be with the Holy
          spirit. then hit the button below to join your community.
        </p>
      </div>
      <div className="row signup-row">
        <Link to="/signup" className="btn sign-btn">
          Sign up
        </Link>
      </div>
    </section>
  );
};

export default ChritianLife;
