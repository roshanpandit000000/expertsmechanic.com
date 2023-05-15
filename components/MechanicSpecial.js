import Image from "next/image";
import React from "react";

function MechanicSpecial() {
  return (
    <>
      <div className="mt-16">
        <div className="container mx-auto my-3 text-center">
          <h1 class="text-3xl sm:text-3xl lg:text-4xl font-bold">
            EM Special
            <span class="bg-blue-100 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">
              PRO
            </span>
          </h1>
        </div>
      </div>
      <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-1 md:gap-x-0 md:px-10 lg:gap-x-0 lg:px-10 xl:gap-x-0 xl:px-20 justify-items-center ...">
        {/* Remove class [ h-24 ] when adding a card block */}
        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
        <div className="">
          <Image
            className="shadow-lg hover:shadow-2xl"
            src="/special/battery.jpg"
            alt="Picture of the author"
            width={250}
            height={0}
          />
          <p className="text-center text-xl mt-4 font-bold uppercase">
          Battery Replasment
          </p>
        </div>

        {/* Remove class [ h-24 ] when adding a card block */}
        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
        <div className="">
          <Image
            className="shadow-lg hover:shadow-2xl"
            src="/special/cleaning.jpg"
            alt="Picture of the author"
            width={250}
            height={0}
          />
          <p className="text-center text-xl mt-4 font-bold uppercase">
            Detail Car Cleaning
          </p>
        </div>
        {/* Remove class [ h-24 ] when adding a card block */}
        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
        <div className="">
          <Image
            className="shadow-lg hover:shadow-2xl"
            src="/special/light.jpg"
            alt="Picture of the author"
            width={250}
            height={0}
          />
          <p className="text-center text-xl mt-4 font-bold uppercase">
          Headlight Replasment
          </p>
        </div>
        {/* Remove class [ h-24 ] when adding a card block */}
        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
        <div className="">
          <Image
            className="shadow-lg hover:shadow-2xl"
            src="/special/tow-car.jpg"
            alt="Picture of the author"
            width={250}
            height={0}
          />
          <p className="text-center text-xl mt-4 font-bold uppercase">
          Tow Truck Service
          </p>  
        </div>
      </div>
    </>
  );
}

export default MechanicSpecial;
