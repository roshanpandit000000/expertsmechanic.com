import Image from "next/image";
import React from "react";

function Profits() {
  return (
    <>
    <div className="container mx-auto my-2 mt-24">
        <h1 class="flex items-center text-3xl sm:text-3xl lg:text-4xl font-bold  lg:ml-40 ml-5 sm:ml-5">
          EM Profits
          <span class="bg-blue-100 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">
            PRO
          </span>
        </h1>
      </div>
      <div className="py-5 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-36 px-10 sm:px-10">
          <div
            role="list"
            aria-label="Testimonials"
            className=" grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 flex-wrap justify-center items-start"
          >
            <div role="listitem" className="bg-white shadow rounded p-4 xl:p-8">
              <img
                src="https://cdn.tuk.dev/assets/components/26May-update/quote.png"
                aria-hidden="true"
              />
              <div className="pl-4 pt-4 flex items-start justify-between">
                <div className="mr-6">
                  <p className="xl:text-2xl xl:leading-loose font-semibold text-gray-800">
                  Select what Service you want
                  </p>
                  <p className="mt-2 text-lg sm:text-lg lg:text-xl font-medium leading-none text-gray-700">
                  select the type of service you want for your expensive Car
                  </p>
                </div>
                <Image
                  src="/profit/select-service.png"
                  alt="Picture of the author"
                  width={130}
                  height={0}
                />
              </div>
            </div>
            <div role="listitem" className="bg-white shadow rounded p-4 xl:p-8">
              <img
                src="https://cdn.tuk.dev/assets/components/26May-update/quote.png"
                aria-hidden="true"
              />
              <div className="pl-4 pt-4 flex items-start justify-between">
                <div className="mr-6">
                  <p className="xl:text-2xl xl:leading-loose font-semibold text-gray-800">
                  We Schedule Free Pick-up
                  </p>
                  <p className="mt-2 text-lg sm:text-lg lg:text-xl font-medium leading-none text-gray-700">
                  Schedule your free pickup for any time and day by calling us
                  </p>
                </div>
                <Image
                  src="/profit/schedule.png"
                  alt="Picture of the author"
                  width={130}
                  height={0}
                />
              </div>
            </div>
            <div role="listitem" className="bg-white shadow rounded p-4 xl:p-8">
              <img
                src="https://cdn.tuk.dev/assets/components/26May-update/quote.png"
                aria-hidden="true"
              />
              <div className="pl-4 pt-4 flex items-start justify-between">
                <div className="mr-6">
                  <p className="xl:text-2xl xl:leading-loose font-semibold text-gray-800">
                  Track Your Car Service Real-Time
                  </p>
                  <p className="mt-2 text-lg sm:text-lg lg:text-xl font-medium leading-none text-gray-700">
                  Track your car service live for free
                  </p>
                </div>
                <Image
                  src="/profit/pickup.png"
                  alt="Picture of the author"
                  width={130}
                  height={0}
                />
              </div>
            </div>
            <div role="listitem" className="bg-white shadow rounded p-4 xl:p-8">
              <img
                src="https://cdn.tuk.dev/assets/components/26May-update/quote.png"
                aria-hidden="true"
              />
              <div className="pl-4 pt-4 flex items-start justify-between">
                <div className="mr-6">
                  <p className="xl:text-2xl xl:leading-loose font-semibold text-gray-800">
                  Car is delivered after service (free)
                  </p>
                  <p className="mt-2 text-lg sm:text-lg lg:text-xl font-medium leading-none text-gray-700">
                  After you service your car, we’ll deliver it to you for absolutely no fee
                  </p>
                </div>
                <Image
                  src="/profit/fast.png"
                  alt="Picture of the author"
                  width={130}
                  height={0}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profits;
