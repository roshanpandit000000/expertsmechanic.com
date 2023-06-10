import Layout from "@/components/Layout";
import { Store } from "@/utils/Store";
import servicedata from "@/utils/servicedata";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import SelectedCar from "@/components/SelectedCar";
import PriceAndButtons from "@/components/PriceAndButtons";

function clutchbodyparts() {
  const { state, dispatch } = useContext(Store);

  return (
    <>
      <Layout title="Clutch & Body Parts">
        <div className="container mx-auto lg:container px-10 xl:px-20 sm:px-10 ">
          <p className=" mt-24 lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">
            Clutch
          </p>
          <p className="text-lg leading-7 text-gray-600 mt-1 xl:w-7/12 w-full">
            Whether article spirits new her covered hastily sitting her. Money
            witty books nor son add
          </p>
          <SelectedCar />
          {servicedata.Clutchs.map((clutch) => (
            <div className="flex flex-wrap sm:flex-no-wrap  w-full shadow mb-16 mt-5 rounded-lg">
              <div className="w-full sm:w-1/5  bg-white">
                <Image
                  src={clutch.image}
                  alt={clutch.name}
                  width={200}
                  height={0}
                  className="ml-5 lg:ml-0 mt-0 lg:mt-5"
                />
              </div>

              <div className="w-full sm:w-1/5 bg-white ">
                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 lg:mt-0 mt-5 lg:ml-0 ml-5 my-0 lg:my-5 py-0 lg:pt-5">
                  {clutch.name}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {clutch.description}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {clutch.description1}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {clutch.description2}
                </p>
              </div>
              <div className="w-full sm:w-1/5  bg-white mt-0 lg:mt-16 ml-0 lg:ml-16">
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {clutch.description3}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {clutch.description4}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {clutch.description5}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {clutch.description6}
                </p>
              </div>
              <div className="w-full sm:w-1/5 my-8 lg:ml-0 ml-5 bg-white mt-0 lg:mt-10">
                <PriceAndButtons
                  service_price_object={clutch.car_price}
                  service_price={clutch.service_price}
                  weeksToArrive={clutch.weeks_to_arrive}
                  serviceItem={clutch}
                />
              </div>
            </div>
          ))}
        </div>

        {/* body_part */}

        <div className="container mx-auto lg:container px-10 xl:px-20 sm:px-10 ">
          <p className=" mt-24 lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">
            Body Parts
          </p>
          <p className="text-lg leading-7 text-gray-600 mt-1 xl:w-7/12 w-full">
            Whether article spirits new her covered hastily sitting her. Money
            witty books nor son add
          </p>
          <SelectedCar />
          {servicedata.Body_Parts.map((Body_Part) => (
            <div className="flex flex-wrap sm:flex-no-wrap  w-full shadow mb-16 mt-5 rounded-lg">
              <div className="w-full sm:w-1/5  bg-white">
                <Image
                  src={Body_Part.image}
                  alt={Body_Part.name}
                  width={200}
                  height={0}
                  className="ml-5 lg:ml-0 mt-0 lg:mt-5"
                />
              </div>

              <div className="w-full sm:w-1/5 bg-white ">
                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 lg:mt-0 mt-5 lg:ml-0 ml-5 my-0 lg:my-5 py-0 lg:pt-5">
                  {Body_Part.name}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Body_Part.description}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Body_Part.description1}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Body_Part.description2}
                </p>
              </div>
              <div className="w-full sm:w-1/5  bg-white mt-0 lg:mt-16 ml-0 lg:ml-16">
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Body_Part.description3}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Body_Part.description4}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Body_Part.description5}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Body_Part.description6}
                </p>
              </div>
              <div className="w-full sm:w-1/5 my-8 lg:ml-0 ml-5 bg-white mt-0 lg:mt-10">
                <PriceAndButtons
                  service_price_object={Body_Part.car_price}
                  service_price={Body_Part.service_price}
                  weeksToArrive={Body_Part.weeks_to_arrive}
                  serviceItem={Body_Part}
                />
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
}

export default clutchbodyparts;
