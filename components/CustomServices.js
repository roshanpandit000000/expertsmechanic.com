import Image from "next/image";
import Link from "next/link";
import React from "react";

function CustomServices() {
  return (
    <>
      <div className="my-16">
        <div className="container mx-auto my-3">
          <h1 class="flex items-center text-3xl sm:text-3xl lg:text-4xl font-bold  lg:ml-40 ml-5 sm:ml-5">
            Custom Services
            <span class="bg-blue-100 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">
              PRO
            </span>
          </h1>
        </div>
        <div className="w-full flex items-center justify-center container mx-auto">
          <div className="py-4 sm:py-6 md:py-8 bg-white shadow rounded-lg mx-5">
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 px-6 xl:px-4 gap-y-8 gap-x-12 2xl:gap-x-28">
              <div className=" grid justify-items-center ...">
                <Link href="/services/carspa&cleaning">
                  <Image
                    src="/customservices/battry.png"
                    alt="Picture of the author"
                    width={80}
                    height={0}
                  />
                </Link>
                <p className="text-center font-semibold">battery</p>
              </div>
              <div className="grid justify-items-center ... ">
                <Link href="/services/clutch&bodyparts">
                  <Image
                    src="/customservices/body part.png"
                    alt="Picture of the author"
                    width={80}
                    height={0}
                  />
                </Link>
                <p className="text-center font-semibold">Body Parts</p>
              </div>
              <div className="grid justify-items-center ... ">
                <Link href="/services/periodicservices">
                  <Image
                    src="/customservices/breke.png"
                    alt="Picture of the author"
                    width={75}
                    height={0}
                  />
                </Link>
                <p className="text-center font-semibold">Brakes</p>
              </div>
              <div className=" grid justify-items-center ...">
                <Link href="/services/dentingpainting">
                  <Image
                    src="/customservices/cleaning.png"
                    alt="Picture of the author"
                    width={80}
                    height={0}
                  />
                </Link>
                <p className="text-center font-semibold">Car Detailing</p>
              </div>
              <div className="grid justify-items-center ... ">
                <Link href="/services/clutch&bodyparts">
                  <Image
                    src="/customservices/clutch.png"
                    alt="Picture of the author"
                    width={80}
                    height={0}
                  />
                </Link>
                <p className="text-center font-semibold">Clutch </p>
              </div>
              <div className="grid justify-items-center ...">
                <Link href="/services/headlight">
                  <Image
                    src="/customservices/headlight.png"
                    alt="Picture of the author"
                    width={80}
                    height={0}
                  />
                </Link>
                <p className="text-center font-semibold">Headlight</p>
              </div>

              {/* second section */}
              <div className="lg:mt-7 sm:mt-0 grid justify-items-center ...">
                <Link href="/services/windshield">
                  <Image
                    src="/customservices/side mirror.png"
                    alt="Picture of the author"
                    width={80}
                    height={0}
                  />
                </Link>
                <p className="text-center font-semibold">Side Mirror</p>
              </div>
              <div className="lg:mt-7 sm:mt-0 grid justify-items-center ...">
                <Link href="/services/carspa&cleaning">
                  <Image
                    src="/customservices/spa.png"
                    alt="Picture of the author"
                    width={80}
                    height={0}
                  />
                </Link>
                <p className="text-center font-semibold">Car Spa</p>
              </div>
              <div className="lg:mt-7 sm:mt-0 grid justify-items-center ...">
                <Link href="/services/suspentionfitments">
                  <Image
                    src="/customservices/steering.png"
                    alt="Picture of the author"
                    width={80}
                    height={0}
                  />
                </Link>
                <p className="text-center font-semibold">Steering</p>
              </div>
              <div className="lg:mt-7 sm:mt-0 grid justify-items-center ...">
                <Link href="/services/suspentionfitments">
                  <Image
                    src="/customservices/suspension.png"
                    alt="Picture of the author"
                    width={80}
                    height={0}
                  />
                </Link>
                <p className="text-center font-semibold">Suspension</p>
              </div>
              <div className="lg:mt-7 sm:mt-0 grid justify-items-center ...">
                <Link href="/services/tyreswork">
                  <Image
                    src="/customservices/tyre.png"
                    alt="Picture of the author"
                    width={80}
                    height={0}
                  />
                </Link>
                <p className="text-center font-semibold">Tyres</p>
              </div>
              <div className="lg:mt-7 sm:mt-0 grid justify-items-center ...">
                <Link href="/services/windshield">
                  <Image
                    src="/customservices/windshild.png"
                    alt="Picture of the author"
                    width={80}
                    height={0}
                  />
                </Link>
                <p className="text-center font-semibold">Glasses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomServices;
