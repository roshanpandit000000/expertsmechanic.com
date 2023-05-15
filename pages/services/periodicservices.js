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
        <div className="container mx-auto mt-24">
          <SelectedCar />
          <div className="">
            <div className="ml-20">
              <p className="lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">
                Periodic Services
              </p>
              <p className="text-lg leading-7 text-gray-600 mt-4 xl:w-7/12 w-full">
                Whether article spirits new her covered hastily sitting her.
                Money witty books nor son add
              </p>
            </div>

            {servicedata.periodics.map((periodic) => (
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-0 ">
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
                      <p className="text-xl font-bold leading-7 text-gray-800 text-left capitalize  ">
                        {periodic.name}{" "}
                      </p>
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
                        <p className="font-semibold leading-loose text-gray-700 ...">
                          {periodic.included}
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>Others</AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p className="font-semibold leading-loose text-gray-700 ...">
                          {periodic.other}
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
                    serviceItem={periodic}
                  />
                </div>
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
              </div>
            ))}
          </div>
        </div>

        {/* brake */}
        <div className="container mx-auto lg:container px-10 xl:px-20 sm:px-10 ">
          <p className=" mt-20 lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">
            Why choose us
          </p>
          <p className="text-lg leading-7 text-gray-600 mt-4 xl:w-7/12 w-full">
            Whether article spirits new her covered hastily sitting her. Money
            witty books nor son add
          </p>
          {servicedata.Brakes.map((brake) => {
            return (
              <div className="w-full lg:w-full mt-10 mb-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
                  {/* <!-- Team Card --> */}
                  <div className="flex p-4 shadow-md">
                    <div className="mr-6">
                      <Image
                        src={brake.image}
                        alt={brake.name}
                        width={200}
                        height={0}
                      />
                    </div>
                    <div className=" ">
                      <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">
                        {brake.name}
                      </p>
                      <p className="mt-5 font-medium text-base leading-6 text-gray-600 ">
                        {brake.description}
                      </p>
                      <p className="mt-2 font-medium text-base leading-6 text-gray-600">
                        {brake.description1}
                      </p>
                      <p className="mt-2 font-medium text-base leading-6 text-gray-600">
                        {brake.description2}
                      </p>
                    </div>
                    <div className=" mt-8 ml-20">
                      <p className="mt-2 font-medium text-base leading-6 text-gray-600">
                        {brake.description3}
                      </p>
                      <p className="mt-2 font-medium text-base leading-6 text-gray-600">
                        {brake.description4}
                      </p>
                      <p className="mt-2 font-medium text-base leading-6 text-gray-600">
                        {brake.description5}
                      </p>
                    </div>
                    <div>
                      <PriceAndButtons
                        service_price_object={brake.car_price}
                        service_price={brake.service_price}
                        weeksToArrive={brake.weeks_to_arrive}
                      />
                    </div>
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
