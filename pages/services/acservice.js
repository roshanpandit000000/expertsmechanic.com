import Layout from "@/components/Layout";
import { Store } from "@/utils/Store";
import servicedata from "@/utils/servicedata";
import Image from "next/image";
import { useRouter } from "next/router";
import SelectedCar from "@/components/SelectedCar";
import PriceAndButtons from "@/components/PriceAndButtons";
import React, { useContext } from "react";

function acservice() {
  const { state, dispatch, setSelectedVehicle, selectedVehicle } =
    useContext(Store);
  return (
    <>
      <Layout title="AC Service & Repair">
        <div className="container mx-auto lg:px-20 px-10 sm:px-10 mt-24">
          <SelectedCar />
          {servicedata.periodics.map((periodic) => (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pt-6 ">
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
              <div>
                <div>
                  {selectedVehicle.length > 0 ? (
                    <p className="text-xl font-bold leading-7 text-gray-800 text-left capitalize">
                      {periodic.name + " " + "for"}
                      <br />
                      <span className="font-bold text-blue-900 capitalize">
                        {selectedVehicle[0]?.model}
                      </span>
                    </p>
                  ) : (
                    <p className="text-xl font-bold leading-7 text-gray-800 text-left capitalize  ">
                      {periodic.name}{" "}
                    </p>
                  )}

                  <div>
                    <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                      {" "}
                      {periodic.hour}{" "}
                    </p>
                  </div>
                  <div>
                    <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                      {" "}
                      {periodic.warranty}{" "}
                    </p>
                  </div>
                  <div>
                    <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                      {periodic.month}
                    </p>
                  </div>
                </div>{" "}
              </div>
              {/* Remove class [ h-24 ] when adding a card block */}
              {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
              <div className=""></div>
              {/* Remove class [ h-24 ] when adding a card block */}
              {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
              <div className="flex justify-center items-center">
                <PriceAndButtons
                  service_price_object={periodic.car_price}
                  service_price={periodic.service_price}
                  weeksToArrive={periodic.weeks_to_arrive}
                />
              </div>
            </div>
          ))}
        </div>
        {/* brake */}
        <div className="container mx-auto lg:container px-10 sm:px-10 ">
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
                <PriceAndButtons
                  service_price_object={brake.car_price}
                  service_price={brake.service_price}
                  weeksToArrive={brake.weeks_to_arrive}
                />
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
}

export default acservice;
