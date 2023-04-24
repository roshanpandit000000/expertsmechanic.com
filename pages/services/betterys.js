import Layout from "@/components/Layout";
import servicedata from "@/utils/servicedata";
import { Store } from "@/utils/Store";
import Image from "next/image";
import { useRouter } from "next/router";
import SelectedCar from "@/components/SelectedCar";
import PriceAndButtons from "@/components/PriceAndButtons";
import React, { useContext } from "react";


function betterys() {
  const { state, dispatch } = useContext(Store);

  return (
    <>
      <Layout title="Betterys">
        <div className="container mx-auto lg:px-60 px-10 sm:px-10 mt-24">
          <SelectedCar/>
          {servicedata.periodics.map((periodic) => (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 ">
              {/* Remove class [ h-24 ] when adding a card block */}
              {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
              <div className="">
                <Image
                  src={periodic.image}
                  alt={periodic.name}
                  width={200}
                  height={0}
                />
              </div>
              {/* Remove class [ h-24 ] when adding a card block */}
              {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
              <div className="">
                <div>
                  <p className="text-lg "> {periodic.name} </p>
                </div>
                <div>
                  <p className="text-sm py-3 font-semibold">
                    {" "}
                    {periodic.hour}{" "}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold"> {periodic.warranty} </p>
                </div>
                <div>
                  <p className="text-sm py-3 font-semibold">{periodic.month}</p>
                </div>
              </div>
              {/* Remove class [ h-24 ] when adding a card block */}
              {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
              <div className=""></div>
              {/* Remove class [ h-24 ] when adding a card block */}
              {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
              <div className=" pt-5 sm:pt-5 lg:pt-0 lg:justify-self-center ...">
              <PriceAndButtons/>
              </div>
            </div>
          ))}
        </div>

        {/* brake */}
        <div className="container mx-auto lg:px-60 px-10 sm:px-10 ">
          {servicedata.Brakes.map((brake) => (
            <div className="mb-6 md:mt-10 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-14 lg:mb-6 2xl:mb-12 shadow">
              <div className="flex items-center">
                <div className="flex items-start flex-col pt-8">
                  <Image
                    src={brake.image}
                    alt={brake.name}
                    width={200}
                    height={0}
                  />
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-start flex-col pt-">
                  <h2 className="text-2xl font-bold leading-4 text-gray-800 mb-5">
                    {brake.name}
                  </h2>

                  <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                    {brake.description}
                  </p>

                  <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                    {brake.description1}
                  </p>
                  <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                    {brake.description2}
                  </p>
                </div>
              </div>
              <div className="flex items-center ">
                <div className="flex items-start flex-col  ">
                  <p className="lg:w-40 2xl:w-52 text-base leading-6 lg:mt-12 mt-2 sm:mt-1 text-gray-600">
                    {brake.description3}
                  </p>
                  <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                    {brake.description4}
                  </p>
                  <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600 mb-5">
                    {brake.description5}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
              <PriceAndButtons/>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
}

export default betterys;
