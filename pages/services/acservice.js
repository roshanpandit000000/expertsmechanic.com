import Layout from "@/components/Layout";
import { Store } from "@/utils/Store";
import servicedata from "@/utils/servicedata";
import Image from "next/image";
import { useRouter } from "next/router";
import SelectedCar from "@/components/SelectedCar";
import PriceAndButtons from "@/components/PriceAndButtons";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import React, { useContext } from "react";

function acservice() {
  const { state, dispatch, setSelectedVehicle, selectedVehicle } =
    useContext(Store);
  return (
    <>
      <Layout title="AC Service & Repair">
        <div className="container mx-auto mt-24">
          <div className="container mx-auto lg:container px-10 xl:px-20 sm:px-10 ">
            <p className=" mt-20 lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">
              Services included
            </p>
            <p className="text-lg leading-7 text-gray-600 mt-4 xl:w-7/12 w-full">
              Whether article spirits new her covered hastily sitting her. Money
              witty books nor son add
            </p>
            <SelectedCar />
            {servicedata.AC_Service_Packages.map((AC_Service) => {
              return (
                <div className="flex flex-wrap sm:flex-no-wrap  w-full shadow mt-16 rounded-lg">
                  <div className="w-full sm:w-1/5  bg-white">
                    <Image
                      src={AC_Service.image}
                      alt={AC_Service.name}
                      width={200}
                      height={0}
                      className="ml-5 lg:ml-0 mt-0 lg:mt-5"
                    />
                  </div>

                  <div className="w-full sm:w-1/5 bg-white ">
                    <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 lg:mt-0 mt-5 lg:ml-0 ml-5 my-0 lg:my-5 py-0 lg:pt-5">
                      {AC_Service.name}
                    </p>
                    <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                      {AC_Service.description}
                    </p>
                    <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                      {AC_Service.description1}
                    </p>
                    <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                      {AC_Service.description2}
                    </p>
                  </div>
                  <div className="w-full sm:w-1/5  bg-white mt-0 lg:mt-16 ml-0 lg:ml-16">
                    <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                      {AC_Service.description3}
                    </p>
                    <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                      {AC_Service.description4}
                    </p>
                    <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                      {AC_Service.description5}
                    </p>
                    <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                      {AC_Service.description6}
                    </p>
                  </div>
                  <div className="w-full sm:w-1/5 my-8 lg:ml-0 ml-5 bg-white mt-0 lg:mt-10">
                    <PriceAndButtons
                      service_price_object={AC_Service.car_price}
                      service_price={AC_Service.service_price}
                      weeksToArrive={AC_Service.weeks_to_arrive}
                      serviceItem={AC_Service}
                    />
                  </div>
                </div>
                // <div className="w-full lg:w-full mt-10 mb-16 ">
                //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
                //     {/* <!-- Team Card --> */}
                //     <div className="flex p-4 shadow-md rounded-2xl">
                //       <div className="mr-6">
                //         <Image
                //           src={acservice.image}
                //           alt={acservice.name}
                //           width={200}
                //           height={0}
                //         />
                //       </div>
                //       <div className=" ">
                //       <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">
                //         {acservice.name}
                //       </p>
                //       <p className="mt-5 font-medium text-base leading-6 text-gray-600 ">
                //         {acservice.description}
                //       </p>
                //       <p className="mt-2 font-medium text-base leading-6 text-gray-600">
                //         {acservice.description1}
                //       </p>
                //       <p className="mt-2 font-medium text-base leading-6 text-gray-600">
                //         {acservice.description2}
                //       </p>
                //       <p className="mt-2 font-medium text-base leading-6 text-gray-600">
                //         {acservice.description6}
                //       </p>
                //     </div>
                //     <div className=" mt-8 ml-20">
                //       <p className="mt-2 font-medium text-base leading-6 text-gray-600">
                //         {acservice.description3}
                //       </p>
                //       <p className="mt-2 font-medium text-base leading-6 text-gray-600">
                //         {acservice.description4}
                //       </p>
                //       <p className="mt-2 font-medium text-base leading-6 text-gray-600">
                //         {acservice.description5}
                //       </p>
                //       <p className="mt-2 font-medium text-base leading-6 text-gray-600">
                //         {acservice.description7}
                //       </p>
                //       <p className="mt-2 font-medium text-base leading-6 text-gray-600">
                //         {acservice.description8}
                //       </p>
                //     </div>
                //       <div>
                //         <PriceAndButtons
                //           service_price_object={acservice.car_price}
                //           service_price={acservice.service_price}
                //           weeksToArrive={acservice.weeks_to_arrive}
                //           serviceItem={acservice}
                //         />
                //       </div>
                //     </div>
                //   </div>
                // </div>
              );
            })}
          </div>
        </div>

        {/* brake */}
        <div className="container mx-auto lg:container px-10 xl:px-20 sm:px-10 ">
          <p className=" mt-20 lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">
            AC Fitments
          </p>
          <p className="text-lg leading-7 text-gray-600 mt-4 xl:w-7/12 w-full">
            Whether article spirits new her covered hastily sitting her. Money
            witty books nor son add
          </p>
          {servicedata.ACFitments.map((ACFitment) => {
            return (
              <div className="flex flex-wrap sm:flex-no-wrap  w-full shadow mt-16 rounded-lg">
                <div className="w-full sm:w-1/5  bg-white">
                  <Image
                    src={ACFitment.image}
                    alt={ACFitment.name}
                    width={200}
                    height={0}
                    className="ml-5 lg:ml-0 mt-0 lg:mt-5"
                  />
                </div>

                <div className="w-full sm:w-1/5 bg-white ">
                  <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 lg:mt-0 mt-5 lg:ml-0 ml-5 my-0 lg:my-5 py-0 lg:pt-5">
                    {ACFitment.name}
                  </p>
                  <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                    {ACFitment.description}
                  </p>
                  <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                    {ACFitment.description1}
                  </p>
                  <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                    {ACFitment.description2}
                  </p>
                </div>
                <div className="w-full sm:w-1/5  bg-white mt-0 lg:mt-16 ml-0 lg:ml-16">
                  <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                    {ACFitment.description3}
                  </p>
                  <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                    {ACFitment.description4}
                  </p>
                  <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                    {ACFitment.description5}
                  </p>
                  <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                    {ACFitment.description6}
                  </p>
                </div>
                <div className="w-full sm:w-1/5 my-8 lg:ml-0 ml-5 bg-white mt-0 lg:mt-10">
                  <PriceAndButtons
                    service_price_object={ACFitment.car_price}
                    service_price={ACFitment.service_price}
                    weeksToArrive={ACFitment.weeks_to_arrive}
                    serviceItem={ACFitment}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Radietor */}
        <div className="container mx-auto lg:container px-10 xl:px-20 sm:px-10 ">
          <p className=" mt-20 lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">
          Radiator
          </p>
          <p className="text-lg leading-7 text-gray-600 mt-4 xl:w-7/12 w-full">
            Whether article spirits new her covered hastily sitting her. Money
            witty books nor son add
          </p>
          {servicedata.Radiators.map((Radiator) => {
            return (
              <div className="flex flex-wrap sm:flex-no-wrap  w-full shadow mt-16 rounded-lg">
                <div className="w-full sm:w-1/5  bg-white">
                  <Image
                    src={Radiator.image}
                    alt={Radiator.name}
                    width={200}
                    height={0}
                    className="ml-5 lg:ml-0 mt-0 lg:mt-5"
                  />
                </div>

                <div className="w-full sm:w-1/5 bg-white ">
                  <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 lg:mt-0 mt-5 lg:ml-0 ml-5 my-0 lg:my-5 py-0 lg:pt-5">
                    {Radiator.name}
                  </p>
                  <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                    {Radiator.description}
                  </p>
                  <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                    {Radiator.description1}
                  </p>
                  <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                    {Radiator.description2}
                  </p>
                </div>
                <div className="w-full sm:w-1/5  bg-white mt-0 lg:mt-16 ml-0 lg:ml-16">
                  <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                    {Radiator.description3}
                  </p>
                  <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                    {Radiator.description4}
                  </p>
                  <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                    {Radiator.description5}
                  </p>
                  <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                    {Radiator.description6}
                  </p>
                </div>
                <div className="w-full sm:w-1/5 my-8 lg:ml-0 ml-5 bg-white mt-0 lg:mt-10">
                  <PriceAndButtons
                    service_price_object={Radiator.car_price}
                    service_price={Radiator.service_price}
                    weeksToArrive={Radiator.weeks_to_arrive}
                    serviceItem={Radiator}
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

export default acservice;
