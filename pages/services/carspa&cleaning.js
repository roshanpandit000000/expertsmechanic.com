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
            <div className="w-full lg:w-full mt-10 mb-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
                {/* <!-- Team Card --> */}
                <div className="flex p-4 shadow-md">
                  <div className="mr-6">
                    <Image
                      src={Bettery.image}
                      alt={Bettery.name}
                      width={200}
                      height={0}
                    />
                  </div>
                  <div className=" ">
                    <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">
                      {Bettery.name}
                    </p>
                    <p className="mt-5 font-medium text-base leading-6 text-gray-600 ">
                      {Bettery.description}
                    </p>
                    <p className="mt-2 font-medium text-base leading-6 text-gray-600">
                      {Bettery.description1}
                    </p>
                    <p className="mt-2 font-medium text-base leading-6 text-gray-600">
                      {Bettery.description2}
                    </p>
                  </div>
                  <div className=" mt-8 ml-20">
                    <p className="mt-2 font-medium text-base leading-6 text-gray-600">
                      {Bettery.description3}
                    </p>
                    <p className="mt-2 font-medium text-base leading-6 text-gray-600">
                      {Bettery.description4}
                    </p>
                    <p className="mt-2 font-medium text-base leading-6 text-gray-600">
                      {Bettery.description5}
                    </p>
                  </div>
                  <div>
                    <PriceAndButtons
                      service_price_object={Bettery.car_price}
                      service_price={Bettery.service_price}
                      weeksToArrive={Bettery.weeks_to_arrive}
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

export default carspacleaning;
