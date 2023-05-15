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
      <div className="container mx-auto my-2 mt-20 text-center">
        <h1 class="text-3xl sm:text-3xl lg:text-4xl font-bold">
          Near WorkShop
          <span class="bg-blue-100 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">
            PRO
          </span>
        </h1>
      
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8 lg:px-20 px-10 md:px-0 xl:px-36 sm:px-10">
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
          <div style={{ overflow: "hidden", paddingTop: "56.25%", position: "relative" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.9406221661493!2d77.04734481541837!3d28.481334797658093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19a5f3784ad5%3A0x38a4b26dfe3cd8b5!2sAtul%20Kataria%20Chowk%2C%20Sukhrali%20Enclave%2C%20Sector%2017%2C%20Gurugram%2C%20Haryana%20122022!5e0!3m2!1sen!2sin!4v1681215509768!5m2!1sen!2sin"
              width="600"
              height="305"
              style={{ position: "absolute", top: "0", left: "0", border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        {/* Remove class [ h-24 ] when adding a card block */}
        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
      </div>
      </div>
    </>
  );
}

export default WorkShop;
