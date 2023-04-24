import Layout from "@/components/Layout";
import { Store } from "@/utils/Store";
import servicedata from "@/utils/servicedata";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import SelectedCar from "@/components/SelectedCar";
import PriceAndButtons from "@/components/PriceAndButtons";

function clutchbodyparts() {
  const { state, dispatch } = useContext(Store);

  return (
    <>
      <Layout title="Clutch & Body Parts">
      <div className="overflow-y-hidden pt-20"><SelectedCar />
          <div className="xl:mx-auto xl:container  xl:px-20 md:px-6 px-4 py-12">
            <div className="lg:flex items-center justify-center lg:space-x-12 2xl:space-x-6">
              <div className>
                <p className="lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">
                  Why choose us
                </p>
                <p className="text-lg leading-7 text-gray-600 mt-4 xl:w-7/12 w-full">
                  Whether article spirits new her covered hastily sitting her.
                  Money witty books nor son add
                </p>
                {servicedata.services.map((service) => (
                  <div className="mt-6 md:mt-10 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 lg:mt-6 2xl:mt-12 shadow">
                    <div className="flex items-center">
                      <div className="flex items-start flex-col pt-8">
                        <Image
                          src={service.image}
                          alt={service.name}
                          width={200}
                          height={0}
                        />
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-start flex-col pt-">
                        <h2 className="text-2xl font-bold leading-4 text-gray-800 mb-5">
                          {service.name}
                        </h2>

                        <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                         {service.description}
                        </p>

                        <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                        {service.description1}
                        </p>
                        <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                        {service.description2}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center ">
                      <div className="flex items-start flex-col  ">
                        <p className="lg:w-40 2xl:w-52 text-base leading-6 lg:mt-12 mt-2 sm:mt-1 text-gray-600">
                        {service.description3}
                        </p>
                        <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                        {service.description4}
                        </p>
                        <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                        {service.description5}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <PriceAndButtons />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default clutchbodyparts;
