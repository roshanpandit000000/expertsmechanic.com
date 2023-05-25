import Layout from "@/components/Layout";
import servicedata from "@/utils/servicedata";
import { Store } from "@/utils/Store";
import Image from "next/image";
import { useRouter } from "next/router";
import SelectedCar from "@/components/SelectedCar";
import PriceAndButtons from "@/components/PriceAndButtons";
import React, { useContext } from "react";

function betterys() {
  const { state, dispatch, setSelectedVehicle, selectedVehicle } =
    useContext(Store);

  return (
    <>
      <Layout title="Betterys">
       {/* brake */}
        <div className="container mx-auto lg:container px-10 xl:px-20 sm:px-10 ">
        
          <p className=" mt-20 lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">
          Betterys
          </p>
          <p className="text-lg leading-7 text-gray-600 mt-4 xl:w-7/12 w-full">
            Whether article spirits new her covered hastily sitting her. Money
            witty books nor son add
          </p>
          <SelectedCar />
          {servicedata.Betterys.map((Bettery) => {
            return (
              <div className="flex flex-wrap sm:flex-no-wrap  w-full shadow mb-16 mt-5 rounded-lg">
                  <div className="w-full sm:w-1/5  bg-white">
                    <Image
                      src={Bettery.image}
                      alt={Bettery.name}
                      width={200}
                      height={0}
                      className="ml-5 lg:ml-0 mt-0 lg:mt-5"
                    />
                  </div>
                  
                  <div className="w-full sm:w-1/5 bg-white ">
                  <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 lg:mt-0 mt-5 lg:ml-0 ml-5 my-0 lg:my-5 py-0 lg:pt-5">
                      {Bettery.name}
                    </p>
                    <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                      
                      {Bettery.description}
                    </p>
                    <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                      {Bettery.description1}
                    </p>
                    <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                      {Bettery.description2}
                    </p>
                    
                  </div>
                  <div className="w-full sm:w-1/5  bg-white mt-0 lg:mt-16 ml-0 lg:ml-16">
                    <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                      {Bettery.description3}
                    </p>
                    <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                      {Bettery.description4}
                    </p>
                    <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                      {Bettery.description5}
                    </p>
                    <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                      {Bettery.description6}
                    </p>
                  </div>
                  <div className="w-full sm:w-1/5 my-8 lg:ml-0 ml-5 bg-white mt-0 lg:mt-10">
                    <PriceAndButtons
                      service_price_object={Bettery.car_price}
                      service_price={Bettery.service_price}
                      weeksToArrive={Bettery.weeks_to_arrive}
                      serviceItem={Bettery}
                    />
                  </div>
                </div>
            );
          })}
        </div>

        {/* Alternator */}
        <div className="container mx-auto lg:container px-10 xl:px-20 sm:px-10 ">
        
          <p className=" mt-20 lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">
          Alternator
          </p>
          <p className="text-lg leading-7 text-gray-600 mt-4 xl:w-7/12 w-full">
            Whether article spirits new her covered hastily sitting her. Money
            witty books nor son add
          </p>
          <SelectedCar />
          {servicedata.Alternators.map((Alternator) => {
            return (
              <div className="flex flex-wrap sm:flex-no-wrap  w-full shadow mb-16 mt-5 rounded-lg">
                  <div className="w-full sm:w-1/5  bg-white">
                    <Image
                      src={Alternator.image}
                      alt={Alternator.name}
                      width={200}
                      height={0}
                      className="ml-5 lg:ml-0 mt-0 lg:mt-5"
                    />
                  </div>
                  
                  <div className="w-full sm:w-1/5 bg-white ">
                  <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 lg:mt-0 mt-5 lg:ml-0 ml-5 my-0 lg:my-5 py-0 lg:pt-5">
                      {Alternator.name}
                    </p>
                    <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                      
                      {Alternator.description}
                    </p>
                    <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                      {Alternator.description1}
                    </p>
                    <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                      {Alternator.description2}
                    </p>
                    
                  </div>
                  <div className="w-full sm:w-1/5  bg-white mt-0 lg:mt-16 ml-0 lg:ml-16">
                    <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                      {Alternator.description3}
                    </p>
                    <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                      {Alternator.description4}
                    </p>
                    <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                      {Alternator.description5}
                    </p>
                    <p className=" font-medium text-base leading-6 text-gray-600 lg:mt-0 mt-5 lg:ml-0 ml-5">
                      {Alternator.description6}
                    </p>
                  </div>
                  <div className="w-full sm:w-1/5 my-8 lg:ml-0 ml-5 bg-white mt-0 lg:mt-10">
                    <PriceAndButtons
                      service_price_object={Alternator.car_price}
                      service_price={Alternator.service_price}
                      weeksToArrive={Alternator.weeks_to_arrive}
                      serviceItem={Alternator}
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

export default betterys;
