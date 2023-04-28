import Layout from "@/components/Layout";
import servicedata from "@/utils/servicedata";
import Image from "next/image";
import React, { useContext } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { Store } from "@/utils/Store";

import "react-accessible-accordion/dist/fancy-example.css";
import { useRouter } from "next/router";
import SelectedCar from "@/components/SelectedCar";
import PriceAndButtons from "@/components/PriceAndButtons";

function periodicservices() {
  const { state, dispatch, setSelectedVehicle, selectedVehicle } =
    useContext(Store);

  return (
    <>
      <Layout title="Periodic Services">
        <div className="container mx-auto lg:px-20 px-10 sm:px-10 mt-24">
          <SelectedCar />
          <div className="">
            <div className>
              <p className="lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">
                Why choose us
              </p>
              <p className="text-lg leading-7 text-gray-600 mt-4 xl:w-7/12 w-full">
                Whether article spirits new her covered hastily sitting her.
                Money witty books nor son add
              </p>
            </div>

            {servicedata.periodics.map((periodic) => (
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 ">
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className=" flex flex-row-reverse ...">
                  <div className="ml-5">
                    {selectedVehicle.length > 0 ? (
                      <p className="text-xl font-bold leading-7 text-gray-800 text-left capitalize">
                        {periodic.name + " " + "for"}
                        <br />
                        <span className="font-bold text-blue-900 capitalize">
                          {selectedVehicle[0]?.model}
                        </span>
                      </p>
                    ) : (
                      <p className="text-xl font-bold leading-7 text-gray-800 text-left capitalize  ">{periodic.name} </p>
                    )}

                    <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                      {" "}
                      {periodic.hour}{" "}
                    </p>

                    <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                      {" "}
                      {periodic.warranty}{" "}
                    </p>

                    <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                      {periodic.month}
                    </p>
                  </div>
                  <Image
                    src={periodic.image}
                    alt={periodic.name}
                    width={200}
                    height={0}
                  />
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="w-full ml-28">
                  <Accordion>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          What’s Included?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p className="font-medium leading-loose  ...">
                          {periodic.included}
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>Others</AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          We only use MOBIL products in our auto services. We’re
                          committed to providing you and your car the best it
                          deserves, without any compromises.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                <div className="flex justify-center items-center ml-7">
                  <PriceAndButtons
                    service_price_object={periodic.car_price}
                    service_price={periodic.service_price}
                    weeksToArrive={periodic.weeks_to_arrive}
                  />
                </div>
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
              </div>
            ))}
          </div>
        </div>

        {/* brake */}
        <div className="container mx-auto lg:container px-10 sm:px-10 ">
          <p className=" mt-20 lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">
            Why choose us
          </p>
          <p className="text-lg leading-7 text-gray-600 mt-4 xl:w-7/12 w-full">
            Whether article spirits new her covered hastily sitting her. Money
            witty books nor son add
          </p>
          {servicedata.Brakes.map((brake) => {
            return (
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
                  <div className="flex items-start flex-col  ">
                  <PriceAndButtons
                    service_price_object={brake.car_price}
                    service_price={brake.service_price}
                    weeksToArrive={brake.weeks_to_arrive}
                  />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Layout>
    </>
  );
}

export default periodicservices;
