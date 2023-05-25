import Layout from "@/components/Layout";
import { Store } from "@/utils/Store";
import servicedata from "@/utils/servicedata";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import PriceAndButtons from "@/components/PriceAndButtons";
import SelectedCar from "@/components/SelectedCar";

function windshield() {
  const { state, dispatch, selectedVehicle } = useContext(Store);

  return (
    <>
      <Layout title="WindShiels & Lights">
        {/* Windshields */}
        <div className="container mx-auto lg:container px-10 xl:px-20 sm:px-10 ">
          <p className=" mt-20 lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">
          Windshield
          </p>
          <p className="text-lg leading-7 text-gray-600 mt-1 xl:w-7/12 w-full">
            Whether article spirits new her covered hastily sitting her. Money
            witty books nor son add
          </p>
          <SelectedCar />
          {servicedata.Windshields.map((Windshield) => (
            <div className="flex flex-wrap sm:flex-no-wrap  w-full shadow mb-16 mt-5 rounded-lg">
              <div className="w-full sm:w-1/5  bg-white">
                <Image
                  src={Windshield.image}
                  alt={Windshield.name}
                  width={200}
                  height={0}
                  className="ml-5 lg:ml-0 mt-0 lg:mt-5"
                />
              </div>

              <div className="w-full sm:w-1/5 bg-white ">
                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 lg:mt-0 mt-5 lg:ml-0 ml-5 my-0 lg:my-5 py-0 lg:pt-5">
                  {Windshield.name}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Windshield.description}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Windshield.description1}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Windshield.description2}
                </p>
              </div>
              <div className="w-full sm:w-1/5  bg-white mt-0 lg:mt-16 ml-0 lg:ml-16">
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Windshield.description3}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Windshield.description4}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Windshield.description5}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Windshield.description6}
                </p>
              </div>
              <div className="w-full sm:w-1/5 my-8 lg:ml-0 ml-5 bg-white mt-0 lg:mt-10">
                <PriceAndButtons
                  service_price_object={Windshield.car_price}
                  service_price={Windshield.service_price}
                  weeksToArrive={Windshield.weeks_to_arrive}
                  serviceItem={Windshield}
                />
              </div>
            </div>
          ))}
        </div>
        {/* Glasses */}
        <div className="container mx-auto lg:container px-10 xl:px-20 sm:px-10 ">
          <p className=" mt-20 lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">
          Glasses
          </p>
          <p className="text-lg leading-7 text-gray-600 mt-1 xl:w-7/12 w-full">
            Whether article spirits new her covered hastily sitting her. Money
            witty books nor son add
          </p>

          {servicedata.Glasses.map((Glasse) => (
            <div className="flex flex-wrap sm:flex-no-wrap  w-full shadow mb-16 mt-5 rounded-lg">
              <div className="w-full sm:w-1/5  bg-white">
                <Image
                  src={Glasse.image}
                  alt={Glasse.name}
                  width={200}
                  height={0}
                  className="ml-5 lg:ml-0 mt-0 lg:mt-5"
                />
              </div>

              <div className="w-full sm:w-1/5 bg-white ">
                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 lg:mt-0 mt-5 lg:ml-0 ml-5 my-0 lg:my-5 py-0 lg:pt-5">
                  {Glasse.name}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Glasse.description}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Glasse.description1}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Glasse.description2}
                </p>
              </div>
              <div className="w-full sm:w-1/5  bg-white mt-0 lg:mt-16 ml-0 lg:ml-16">
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Glasse.description3}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Glasse.description4}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Glasse.description5}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Glasse.description6}
                </p>
              </div>
              <div className="w-full sm:w-1/5 my-8 lg:ml-0 ml-5 bg-white mt-0 lg:mt-10">
                <PriceAndButtons
                  service_price_object={Glasse.car_price}
                  service_price={Glasse.service_price}
                  weeksToArrive={Glasse.weeks_to_arrive}
                  serviceItem={Glasse}
                />
              </div>
            </div>
          ))}
        </div>
        {/* Lights */}
        <div className="container mx-auto lg:container px-10 xl:px-20 sm:px-10 ">
          <p className=" mt-20 lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">
          Light
          </p>
          <p className="text-lg leading-7 text-gray-600 mt-1 xl:w-7/12 w-full">
            Whether article spirits new her covered hastily sitting her. Money
            witty books nor son add
          </p>
          {servicedata.Lights.map((Light) => (
            <div className="flex flex-wrap sm:flex-no-wrap  w-full shadow mb-16 mt-5 rounded-lg">
              <div className="w-full sm:w-1/5  bg-white">
                <Image
                  src={Light.image}
                  alt={Light.name}
                  width={200}
                  height={0}
                  className="ml-5 lg:ml-0 mt-0 lg:mt-5"
                />
              </div>

              <div className="w-full sm:w-1/5 bg-white ">
                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 lg:mt-0 mt-5 lg:ml-0 ml-5 my-0 lg:my-5 py-0 lg:pt-5">
                  {Light.name}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Light.description}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Light.description1}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Light.description2}
                </p>
              </div>
              <div className="w-full sm:w-1/5  bg-white mt-0 lg:mt-16 ml-0 lg:ml-16">
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Light.description3}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Light.description4}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Light.description5}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Light.description6}
                </p>
              </div>
              <div className="w-full sm:w-1/5 my-8 lg:ml-0 ml-5 bg-white mt-0 lg:mt-10">
                <PriceAndButtons
                  service_price_object={Light.car_price}
                  service_price={Light.service_price}
                  weeksToArrive={Light.weeks_to_arrive}
                  serviceItem={Light}
                />
              </div>
            </div>
          ))}
        </div>
        {/* Side_Mirrors */}
        <div className="container mx-auto lg:container px-10 xl:px-20 sm:px-10 ">
          <p className=" mt-20 lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">
          Side Mirror
          </p>
          <p className="text-lg leading-7 text-gray-600 mt-1 xl:w-7/12 w-full">
            Whether article spirits new her covered hastily sitting her. Money
            witty books nor son add
          </p>
          {servicedata.Side_Mirrors.map((Side_Mirror) => (
            <div className="flex flex-wrap sm:flex-no-wrap  w-full shadow mb-16 mt-5 rounded-lg">
              <div className="w-full sm:w-1/5  bg-white">
                <Image
                  src={Side_Mirror.image}
                  alt={Side_Mirror.name}
                  width={200}
                  height={0}
                  className="ml-5 lg:ml-0 mt-0 lg:mt-5"
                />
              </div>

              <div className="w-full sm:w-1/5 bg-white ">
                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 lg:mt-0 mt-5 lg:ml-0 ml-5 my-0 lg:my-5 py-0 lg:pt-5">
                  {Side_Mirror.name}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Side_Mirror.description}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Side_Mirror.description1}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Side_Mirror.description2}
                </p>
              </div>
              <div className="w-full sm:w-1/5  bg-white mt-0 lg:mt-16 ml-0 lg:ml-16">
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Side_Mirror.description3}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Side_Mirror.description4}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Side_Mirror.description5}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Side_Mirror.description6}
                </p>
              </div>
              <div className="w-full sm:w-1/5 my-8 lg:ml-0 ml-5 bg-white mt-0 lg:mt-10">
                <PriceAndButtons
                  service_price_object={Side_Mirror.car_price}
                  service_price={Side_Mirror.service_price}
                  weeksToArrive={Side_Mirror.weeks_to_arrive}
                  serviceItem={Side_Mirror}
                />
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
}

export default windshield;
