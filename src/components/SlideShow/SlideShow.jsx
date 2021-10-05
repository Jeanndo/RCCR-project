import React from "react";
import { Carousel } from "antd";
import { Row, Col } from "antd";
import Img from "../../assets/holy-spirit-OCN.jpg";

const SlideShow = () => {
  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={12}>
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
          <img
            src={Img}
            alt="saint"
            style={{ width: "100%", height: "400px" }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default SlideShow;
