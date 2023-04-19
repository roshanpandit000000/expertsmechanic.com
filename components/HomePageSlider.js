import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className=" sm:mt-24 mt-24 lg:mt-13 overflow-hidden ...">
        <Slider {...settings}>
          <div>
            <Image
              src="/mainbaner/1.jpg"
              alt="Picture of the author"
              width={1920}
              height={0}
            />
          </div>
          <div>
            <Image
              src="/mainbaner/2.jpg"
              alt="Picture of the author"
              width={1920}
              height={0}
            />
          </div>
          <div>
            <Image
              src="/mainbaner/3.jpg"
              alt="Picture of the author"
              width={1920}
              height={0}
            />
          </div>
        </Slider>
      </div>
    );
  }
}
