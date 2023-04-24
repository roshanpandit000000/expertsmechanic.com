import Layout from "@/components/Layout";
import { Store } from "@/utils/Store";
import servicedata from "@/utils/servicedata";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import SelectionModal from "@/components/SelectionModal";
import SelectedCar from "@/components/SelectedCar";
import PriceAndButtons from "@/components/PriceAndButtons";

function headlight() {
  const { state, dispatch, setModalOpen, modalOpen, selectedVehicle } =
    useContext(Store);
  const { query } = useRouter();
  const { slug } = query;
  const periodicservices = servicedata.periodics.find((x) => x.slug === slug);

  return (
    <>
      <Layout title="">
        <div className="overflow-y-hidden mt-24">
          <SelectedCar/>
          <div className="xl:mx-auto xl:container  xl:px-20 md:px-6 px-4 py-12">
            <div className="lg:flex items-center justify-center lg:space-x-12 2xl:space-x-6">
              <div className>
                <p className="lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">
                  Why choose us
                </p>
                {servicedata.headlights.map((headlight) => (
                  <div className="mb-6 md:mt-10 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-14 lg:mb-6 2xl:mb-12 shadow">
                    <div className="flex items-center">
                      <div className="flex items-start flex-col pt-8">
                        <Image
                          src={headlight.image}
                          alt={headlight.name}
                          width={200}
                          height={0}
                        />
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-start flex-col pt-">
                        <h2 className="text-2xl font-bold leading-4 text-gray-800 mb-5">
                          {headlight.name}
                        </h2>

                        <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                          {headlight.description}
                        </p>

                        <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                          {headlight.description1}
                        </p>
                        <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                          {headlight.description2}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center ">
                      <div className="flex items-start flex-col  ">
                        <p className="lg:w-40 2xl:w-52 text-base leading-6 lg:mt-12 mt-2 sm:mt-1 text-gray-600">
                          {headlight.description3}
                        </p>
                        <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                          {headlight.description4}
                        </p>
                        <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600 mb-5">
                          {headlight.description5}
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
          {/* {modalOpen && (
            <SelectionModal
              isOpen={modalOpen}
              handleClose={() => setModalOpen(!modalOpen)}
            >
              <div className="flex flex-col justify-between h-full w-full ">
                <div className="flex flex-col mt-auto mb-auto items-center p-8">
                  <span>
                    Lorem, ipsum metnipisicing elit. Laudantium, voluptas.
                  </span>
                  <span>Lorem ipsum dolor sit amet.</span>
                </div>
                <div>
                  <button
                    className="py-2 px-8 font-bold hover:purple border rounded"
                    type="button"
                    onClick={() => setModalOpen(!modalOpen)}
                  >
                    {" "}
                    back
                  </button>
                </div>
              </div>
            </SelectionModal>
          )} */}
        </div>
      </Layout>
    </>
  );
}

export default headlight;
