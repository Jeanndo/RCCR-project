import React from "react";

const Contactus = () => {
  return (
    <section className="section-form">
      <div className="row">
        <h2 className="Signup-heading">We're happy to hear from you</h2>
      </div>
      <div className="row">
        <form method="post" action="#" className="contact-form">
          <div className="row">
            <div className="col span-1-of-3">
              <label for="name">Name</label>
            </div>
            <div className="col span-2-of-3">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col span-1-of-3">
              <label for="email">Email</label>
            </div>
            <div className="col span-2-of-3">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col span-1-of-3">
              <label for="find-us">How did you find us?</label>
            </div>
            <div className="col span-2-of-3">
              <select name="find-us" id="find-us">
                <option value="friends" selected>
                  Friends
                </option>
                <option value="search">Search engine</option>
                <option value="ad">Advertisement</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col span-1-of-3">
              <label>Social media?</label>
            </div>
            <div className="col span-2-of-3">
              <input type="checkbox" name="news" id="news" checked /> Yes,
              please
            </div>
          </div>
          <div className="row">
            <div className="col span-1-of-3">
              <label>Your message</label>
            </div>
            <div className="col span-2-of-3">
              <textarea name="message" placeholder="Your message"></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col span-1-of-3">
              <label>&nbsp;</label>
            </div>
            <div className="col span-2-of-3">
              <input type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contactus;
