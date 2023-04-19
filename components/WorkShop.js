import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";
import Map from "./Map";

function WorkShop() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="container mx-auto my-2 mt-20">
        <h1 class="flex items-center text-3xl sm:text-3xl lg:text-4xl font-bold  lg:ml-40 ml-5 sm:ml-5">
          Near WorkShop
          <span class="bg-blue-100 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">
            PRO
          </span>
        </h1>
      </div>
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 pt-6 gap-8 lg:px-36 px-10 sm:px-10">
        {/* Remove class [ h-24 ] when adding a card block */}
        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
        <div className="overflow-hidden ...">
          <div>
            <Slider {...settings}>
              <div>
                <Image
                  src="/workshop/1.jpg"
                  alt="Picture of the author"
                  width={650}
                  height={0}
                />
              </div>
              <div>
                <Image
                  src="/workshop/2.jpg"
                  alt="Picture of the author"
                  width={650}
                  height={0}
                />
              </div>
              <div>
                <Image
                  src="/workshop/3.jpg"
                  alt="Picture of the author"
                  width={1920}
                  height={0}
                />
              </div>
              <div>
                <Image
                  src="/workshop/4.jpg"
                  alt="Picture of the author"
                  width={650}
                  height={0}
                />
              </div>
            </Slider>
          </div>
        </div>
        {/* Remove class [ h-24 ] when adding a card block */}
        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
        <div className="">
          <Map />
        </div>
        {/* Remove class [ h-24 ] when adding a card block */}
        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
      </div>
    </>
  );
}

export default WorkShop;
