import ForShipping from "@/components/ForShipping";
import Layout from "@/components/Layout";
import SelectedCar from "@/components/SelectedCar";
import { Store } from "@/utils/Store";
import { ValidationError, useForm } from "@formspree/react";
import { useRouter } from "next/router";
import React, { useContext } from "react";

function shipping() {
  const router = useRouter();
  const { state: storeState, dispatch, selectedVehicle } = useContext(Store);
  const {
    cart: { cartItems },
  } = storeState;
  const [state, handleSubmit] = useForm("xvonybwp");
  if (state.succeeded) {
    return <ForShipping />;
  }
  return (
    <>
      <Layout title="Get Services">
        <div className="overflow-y-hidden">
          <div className="flex justify-center items-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44 ">
            <div className="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0">
              <div className="flex w-full  flex-col justify-start items-start">
                <div className="mt-16">
                  <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
                    Check out
                  </p>
                </div>
                <div className="mt-2">
                  <a
                    href="javascript:void(0)"
                    className="text-base leading-4 underline  hover:text-gray-800 text-gray-600"
                  >
                    Back to my bag
                  </a>
                </div>
                <div className="mt-12">
                  <p className="text-xl font-semibold leading-5 text-gray-800">
                    Shipping Details
                  </p>
                </div>
                <form
                  className="w-full sm:w-9/12 lg:w-full"
                  onSubmit={handleSubmit}
                >
                  <div className="mt-8 flex flex-col justify-start items-start w-full space-y-8 ">
                    <SelectedCar id="selectedcar" name="selectedcar" />

                    <input
                      className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                      type="text"
                      id="full name"
                      placeholder="Full Name"
                      name="fullname"
                    />
                    <ValidationError
                      prefix="Fullname"
                      field="fullname"
                      errors={state.errors}
                    />
                    <input
                      className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                      type="text"
                      placeholder="Address"
                      id="address"
                      name="address"
                    />
                    <ValidationError
                      prefix="Address"
                      field="address"
                      errors={state.errors}
                    />
                    <input
                      className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                      type="text"
                      placeholder="Address (line 02)"
                      id="address2"
                      name="address2"
                    />
                    <ValidationError
                      prefix="Address2"
                      field="address2"
                      errors={state.errors}
                    />
                    <input
                      className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                      type="text"
                      placeholder="Phone Number"
                      id="number"
                      name="number"
                    />
                    <ValidationError
                      prefix="Number"
                      field="number"
                      errors={state.errors}
                    />
                    <input
                      className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4   w-full"
                      type="text"
                      placeholder="State"
                      id="state"
                      name="state"
                    />
                    <ValidationError
                      prefix="State"
                      field="state"
                      errors={state.errors}
                    />
                    <input
                      className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4   w-full"
                      type="text"
                      placeholder="City"
                      id="city"
                      name="city"
                    />
                    <ValidationError
                      prefix="City"
                      field="city"
                      errors={state.errors}
                    />
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="focus:outline-none focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-2 focus:ring-ocus:ring-gray-800 leading-4 hover:bg-black py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800"
                    >
                      Proceed to payment
                    </button>
                  </div>
                </form>
                <div className="mt-4 flex justify-start items-center w-full">
                  <a
                    href="javascript:void(0)"
                    className="text-base leading-4 underline focus:outline-none focus:text-gray-500  hover:text-gray-800 text-gray-600"
                  >
                    Back to my bag
                  </a>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start bg-gray-50 w-full p-6 md:p-14">
                <div>
                  <h1 className="text-2xl font-semibold leading-6 text-gray-800">
                    Order Summary
                  </h1>
                </div>
                <div className="flex mt-7 flex-col items-end w-full space-y-6">
                  <div className="flex justify-between w-full items-center">
                    <p className="text-lg leading-4 text-gray-600">
                      Total items
                    </p>
                    <p className="text-lg font-semibold leading-4 text-gray-600">
                      ({cartItems.reduce((a, c) => a + c.quantity, 0)})
                    </p>
                  </div>
                  <div className="flex justify-between w-full items-center">
                    <p className="text-lg leading-4 text-gray-600">
                      Total Charges
                    </p>
                    <p className="text-lg font-semibold leading-4 text-gray-600">
                    ₹
                      {cartItems.reduce(
                        (a, c) =>
                          a +
                          c.quantity *
                            (c.service_price +
                              Math.floor(
                                c.car_price?.[selectedVehicle[0]?.model]
                              )),
                        0
                      )}{}
                    </p>
                  </div>
                  <div className="flex justify-between w-full items-center">
                    <p className="text-lg leading-4 text-gray-600">Discount</p>
                    <p className="text-lg font-semibold leading-4 text-gray-600">
                      {cartItems.reduce(
                        (a, c) => a + c.quantity * selectedVehicle[0].discount,
                        0
                      )}%
                    </p>
                  </div>
                  <div className="flex justify-between w-full items-center">
                    <p className="text-lg leading-4 text-gray-600">
                      Sub total{" "}
                    </p>
                    <p className="text-lg font-semibold leading-4 text-gray-600">
                    ₹
                      {cartItems.reduce(
                        (a, c) =>
                          a +
                          c.quantity *
                            (c.service_price +
                              Math.floor(
                                c.car_price?.[selectedVehicle[0]?.model]
                              ) -
                              selectedVehicle[0].discount),
                        0
                      )}{" "}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between w-full items-center mt-32">
                  <p className="text-xl font-semibold leading-4 text-gray-800">
                    Estimated Total{" "}
                  </p>
                  <p className="text-lg font-semibold leading-4 text-gray-800">
                  ₹
                    {cartItems.reduce(
                      (a, c) =>
                        a +
                        c.quantity *
                          (c.service_price +
                            Math.floor(
                              c.car_price?.[selectedVehicle[0]?.model]
                            ) -
                            selectedVehicle[0].discount),
                      0
                    )}{" "}
                  </p>
                  
                </div>
                <p className="text-md font-normal leading-8 text-gray-800">
                No hidden charges guaranteed!{" "}
                  </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default shipping;
