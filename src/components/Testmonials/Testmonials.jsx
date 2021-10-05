import React from "react";
import Customer from "../../assets/customer-1.jpg";
import Customer2 from "../../assets/customer-2.jpg";
import Customer3 from "../../assets/customer-3.jpg";

const Testmonials = () => {
  return (
    <section className="section-testimonials">
      <div className="row">
        <h2 className="testimonials-heading">
          Now Testimonials from our community
        </h2>
      </div>
      <div className="row community-row">
        <div className="col span-1-of-5 box">
          <blockquote>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            <cite>
              <img src={Customer} alt="testimonial1" />
              Jeando
            </cite>
          </blockquote>
        </div>
        <div className="col span-1-of-5 box  ">
          <blockquote>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            <cite>
              <img src={Customer2} alt="testimonial2" />
              Jeando
            </cite>
          </blockquote>
        </div>
        <div className="col span-1-of-5 box">
          <blockquote>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            <cite>
              <img src={Customer3} alt="testimonial3" />
              Jeando
            </cite>
          </blockquote>
        </div>
        <div className="col span-1-of-5 box">
          <blockquote>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            <cite>
              <img src={Customer2} alt="testimonial4" />
              Jeando
            </cite>
          </blockquote>
        </div>
        <div className="col span-1-of-5 box">
          <blockquote>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            <cite>
              <img src={Customer2} alt="testimonial5" />
              Jeando
            </cite>
          </blockquote>
        </div>
      </div>
      <div className="row">
        <div className="col span-1-of-5 box">
          <blockquote>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            <cite>
              <img src={Customer2} alt="testimonial6" />
              Jeando
            </cite>
          </blockquote>
        </div>
        <div className="col span-1-of-5 box  ">
          <blockquote>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            <cite>
              <img src={Customer2} alt="testimonial7" />
              Jeando
            </cite>
          </blockquote>
        </div>
        <div className="col span-1-of-5 box">
          <blockquote>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            <cite>
              <img src={Customer2} alt="testimonial8" />
              Jeando
            </cite>
          </blockquote>
        </div>
        <div className="col span-1-of-5 box">
          <blockquote>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            <cite>
              <img src={Customer2} alt="testimonial9" />
              Jeando
            </cite>
          </blockquote>
        </div>
        <div className="col span-1-of-5 box">
          <blockquote>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            <cite>
              <img src={Customer2} alt="testimonial10" />
              Jeando
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Testmonials;
