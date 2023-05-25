import Layout from "@/components/Layout";
import Image from "next/image";
import React, { useContext } from "react";
import servicedata from "@/utils/servicedata";
import { Store } from "@/utils/Store";
import { useRouter } from "next/router";
import SelectedCar from "@/components/SelectedCar";
import PriceAndButtons from "@/components/PriceAndButtons";

function dentingpainting() {
  const { state, dispatch } = useContext(Store);

  return (
    <>
      <Layout title="Denting/Painting">
        {/* Front_Side */}
        <div className="container mx-auto lg:container px-10 xl:px-20 sm:px-10 ">
          <p className=" mt-20 lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">
          Front Side
          </p>
          <p className="text-lg leading-7 text-gray-600 mt-1 xl:w-7/12 w-full">
            Whether article spirits new her covered hastily sitting her. Money
            witty books nor son add
          </p>
          <SelectedCar />
          {servicedata.Front_Sides.map((Front_Side) => (
            <div className="flex flex-wrap sm:flex-no-wrap  w-full shadow mb-16 mt-5 rounded-lg">
              <div className="w-full sm:w-1/5  bg-white">
                <Image
                  src={Front_Side.image}
                  alt={Front_Side.name}
                  width={200}
                  height={0}
                  className="ml-5 lg:ml-0 mt-0 lg:mt-5"
                />
              </div>

              <div className="w-full sm:w-1/5 bg-white ">
                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 lg:mt-0 mt-5 lg:ml-0 ml-5 my-0 lg:my-5 py-0 lg:pt-5">
                  {Front_Side.name}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Front_Side.description}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Front_Side.description1}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Front_Side.description2}
                </p>
              </div>
              <div className="w-full sm:w-1/5  bg-white mt-0 lg:mt-16 ml-0 lg:ml-16">
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Front_Side.description3}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Front_Side.description4}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Front_Side.description5}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Front_Side.description6}
                </p>
              </div>
              <div className="w-full sm:w-1/5 my-8 lg:ml-0 ml-5 bg-white mt-0 lg:mt-10">
                <PriceAndButtons
                  service_price_object={Front_Side.car_price}
                  service_price={Front_Side.service_price}
                  weeksToArrive={Front_Side.weeks_to_arrive}
                  serviceItem={Front_Side}
                />
              </div>
            </div>
          ))}
        </div>
        {/* Rear_Side */}
        <div className="container mx-auto lg:container px-10 xl:px-20 sm:px-10 ">
          <p className=" mt-20 lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">
          Rear Side
          </p>
          <p className="text-lg leading-7 text-gray-600 mt-1 xl:w-7/12 w-full">
            Whether article spirits new her covered hastily sitting her. Money
            witty books nor son add
          </p>
          
          {servicedata.Rear_Sides.map((Rear_Side) => (
            <div className="flex flex-wrap sm:flex-no-wrap  w-full shadow mb-16 mt-5 rounded-lg">
              <div className="w-full sm:w-1/5  bg-white">
                <Image
                  src={Rear_Side.image}
                  alt={Rear_Side.name}
                  width={200}
                  height={0}
                  className="ml-5 lg:ml-0 mt-0 lg:mt-5"
                />
              </div>

              <div className="w-full sm:w-1/5 bg-white ">
                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 lg:mt-0 mt-5 lg:ml-0 ml-5 my-0 lg:my-5 py-0 lg:pt-5">
                  {Rear_Side.name}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Rear_Side.description}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Rear_Side.description1}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Rear_Side.description2}
                </p>
              </div>
              <div className="w-full sm:w-1/5  bg-white mt-0 lg:mt-16 ml-0 lg:ml-16">
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Rear_Side.description3}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Rear_Side.description4}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Rear_Side.description5}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Rear_Side.description6}
                </p>
              </div>
              <div className="w-full sm:w-1/5 my-8 lg:ml-0 ml-5 bg-white mt-0 lg:mt-10">
                <PriceAndButtons
                  service_price_object={Rear_Side.car_price}
                  service_price={Rear_Side.service_price}
                  weeksToArrive={Rear_Side.weeks_to_arrive}
                  serviceItem={Rear_Side}
                />
              </div>
            </div>
          ))}
        </div>
        {/* Whole_Bodys */}
        <div className="container mx-auto lg:container px-10 xl:px-20 sm:px-10 ">
          <p className=" mt-20 lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">
          Whole Bodys
          </p>
          <p className="text-lg leading-7 text-gray-600 mt-1 xl:w-7/12 w-full">
            Whether article spirits new her covered hastily sitting her. Money
            witty books nor son add
          </p>
          {servicedata.Whole_Bodys.map((Whole_Body) => (
            <div className="flex flex-wrap sm:flex-no-wrap  w-full shadow mb-16 mt-5 rounded-lg">
              <div className="w-full sm:w-1/5  bg-white">
                <Image
                  src={Whole_Body.image}
                  alt={Whole_Body.name}
                  width={200}
                  height={0}
                  className="ml-5 lg:ml-0 mt-0 lg:mt-5"
                />
              </div>

              <div className="w-full sm:w-1/5 bg-white ">
                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 lg:mt-0 mt-5 lg:ml-0 ml-5 my-0 lg:my-5 py-0 lg:pt-5">
                  {Whole_Body.name}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Whole_Body.description}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Whole_Body.description1}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Whole_Body.description2}
                </p>
              </div>
              <div className="w-full sm:w-1/5  bg-white mt-0 lg:mt-16 ml-0 lg:ml-16">
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Whole_Body.description3}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Whole_Body.description4}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Whole_Body.description5}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Whole_Body.description6}
                </p>
              </div>
              <div className="w-full sm:w-1/5 my-8 lg:ml-0 ml-5 bg-white mt-0 lg:mt-10">
                <PriceAndButtons
                  service_price_object={Whole_Body.car_price}
                  service_price={Whole_Body.service_price}
                  weeksToArrive={Whole_Body.weeks_to_arrive}
                  serviceItem={Whole_Body}
                />
              </div>
            </div>
          ))}
        </div>
        {/* Left_Sides */}
        <div className="container mx-auto lg:container px-10 xl:px-20 sm:px-10 ">
          <p className=" mt-20 lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">
          Left Side
          </p>
          <p className="text-lg leading-7 text-gray-600 mt-1 xl:w-7/12 w-full">
            Whether article spirits new her covered hastily sitting her. Money
            witty books nor son add
          </p>
          {servicedata.Left_Sides.map((Left_Side) => (
            <div className="flex flex-wrap sm:flex-no-wrap  w-full shadow mb-16 mt-5 rounded-lg">
              <div className="w-full sm:w-1/5  bg-white">
                <Image
                  src={Left_Side.image}
                  alt={Left_Side.name}
                  width={200}
                  height={0}
                  className="ml-5 lg:ml-0 mt-0 lg:mt-5"
                />
              </div>

              <div className="w-full sm:w-1/5 bg-white ">
                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 lg:mt-0 mt-5 lg:ml-0 ml-5 my-0 lg:my-5 py-0 lg:pt-5">
                  {Left_Side.name}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Left_Side.description}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Left_Side.description1}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Left_Side.description2}
                </p>
              </div>
              <div className="w-full sm:w-1/5  bg-white mt-0 lg:mt-16 ml-0 lg:ml-16">
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Left_Side.description3}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Left_Side.description4}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Left_Side.description5}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Left_Side.description6}
                </p>
              </div>
              <div className="w-full sm:w-1/5 my-8 lg:ml-0 ml-5 bg-white mt-0 lg:mt-10">
                <PriceAndButtons
                  service_price_object={Left_Side.car_price}
                  service_price={Left_Side.service_price}
                  weeksToArrive={Left_Side.weeks_to_arrive}
                  serviceItem={Left_Side}
                />
              </div>
            </div>
          ))}
        </div>
        {/* Right_Sides */}
        <div className="container mx-auto lg:container px-10 xl:px-20 sm:px-10 ">
          <p className=" mt-20 lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">
          Right Side
          </p>
          <p className="text-lg leading-7 text-gray-600 mt-1 xl:w-7/12 w-full">
            Whether article spirits new her covered hastily sitting her. Money
            witty books nor son add
          </p>
          <SelectedCar />
          {servicedata.Right_Sides.map((Right_Side) => (
            <div className="flex flex-wrap sm:flex-no-wrap  w-full shadow mb-16 mt-5 rounded-lg">
              <div className="w-full sm:w-1/5  bg-white">
                <Image
                  src={Right_Side.image}
                  alt={Right_Side.name}
                  width={200}
                  height={0}
                  className="ml-5 lg:ml-0 mt-0 lg:mt-5"
                />
              </div>

              <div className="w-full sm:w-1/5 bg-white ">
                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 lg:mt-0 mt-5 lg:ml-0 ml-5 my-0 lg:my-5 py-0 lg:pt-5">
                  {Right_Side.name}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Right_Side.description}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Right_Side.description1}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Right_Side.description2}
                </p>
              </div>
              <div className="w-full sm:w-1/5  bg-white mt-0 lg:mt-16 ml-0 lg:ml-16">
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Right_Side.description3}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Right_Side.description4}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Right_Side.description5}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Right_Side.description6}
                </p>
              </div>
              <div className="w-full sm:w-1/5 my-8 lg:ml-0 ml-5 bg-white mt-0 lg:mt-10">
                <PriceAndButtons
                  service_price_object={Right_Side.car_price}
                  service_price={Right_Side.service_price}
                  weeksToArrive={Right_Side.weeks_to_arrive}
                  serviceItem={Right_Side}
                />
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
}

export default dentingpainting;
