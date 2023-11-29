import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BrandsSlider.css";

const BrandsSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    loop: true,
  };

  return (
    <div className="brands-container container ">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-10 offset-1 col-11 sliderStyle" style={{marginLeft: "90px", marginBottom: "80px", marginTop:"130px"}}>
          <Slider {...settings} >
            <div>
              <img src={require("../images/1.png")} alt="First Brand" />
            </div>
            <div>
              <img src={require("../images/2.png")} alt="Second Brand" />
            </div>
            <div>
              <img src={require("../images/3.png")} alt="Third Brand" />
            </div>
            <div>
              <img src={require("../images/4.png")} alt="Fourth Brand" />
            </div>
            <div>
              <img src={require("../images/5.png")} alt="Fifth Brand" />
            </div>
            <div>
              <img src={require("../images/6.png")} alt="Sixth Brand" />
            </div>
            <div>
              <img src={require("../images/1.png")} alt="First Brand" />
            </div>
            <div>
              <img src={require("../images/2.png")} alt="Second Brand" />
            </div>
            <div>
              <img src={require("../images/3.png")} alt="Third Brand" />
            </div>
            <div>
              <img src={require("../images/4.png")} alt="Fourth Brand" />
            </div>
            <div>
              <img src={require("../images/5.png")} alt="Fifth Brand" />
            </div>
            <div>
              <img src={require("../images/6.png")} alt="Sixth Brand" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BrandsSlider;
