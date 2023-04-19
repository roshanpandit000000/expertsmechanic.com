import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";

function LuxuryCar() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container mx-auto my-2 mt-20">
        <h1 class="flex items-center text-3xl sm:text-3xl lg:text-4xl font-bold  lg:ml-40 ml-5 sm:ml-5">
          EM LuxuryCar
          <span class="bg-blue-100 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">
            PRO
          </span>
        </h1>
      </div>
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 pt-6 gap-8 lg:px-36 px-10 sm:px-10">
        {/* Remove class [ h-24 ] when adding a card block */}
        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
        <div className="overflow-hidden ...">
          <div className="">
            <Slider {...settings}>
              <div className="pr-8">
                <Image
                  src="/luxe/1.jpg"
                  alt="Picture of the author"
                  width={700}
                  height={0}
                />
              </div>
              <div className="pr-8">
                <Image
                  src="/luxe/2.jpg"
                  alt="Picture of the author"
                  width={700}
                  height={0}
                />
              </div>
              <div className="pr-8">
                <Image
                  src="/luxe/3.jpg"
                  alt="Picture of the author"
                  width={700}
                  height={0}
                />
              </div>
              <div className="pr-8">
                <Image
                  src="/luxe/4.jpg"
                  alt="Picture of the author"
                  width={700}
                  height={0}
                />
              </div>
              <div className="pr-8">
                <Image
                  src="/luxe/1.jpg"
                  alt="Picture of the author"
                  width={700}
                  height={0}
                />
              </div>
              <div className="pr-8">
                <Image
                  src="/luxe/1.jpg"
                  alt="Picture of the author"
                  width={700}
                  height={0}
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default LuxuryCar;
