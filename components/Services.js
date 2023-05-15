import Image from "next/image";
import Link from "next/link";
import React from "react";

function Services() {
  return (
    <>
      <div className="my-10">
        <div className="container mx-auto my-3 text-center">
          <h1 class=" text-3xl sm:text-3xl lg:text-4xl font-bold  ">
            Our Services
            <span class="bg-blue-100 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">
              PRO
            </span>
          </h1>
        </div>
        <div className="w-full flex items-center justify-center container mx-auto">
          <div className="py-4 sm:py-6 md:py-8 bg-white shadow rounded-lg mx-5">
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 px-6 xl:px-4 lg:px-20  gap-y-8 gap-x-12 2xl:gap-x-5 md:gap-x-0 ">
              <div className=" grid justify-items-center gap... ">
                <Link href="/services/periodicservices">
                  <Image
                    src="/services/periodic-service.png"
                    alt="Picture of the author"
                    width={80}
                    height={0}
                  />
                </Link>
                <p className="text-center font-semibold">Periodic Service</p>
              </div>
              <div className=" grid justify-items-center ...">
                <Link href="/services/acservice">
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
                <Link href="/services/betterys">
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
                <Link href="/services/carspa&cleaning">
                  <Image
                    src="/services/car-clean.png"
                    alt="Picture of the author"
                    width={80}
                    height={0}
                  />
                </Link>
                <p className="text-center font-semibold">Cleaning</p>
              </div>
              <div className=" grid justify-items-center ...">
                <Link href="/services/clutch&bodyparts">
                  <Image
                    src="/services/car-exterius.png"
                    alt="Picture of the author"
                    width={80}
                    height={0}
                  />
                </Link>

                <p className="text-center font-semibold">
                  Body Parts{" "}
                </p>
              </div>
              <div className="grid justify-items-center ...">
                <Link href="/services/fullbodypaint">
                  <Image
                    src="/services/full-body.png"
                    alt="Picture of the author"
                    width={80}
                    height={0}
                  />
                </Link>
                <p className="text-center font-semibold">Full Body Paint</p>
              </div>

              {/* second section */}
              <div className="lg:mt-7 sm:mt-0 grid justify-items-center ...">
                <Link href="/services/detailedservice">
                  <Image
                    src="/services/car-interior-service.png"
                    alt="Picture of the author"
                    width={80}
                    height={0}
                  />
                </Link>
                <p className="text-center font-semibold">Detailed Service</p>
              </div>
              <div className="lg:mt-7 sm:mt-0 grid justify-items-center ...">
                <Link href="/services/tyreswork">
                  <Image
                    src="/services/tyre.png"
                    alt="Picture of the author"
                    width={80}
                    height={0}
                  />
                </Link>
                <p className="text-center font-semibold">Tyres Work</p>
              </div>
              <div className="lg:mt-7 sm:mt-0 grid justify-items-center ...">
                <Link href="/services/windshield">
                  <Image
                    src="/services/glass.png"
                    alt="Picture of the author"
                    width={80}
                    height={0}
                  />
                </Link>
                <p className="text-center font-semibold">windshield</p>
              </div>
              <div className="lg:mt-7 sm:mt-0 grid justify-items-center ...">
                <Link href="/services/headlight">
                  <Image
                    src="/services/head.png"
                    alt="Picture of the author"
                    width={80}
                    height={0}
                  />
                </Link>
                <p className="text-center font-semibold">Headlights</p>
              </div>
              <div className="lg:mt-7 sm:mt-0 grid justify-items-center ...">
                <Link href="/services/suspentionfitments">
                  <Image
                    src="/services/parts.png"
                    alt="Picture of the author"
                    width={80}
                    height={0}
                  />
                </Link>
                <p className="text-center font-semibold">
                  Suspention & Fitments
                </p>
              </div>
              <div className="lg:mt-7 sm:mt-0 grid justify-items-center ...">
                <Link href="/services/dentingpainting">
                  <Image
                    src="/services/penting.png"
                    alt="Picture of the author"
                    width={80}
                    height={0}
                  />
                </Link>
                <p className="text-center font-semibold">Denting/Penting</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* costum */}
    </>
  );
}

export default Services;
