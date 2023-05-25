import Layout from "@/components/Layout";
import { Store } from "@/utils/Store";
import servicedata from "@/utils/servicedata";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import PriceAndButtons from "@/components/PriceAndButtons";
import SelectedCar from "@/components/SelectedCar";

function tyreswork() {
  const { state, dispatch, selectedVehicle } = useContext(Store);
  const { query } = useRouter();

  return (
    <>
      <Layout title="Tyre Replacment">
        {/* brake */}
        <div className="container mx-auto lg:container px-10 xl:px-20 sm:px-10 ">
          <p className=" mt-20 lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">
            Tyres
          </p>
          <p className="text-lg leading-7 text-gray-600 mt-4 xl:w-7/12 w-full">
            Whether article spirits new her covered hastily sitting her. Money
            witty books nor son add
          </p>
          <SelectedCar />
          {servicedata.Tyres.map((Tyre) => {
            return (
              <div className="flex flex-wrap sm:flex-no-wrap  w-full shadow mb-16 mt-5 rounded-lg">
                <div className="w-full sm:w-1/5  bg-white">
                  <Image
                    src={Tyre.image}
                    alt={Tyre.name}
                    width={200}
                    height={0}
                    className="ml-5 lg:ml-0 mt-0 lg:mt-5"
                  />
                </div>

                <div className="w-full sm:w-1/5 bg-white ">
                  <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 lg:mt-0 mt-5 lg:ml-0 ml-5 my-0 lg:my-5 py-0 lg:pt-5">
                    {Tyre.name}
                  </p>
                  <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                    {Tyre.description}
                  </p>
                  <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                    {Tyre.description1}
                  </p>
                  <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                    {Tyre.description2}
                  </p>
                </div>
                <div className="w-full sm:w-1/5  bg-white mt-0 lg:mt-16 ml-0 lg:ml-16">
                  <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                    {Tyre.description3}
                  </p>
                  <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                    {Tyre.description4}
                  </p>
                  <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                    {Tyre.description5}
                  </p>
                  <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                    {Tyre.description6}
                  </p>
                </div>
                <div className="w-full sm:w-1/5 my-8 lg:ml-0 ml-5 bg-white mt-0 lg:mt-10">
                  <PriceAndButtons
                    service_price_object={Tyre.car_price}
                    service_price={Tyre.service_price}
                    weeksToArrive={Tyre.weeks_to_arrive}
                    serviceItem={Tyre}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Wheel Care Services */}
        <div className="container mx-auto lg:container px-10 xl:px-20 sm:px-10 ">
          <p className=" mt-20 lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">
          Wheel Care Services
          </p>
          <p className="text-lg leading-7 text-gray-600 mt-4 xl:w-7/12 w-full">
            Whether article spirits new her covered hastily sitting her. Money
            witty books nor son add
          </p>
          <SelectedCar />
          {servicedata.Wheel_Care_Services.map((Wheel_Care_Service) => {
            return (
              <div className="flex flex-wrap sm:flex-no-wrap  w-full shadow mb-16 mt-5 rounded-lg">
                <div className="w-full sm:w-1/5  bg-white">
                  <Image
                    src={Wheel_Care_Service.image}
                    alt={Wheel_Care_Service.name}
                    width={200}
                    height={0}
                    className="ml-5 lg:ml-0 mt-0 lg:mt-5"
                  />
                </div>

                <div className="w-full sm:w-1/5 bg-white ">
                  <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 lg:mt-0 mt-5 lg:ml-0 ml-5 my-0 lg:my-5 py-0 lg:pt-5">
                    {Wheel_Care_Service.name}
                  </p>
                  <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                    {Wheel_Care_Service.description}
                  </p>
                  <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                    {Wheel_Care_Service.description1}
                  </p>
                  <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                    {Wheel_Care_Service.description2}
                  </p>
                </div>
                <div className="w-full sm:w-1/5  bg-white mt-0 lg:mt-16 ml-0 lg:ml-16">
                  <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                    {Wheel_Care_Service.description3}
                  </p>
                  <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                    {Wheel_Care_Service.description4}
                  </p>
                  <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                    {Wheel_Care_Service.description5}
                  </p>
                  <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                    {Wheel_Care_Service.description6}
                  </p>
                </div>
                <div className="w-full sm:w-1/5 my-8 lg:ml-0 ml-5 bg-white mt-0 lg:mt-10">
                  <PriceAndButtons
                    service_price_object={Wheel_Care_Service.car_price}
                    service_price={Wheel_Care_Service.service_price}
                    weeksToArrive={Wheel_Care_Service.weeks_to_arrive}
                    serviceItem={Wheel_Care_Service}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Layout>
    </>
  );
}

export default tyreswork;
