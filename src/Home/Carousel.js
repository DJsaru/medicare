import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

export default class MultipleItems extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 400,
      slidesToShow: 4,
      slidesToScroll: 2,
      initialSlide: 0,
      appendDots: (slick) => (
        <div
          style={{
            margin: "-35px",
          }}
        >
          <ul style={{ margin: "-45" }}> {slick} </ul>
        </div>
      ),
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <div className="img-pad">
        <Slider {...settings}>
          <div className="card-body">
            <img src={require("./heart.png")} />
            <span className="btn-img">
              <button className="btn-img"> Heart</button>
            </span>
          </div>
          <div className="card-body">
            <img src={require("./dental.png")} />
            <span className="btn-img">
              <button className="btn-img"> Dental</button>
            </span>
          </div>
          <div className="card-body">
            <img src={require("./heart.png")} />
            <span className="btn-img">
              <button className="btn-img"> Heart</button>
            </span>
          </div>
          <div className="card-body">
            <img src={require("./dental.png")} />
            <span className="btn-img">
              <button className="btn-img"> Dental</button>
            </span>
          </div>
          <div className="card-body">
            <img src={require("./heart.png")} />
            <span className="btn-img">
              <button className="btn-img"> Heart</button>
            </span>
          </div>
          <div className="card-body">
            <img src={require("./dental.png")} />
            <span className="btn-tag">
              <button className="btn-img"> Dental</button>
            </span>
          </div>
        </Slider>
      </div>
    );
  }
}
