import Layout from "@/components/Layout";
import { Store } from "@/utils/Store";
import servicedata from "@/utils/servicedata";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import SelectedCar from "@/components/SelectedCar";
import PriceAndButtons from "@/components/PriceAndButtons";

function suspension() {
  const { state, dispatch } = useContext(Store);

  return (
    <>
      <Layout title="Suspension">
        <div className="container mx-auto lg:px-60 px-10 sm:px-10 "><SelectedCar />
          {servicedata.Brakes.map((brake) => (
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
                <PriceAndButtons />
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
}

export default suspension;
