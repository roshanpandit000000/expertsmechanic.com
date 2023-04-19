import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function index() {
  return (
    <>
      <Layout title="Services">
        {/* tital */}

        <div className="pt-24 sm:pt-24 pb-10 sm:pb-10 lg:py-10 flex-col items-center justify-center  px-4">
          <h1
            role="heading"
            className="text-center xl:text-5xl md:text-4xl text-2xl font-bold text-gray-800"
          >
            Our All Services
          </h1>
          <p
            role="contentinfo"
            className="text-base leading-normal text-center text-gray-600 mt-2"
          >
            Whether article spirits new her covered hastily sitting her. Money
            witty books nor son
          </p>
        </div>

        <div className="w-full flex items-center justify-center container mx-auto">
          <div className="py-4 sm:py-6 md:py-8 bg-white shadow rounded-lg mx-5">
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 px-6 xl:px-1 gap-y-8 gap-x-12 2xl:gap-x-6">
              <div className=" grid justify-items-center ... ">
                <Image
                  src="/services/periodic-service.png"
                  alt="Picture of the author"
                  width={80}
                  height={0}
                />
                <p className="text-center font-semibold">Periodic Service</p>
              </div>
              <div className=" grid justify-items-center ...">
                <Link href="/services/dentingpainting">
                  <Image
                    src="/services/ac repair.png"
                    alt="Picture of the author"
                    width={80}
                    height={0}
                  />
                </Link>

                <p className="text-center font-semibold">AC Repair</p>
              </div>
              <div className=" grid justify-items-center ...">
                <Link href="/services/headlight">
                  <Image
                    src="/services/batteris.png"
                    alt="Picture of the author"
                    width={75}
                    height={0}
                  />
                </Link>

                <p className="text-center font-semibold">Batterys</p>
              </div>
              <div className=" grid justify-items-center ...">
                <Link href="/services/periodicservices">
                  <Image
                    src="/services/car-clean.png"
                    alt="Picture of the author"
                    width={80}
                    height={0}
                  />
                </Link>

                <p className="text-center font-semibold">Car Spa & Cleaning</p>
              </div>
              <div className=" grid justify-items-center ...">
                <Link href="/services/suspension">
                  <Image
                    src="/services/car-exterius.png"
                    alt="Picture of the author"
                    width={80}
                    height={0}
                  />
                </Link>

                <p className="text-center font-semibold">
                  Clutch & Body Parts{" "}
                </p>
              </div>
              <div className="grid justify-items-center ...">
                <Image
                  src="/services/full-body.png"
                  alt="Picture of the author"
                  width={80}
                  height={0}
                />
                <p className="text-center font-semibold">Full Body Paint</p>
              </div>

              {/* second section */}
              <div className="lg:mt-7 sm:mt-0 grid justify-items-center ...">
                <Image
                  src="/services/car-interior-service.png"
                  alt="Picture of the author"
                  width={80}
                  height={0}
                />
                <p className="text-center font-semibold">Detailed Service</p>
              </div>
              <div className="lg:mt-7 sm:mt-0 grid justify-items-center ...">
                <Image
                  src="/services/tyre.png"
                  alt="Picture of the author"
                  width={80}
                  height={0}
                />
                <p className="text-center font-semibold">Tyres Work</p>
              </div>
              <div className="lg:mt-7 sm:mt-0 grid justify-items-center ...">
                <Image
                  src="/services/glass.png"
                  alt="Picture of the author"
                  width={80}
                  height={0}
                />
                <p className="text-center font-semibold">windshield</p>
              </div>
              <div className="lg:mt-7 sm:mt-0 grid justify-items-center ...">
                <Image
                  src="/services/head.png"
                  alt="Picture of the author"
                  width={80}
                  height={0}
                />
                <p className="text-center font-semibold">Headlights</p>
              </div>
              <div className="lg:mt-7 sm:mt-0 grid justify-items-center ...">
                <Image
                  src="/services/parts.png"
                  alt="Picture of the author"
                  width={80}
                  height={0}
                />
                <p className="text-center font-semibold">
                  Suspention & Fitments
                </p>
              </div>
              <div className="lg:mt-7 sm:mt-0 grid justify-items-center ...">
                <Image
                  src="/services/penting.png"
                  alt="Picture of the author"
                  width={80}
                  height={0}
                />
                <p className="text-center font-semibold">Denting/Penting</p>
              </div>
            </div>
          </div>
        </div>

        {/* tital */}

        <div className="pt-24 sm:pt-24 pb-8 sm:pb-8 lg:pt-14   flex-col items-center justify-center  px-4">
          <h1
            role="heading"
            className="text-center xl:text-5xl md:text-4xl text-2xl font-bold text-gray-800"
          >
            Our Custom Services
          </h1>
          <p
            role="contentinfo"
            className="text-base leading-normal text-center text-gray-600 mt-2"
          >
            Whether article spirits new her covered hastily sitting her. Money
            witty books nor son
          </p>
        </div>

        {/* costum  */}
        <div className="w-full flex items-center justify-center container mx-auto">
          <div className="py-4 sm:py-6 md:py-8 bg-white shadow rounded-lg mx-5">
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 px-6 xl:px-10 gap-y-8 gap-x-12 2xl:gap-x-16">
              <div className=" ">
                <Image
                  src="/customservices/battry.png"
                  alt="Picture of the author"
                  width={80}
                  height={0}
                />
                <p className="text-center">Periodic</p>
              </div>
              <div className=" ">
                <Image
                  src="/customservices/body part.png"
                  alt="Picture of the author"
                  width={80}
                  height={0}
                />
                <p className="text-center">Periodic</p>
              </div>
              <div className=" ">
                <Image
                  src="/customservices/breke.png"
                  alt="Picture of the author"
                  width={75}
                  height={0}
                />
                <p className="text-center">Periodic</p>
              </div>
              <div className=" ">
                <Image
                  src="/customservices/cleaning.png"
                  alt="Picture of the author"
                  width={80}
                  height={0}
                />
                <p className="text-center">Periodic</p>
              </div>
              <div className=" ">
                <Image
                  src="/customservices/clutch.png"
                  alt="Picture of the author"
                  width={80}
                  height={0}
                />
                <p className="text-center">Periodic </p>
              </div>
              <div className="">
                <Image
                  src="/customservices/headlight.png"
                  alt="Picture of the author"
                  width={80}
                  height={0}
                />
                <p className="text-center">Periodic Services</p>
              </div>

              {/* second section */}
              <div className="lg:mt-7 sm:mt-0 ">
                <Image
                  src="/customservices/side mirror.png"
                  alt="Picture of the author"
                  width={80}
                  height={0}
                />
                <p className="text-center">Periodic</p>
              </div>
              <div className="lg:mt-7 sm:mt-0 ">
                <Image
                  src="/customservices/spa.png"
                  alt="Picture of the author"
                  width={80}
                  height={0}
                />
                <p className="text-center">Periodic</p>
              </div>
              <div className="lg:mt-7 sm:mt-0 ">
                <Image
                  src="/customservices/steering.png"
                  alt="Picture of the author"
                  width={80}
                  height={0}
                />
                <p className="text-center">Periodic</p>
              </div>
              <div className="lg:mt-7 sm:mt-0 ">
                <Image
                  src="/customservices/suspension.png"
                  alt="Picture of the author"
                  width={80}
                  height={0}
                />
                <p className="text-center">Periodic</p>
              </div>
              <div className="lg:mt-7 sm:mt-0 ">
                <Image
                  src="/customservices/tyre.png"
                  alt="Picture of the author"
                  width={80}
                  height={0}
                />
                <p className="text-center">Periodic</p>
              </div>
              <div className="lg:mt-7 sm:mt-0 ">
                <Image
                  src="/customservices/windshild.png"
                  alt="Picture of the author"
                  width={80}
                  height={0}
                />
                <p className="text-center">Periodic</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default index;
