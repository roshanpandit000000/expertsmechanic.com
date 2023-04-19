import Layout from "@/components/Layout";
import servicedata from "@/utils/servicedata";
import Image from "next/image";
import React from "react";

function suspentionfitments() {
  return (
    <>
      <Layout title="Suspention & Fitments">
      <div className="overflow-y-hidden">
          <div className="xl:mx-auto xl:container  xl:px-20 md:px-6 px-4 py-12 mt-20">
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
                      <div className="flex items-start flex-col  ">
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:text-gray-900 rounded-md group-hover:bg-opacity-0">
                            Cyan to blue
                          </span>
                        </button>
                      </div>
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

export default suspentionfitments;
