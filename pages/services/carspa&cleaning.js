import Layout from "@/components/Layout";
import { Store } from "@/utils/Store";
import servicedata from "@/utils/servicedata";
import Image from "next/image";
import { useRouter } from "next/router";
import SelectedCar from "@/components/SelectedCar";
import PriceAndButtons from "@/components/PriceAndButtons";
import React, { useContext } from "react";

function carspacleaning() {
  const { state, dispatch } = useContext(Store);

  return (
    <>
      <Layout title="Car Spa & Cleaning">
        {/* Winter_Specials */}
        <div className="container mx-auto lg:container px-10 xl:px-20 sm:px-10 ">
          <p className=" mt-20 lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">
            Winter Special
          </p>
          <p className="text-lg leading-7 text-gray-600 mt-1 xl:w-7/12 w-full">
            Whether article spirits new her covered hastily sitting her. Money
            witty books nor son add
          </p>
          <SelectedCar />
          {servicedata.Winter_Specials.map((Winter_Special) => (
            <div className="flex flex-wrap sm:flex-no-wrap  w-full shadow mb-16 mt-5 rounded-lg">
              <div className="w-full sm:w-1/5  bg-white">
                <Image
                  src={Winter_Special.image}
                  alt={Winter_Special.name}
                  width={200}
                  height={0}
                  className="ml-5 lg:ml-0 mt-0 lg:mt-5"
                />
              </div>

              <div className="w-full sm:w-1/5 bg-white ">
                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 lg:mt-0 mt-5 lg:ml-0 ml-5 my-0 lg:my-5 py-0 lg:pt-5">
                  {Winter_Special.name}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Winter_Special.description}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Winter_Special.description1}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Winter_Special.description2}
                </p>
              </div>
              <div className="w-full sm:w-1/5  bg-white mt-0 lg:mt-16 ml-0 lg:ml-16">
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Winter_Special.description3}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Winter_Special.description4}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Winter_Special.description5}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Winter_Special.description6}
                </p>
              </div>
              <div className="w-full sm:w-1/5 my-8 lg:ml-0 ml-5 bg-white mt-0 lg:mt-10">
                <PriceAndButtons
                  service_price_object={Winter_Special.car_price}
                  service_price={Winter_Special.service_price}
                  weeksToArrive={Winter_Special.weeks_to_arrive}
                  serviceItem={Winter_Special}
                />
              </div>
            </div>
          ))}
        </div>
        {/* Spas */}
        <div className="container mx-auto lg:container px-10 xl:px-20 sm:px-10 ">
          <p className=" mt-20 lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">
            Spa
          </p>
          <p className="text-lg leading-7 text-gray-600 mt-1 xl:w-7/12 w-full">
            Whether article spirits new her covered hastily sitting her. Money
            witty books nor son add
          </p>

          {servicedata.Spas.map((Spa) => (
            <div className="flex flex-wrap sm:flex-no-wrap  w-full shadow mb-16 mt-5 rounded-lg">
              <div className="w-full sm:w-1/5  bg-white">
                <Image
                  src={Spa.image}
                  alt={Spa.name}
                  width={200}
                  height={0}
                  className="ml-5 lg:ml-0 mt-0 lg:mt-5"
                />
              </div>

              <div className="w-full sm:w-1/5 bg-white ">
                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 lg:mt-0 mt-5 lg:ml-0 ml-5 my-0 lg:my-5 py-0 lg:pt-5">
                  {Spa.name}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Spa.description}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Spa.description1}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Spa.description2}
                </p>
              </div>
              <div className="w-full sm:w-1/5  bg-white mt-0 lg:mt-16 ml-0 lg:ml-16">
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Spa.description3}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Spa.description4}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Spa.description5}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Spa.description6}
                </p>
              </div>
              <div className="w-full sm:w-1/5 my-8 lg:ml-0 ml-5 bg-white mt-0 lg:mt-10">
                <PriceAndButtons
                  service_price_object={Spa.car_price}
                  service_price={Spa.service_price}
                  weeksToArrive={Spa.weeks_to_arrive}
                  serviceItem={Spa}
                />
              </div>
            </div>
          ))}
        </div>
        {/* Inspections */}
        <div className="container mx-auto lg:container px-10 xl:px-20 sm:px-10 ">
          <p className=" mt-20 lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">
            Inspection
          </p>
          <p className="text-lg leading-7 text-gray-600 mt-1 xl:w-7/12 w-full">
            Whether article spirits new her covered hastily sitting her. Money
            witty books nor son add
          </p>
          {servicedata.Inspections.map((Inspection) => (
            <div className="flex flex-wrap sm:flex-no-wrap  w-full shadow mb-16 mt-5 rounded-lg">
              <div className="w-full sm:w-1/5  bg-white">
                <Image
                  src={Inspection.image}
                  alt={Inspection.name}
                  width={200}
                  height={0}
                  className="ml-5 lg:ml-0 mt-0 lg:mt-5"
                />
              </div>

              <div className="w-full sm:w-1/5 bg-white ">
                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 lg:mt-0 mt-5 lg:ml-0 ml-5 my-0 lg:my-5 py-0 lg:pt-5">
                  {Inspection.name}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Inspection.description}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Inspection.description1}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Inspection.description2}
                </p>
              </div>
              <div className="w-full sm:w-1/5  bg-white mt-0 lg:mt-16 ml-0 lg:ml-16">
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Inspection.description3}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Inspection.description4}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Inspection.description5}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Inspection.description6}
                </p>
              </div>
              <div className="w-full sm:w-1/5 my-8 lg:ml-0 ml-5 bg-white mt-0 lg:mt-10">
                <PriceAndButtons
                  service_price_object={Inspection.car_price}
                  service_price={Inspection.service_price}
                  weeksToArrive={Inspection.weeks_to_arrive}
                  serviceItem={Inspection}
                />
              </div>
            </div>
          ))}
        </div>
        {/* Sunroofs */}
        <div className="container mx-auto lg:container px-10 xl:px-20 sm:px-10 ">
          <p className=" mt-20 lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">
            Sunroof
          </p>
          <p className="text-lg leading-7 text-gray-600 mt-1 xl:w-7/12 w-full">
            Whether article spirits new her covered hastily sitting her. Money
            witty books nor son add
          </p>
          {servicedata.Sunroofs.map((Sunroof) => (
            <div className="flex flex-wrap sm:flex-no-wrap  w-full shadow mb-16 mt-5 rounded-lg">
              <div className="w-full sm:w-1/5  bg-white">
                <Image
                  src={Sunroof.image}
                  alt={Sunroof.name}
                  width={200}
                  height={0}
                  className="ml-5 lg:ml-0 mt-0 lg:mt-5"
                />
              </div>

              <div className="w-full sm:w-1/5 bg-white ">
                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 lg:mt-0 mt-5 lg:ml-0 ml-5 my-0 lg:my-5 py-0 lg:pt-5">
                  {Sunroof.name}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Sunroof.description}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Sunroof.description1}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Sunroof.description2}
                </p>
              </div>
              <div className="w-full sm:w-1/5  bg-white mt-0 lg:mt-16 ml-0 lg:ml-16">
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Sunroof.description3}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Sunroof.description4}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Sunroof.description5}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Sunroof.description6}
                </p>
              </div>
              <div className="w-full sm:w-1/5 my-8 lg:ml-0 ml-5 bg-white mt-0 lg:mt-10">
                <PriceAndButtons
                  service_price_object={Sunroof.car_price}
                  service_price={Sunroof.service_price}
                  weeksToArrive={Sunroof.weeks_to_arrive}
                  serviceItem={Sunroof}
                />
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
}

export default carspacleaning;
