import Layout from "@/components/Layout";
import { Store } from "@/utils/Store";
import servicedata from "@/utils/servicedata";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import SelectedCar from "@/components/SelectedCar";
import PriceAndButtons from "@/components/PriceAndButtons";

function suspentionfitments() {
  const { state, dispatch } = useContext(Store);

  return (
    <>
       <Layout title="Suspention & Fitments">
        {/* Steerings */}
        <div className="container mx-auto lg:container px-10 xl:px-20 sm:px-10 ">
          <p className=" mt-24 lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">
          Steering
          </p>
          <p className="text-lg leading-7 text-gray-600 mt-1 xl:w-7/12 w-full">
            Whether article spirits new her covered hastily sitting her. Money
            witty books nor son add
          </p>
          <SelectedCar />
          {servicedata.Steerings.map((Steering) => (
            <div className="flex flex-wrap sm:flex-no-wrap  w-full shadow mb-16 mt-5 rounded-lg">
              <div className="w-full sm:w-1/5  bg-white">
                <Image
                  src={Steering.image}
                  alt={Steering.name}
                  width={200}
                  height={0}
                  className="ml-5 lg:ml-0 mt-0 lg:mt-5"
                />
              </div>

              <div className="w-full sm:w-1/5 bg-white ">
                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 lg:mt-0 mt-5 lg:ml-0 ml-5 my-0 lg:my-5 py-0 lg:pt-5">
                  {Steering.name}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Steering.description}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Steering.description1}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Steering.description2}
                </p>
              </div>
              <div className="w-full sm:w-1/5  bg-white mt-0 lg:mt-16 ml-0 lg:ml-16">
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Steering.description3}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Steering.description4}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Steering.description5}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Steering.description6}
                </p>
              </div>
              <div className="w-full sm:w-1/5 my-8 lg:ml-0 ml-5 bg-white mt-0 lg:mt-10">
                <PriceAndButtons
                  service_price_object={Steering.car_price}
                  service_price={Steering.service_price}
                  weeksToArrive={Steering.weeks_to_arrive}
                  serviceItem={Steering}
                />
              </div>
            </div>
          ))}
        </div>
        {/* Suspensions */}
        <div className="container mx-auto lg:container px-10 xl:px-20 sm:px-10 ">
          <p className=" mt-10 lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">
          Suspension
          </p>
          <p className="text-lg leading-7 text-gray-600 mt-1 xl:w-7/12 w-full">
            Whether article spirits new her covered hastily sitting her. Money
            witty books nor son add
          </p>
          
          {servicedata.Suspensions.map((Suspension) => (
            <div className="flex flex-wrap sm:flex-no-wrap  w-full shadow mb-16 mt-5 rounded-lg">
              <div className="w-full sm:w-1/5  bg-white">
                <Image
                  src={Suspension.image}
                  alt={Suspension.name}
                  width={200}
                  height={0}
                  className="ml-5 lg:ml-0 mt-0 lg:mt-5"
                />
              </div>

              <div className="w-full sm:w-1/4 bg-white ">
                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 lg:mt-0 mt-5 lg:ml-0 ml-5 my-0 lg:my-5 py-0 lg:pt-5">
                  {Suspension.name}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Suspension.description}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Suspension.description1}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Suspension.description2}
                </p>
              </div>
              <div className="w-full sm:w-1/5  bg-white mt-0 lg:mt-16 ml-0 lg:ml-16">
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Suspension.description3}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Suspension.description4}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Suspension.description5}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Suspension.description6}
                </p>
              </div>
              <div className="w-full sm:w-1/5 my-8 lg:ml-0 ml-5 bg-white mt-0 lg:mt-10">
                <PriceAndButtons
                  service_price_object={Suspension.car_price}
                  service_price={Suspension.service_price}
                  weeksToArrive={Suspension.weeks_to_arrive}
                  serviceItem={Suspension}
                />
              </div>
            </div>
          ))}
        </div>
        {/* Fitments */}
        <div className="container mx-auto lg:container px-10 xl:px-20 sm:px-10 ">
          <p className=" mt-20 lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">
          Fitment
          </p>
          <p className="text-lg leading-7 text-gray-600 mt-1 xl:w-7/12 w-full">
            Whether article spirits new her covered hastily sitting her. Money
            witty books nor son add
          </p>
          {servicedata.Fitments.map((Fitment) => (
            <div className="flex flex-wrap sm:flex-no-wrap  w-full shadow mb-16 mt-5 rounded-lg">
              <div className="w-full sm:w-1/5  bg-white">
                <Image
                  src={Fitment.image}
                  alt={Fitment.name}
                  width={200}
                  height={0}
                  className="ml-5 lg:ml-0 mt-0 lg:mt-5"
                />
              </div>

              <div className="w-full sm:w-1/5 bg-white ">
                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 lg:mt-0 mt-5 lg:ml-0 ml-5 my-0 lg:my-5 py-0 lg:pt-5">
                  {Fitment.name}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Fitment.description}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Fitment.description1}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Fitment.description2}
                </p>
              </div>
              <div className="w-full sm:w-1/5  bg-white mt-0 lg:mt-16 ml-0 lg:ml-16">
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Fitment.description3}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Fitment.description4}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Fitment.description5}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Fitment.description6}
                </p>
              </div>
              <div className="w-full sm:w-1/5 my-8 lg:ml-0 ml-5 bg-white mt-0 lg:mt-10">
                <PriceAndButtons
                  service_price_object={Fitment.car_price}
                  service_price={Fitment.service_price}
                  weeksToArrive={Fitment.weeks_to_arrive}
                  serviceItem={Fitment}
                />
              </div>
            </div>
          ))}
        </div>
        {/* OBDs */}
        <div className="container mx-auto lg:container px-10 xl:px-20 sm:px-10 ">
          <p className=" mt-20 lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">
          OBD
          </p>
          <p className="text-lg leading-7 text-gray-600 mt-1 xl:w-7/12 w-full">
            Whether article spirits new her covered hastily sitting her. Money
            witty books nor son add
          </p>
          {servicedata.OBDs.map((OBD) => (
            <div className="flex flex-wrap sm:flex-no-wrap  w-full shadow mb-16 mt-5 rounded-lg">
              <div className="w-full sm:w-1/5  bg-white">
                <Image
                  src={OBD.image}
                  alt={OBD.name}
                  width={200}
                  height={0}
                  className="ml-5 lg:ml-0 mt-0 lg:mt-5"
                />
              </div>

              <div className="w-full sm:w-1/5 bg-white ">
                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 lg:mt-0 mt-5 lg:ml-0 ml-5 my-0 lg:my-5 py-0 lg:pt-5">
                  {OBD.name}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {OBD.description}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {OBD.description1}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {OBD.description2}
                </p>
              </div>
              <div className="w-full sm:w-1/5  bg-white mt-0 lg:mt-16 ml-0 lg:ml-16">
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {OBD.description3}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {OBD.description4}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {OBD.description5}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {OBD.description6}
                </p>
              </div>
              <div className="w-full sm:w-1/5 my-8 lg:ml-0 ml-5 bg-white mt-0 lg:mt-10">
                <PriceAndButtons
                  service_price_object={OBD.car_price}
                  service_price={OBD.service_price}
                  weeksToArrive={OBD.weeks_to_arrive}
                  serviceItem={OBD}
                />
              </div>
            </div>
          ))}
        </div>
        {/* Custom_issues */}
        <div className="container mx-auto lg:container px-10 xl:px-20 sm:px-10 ">
          <p className=" mt-20 lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">
          Custom_issues
          </p>
          <p className="text-lg leading-7 text-gray-600 mt-1 xl:w-7/12 w-full">
            Whether article spirits new her covered hastily sitting her. Money
            witty books nor son add
          </p>
          <SelectedCar />
          {servicedata.Custom_issues.map((Custom_issue) => (
            <div className="flex flex-wrap sm:flex-no-wrap  w-full shadow mb-16 mt-5 rounded-lg">
              <div className="w-full sm:w-1/5  bg-white">
                <Image
                  src={Custom_issue.image}
                  alt={Custom_issue.name}
                  width={200}
                  height={0}
                  className="ml-5 lg:ml-0 mt-0 lg:mt-5"
                />
              </div>

              <div className="w-full sm:w-1/5 bg-white ">
                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 lg:mt-0 mt-5 lg:ml-0 ml-5 my-0 lg:my-5 py-0 lg:pt-5">
                  {Custom_issue.name}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Custom_issue.description}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Custom_issue.description1}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Custom_issue.description2}
                </p>
              </div>
              <div className="w-full sm:w-1/5  bg-white mt-0 lg:mt-16 ml-0 lg:ml-16">
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Custom_issue.description3}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Custom_issue.description4}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Custom_issue.description5}
                </p>
                <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                  {Custom_issue.description6}
                </p>
              </div>
              <div className="w-full sm:w-1/5 my-8 lg:ml-0 ml-5 bg-white mt-0 lg:mt-10">
                <PriceAndButtons
                  service_price_object={Custom_issue.car_price}
                  service_price={Custom_issue.service_price}
                  weeksToArrive={Custom_issue.weeks_to_arrive}
                  serviceItem={Custom_issue}
                />
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
}

export default suspentionfitments;
