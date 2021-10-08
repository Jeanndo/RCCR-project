import React from "react";
import { Carousel } from "antd";
import { Row, Col } from "antd";
import Img from "../../assets/holy-spirit-OCN.jpg";

const SlideShow = () => {
  return (
    <div className="row slide-container">
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 16 }}>
        <Col className="gutter-row " span={12}>
          <Carousel autoplay>
            <div>
              <img
                className="mySlides"
                src={Img}
                style={{ width: "100%", height: "400px" }}
                alt="slid1"
              />
            </div>
            <div>
              <img
                className="mySlides"
                src={Img}
                style={{ width: "100%", height: "400px" }}
                alt="slid2"
              />
            </div>
            <div>
              <img
                className="mySlides"
                src={Img}
                style={{ width: "100%", height: "400px" }}
                alt="slid3"
              />
            </div>
            <div>
              <img
                className="mySlides"
                src={Img}
                style={{ width: "100%", height: "400px" }}
                alt="slid4"
              />
            </div>
          </Carousel>
        </Col>
        <Col className="gutter-row" span={12}>
          <div className="saint-of-the-day">
            <div>
              <h2 className="saint-of-the-day-title">Saint of the day</h2>
            </div>
           <div className="saint-of-the-day-picture">
            <img alt="saint-of-the-day" src="data:image/jpeg;base64,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"/>
           </div>
           <div className="saint-of-the-day-description">
           <h2 className="saint-of-the-day-name">Saint Name</h2>
            <p>
            The standard chunk of Lorem Ipsum used since the 1500s is 
            reproduced below for those interested. Sections 1.10.32 and 1.10.33 
            from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in 
            their exact original form, accompanied by English versions from the 1914 
            translation by H. Rackham.
            </p>
           </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SlideShow;
