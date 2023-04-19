import Image from "next/image";
import React from "react";

function Banafits() {
  return (
    <>
      <div className="container mx-auto my-2 mt-20">
        <h1 class="flex items-center text-3xl sm:text-3xl lg:text-4xl font-bold  lg:ml-40 ml-5 sm:ml-5">
          EM Banafits
          <span class="bg-blue-100 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">
            PRO
          </span>
        </h1>
      </div>
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8 lg:px-36 px-10 sm:px-10">
        {/* Remove class [ h-24 ] when adding a card block */}
        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
        <div className="">
          {" "}
          <Image
            src="/banefit/1.jpg"
            alt="Picture of the author"
            width={700}
            height={0}
          />
        </div>
        {/* Remove class [ h-24 ] when adding a card block */}
        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
        <div className="">
          <Image
            src="/banefit/2.jpg"
            alt="Picture of the author"
            width={700}
            height={0}
          />
        </div>
        {/* Remove class [ h-24 ] when adding a card block */}
        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
        <div className="">
          <Image
            src="/banefit/3.jpg"
            alt="Picture of the author"
            width={700}
            height={0}
          />
        </div>

        <div className="">
          <Image
            src="/banefit/4.jpg"
            alt="Picture of the author"
            width={700}
            height={0}
          />
        </div>
      </div>
    </>
  );
}

export default Banafits;
