import Layout from "@/components/Layout";
import SelectedCar from "@/components/SelectedCar";
import { Store } from "@/utils/Store";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";

function cart() {
  const router = useRouter();
  const { state, dispatch, selectedVehicle } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const removeItemHandler = (item) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };
  console.log(cartItems);
  return (
    <>
      <Layout title="Shopping Cart">
        <div className=" container mx-auto">
          <section className="mb-4 mt-24 flex w-full justify-between items-center sm:flex-col flex-col lg:flex-row ">
            {" "}
            <h1 className=" text-2xl w-full text-bold ">Shopping Cart</h1>{" "}
            <SelectedCar />
          </section>

          {cartItems.length === 0 ? (
            <div>
              Cart is empty. <Link href="/">Go shopping</Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-4 md:gap-5">
              <div className="overflow-x-auto md:col-span-3">
                <table className="min-w-full ">
                  <thead className="border-b">
                    <tr>
                      <th className="p-5 text-left">Item</th>
                      <th className="p-5 text-right">Quantity</th>
                      <th className="p-5 text-right">Price</th>
                      <th className="p-5">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.slug} className="border-b">
                        <td>
                          <Link legacyBehavior href={`/product/${item.name}`}>
                            <a className="flex items-center">
                              <Image
                                src={item.image}
                                alt={item.name}
                                width={50}
                                height={50}
                              ></Image>
                              &nbsp;
                              {item.name}
                            </a>
                          </Link>
                        </td>
                        <td className="p-5 text-right">{item.quantity}</td>
                        <td className="p-5 text-right">
                          $
                          {item.quantity *
                            (item.service_price +
                              Math.floor(
                                item.car_price?.[selectedVehicle[0]?.model]
                              ) -
                              selectedVehicle[0].discount)}
                        </td>
                        <td className="p-5 text-center">
                          <button onClick={() => removeItemHandler(item)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="card p-5">
                <ul>
                  <li>
                    <div className="pb-3 text-xl">
                      {" "}
                      <span className="my-5">
                        Subtotal (
                        {cartItems.reduce((a, c) => a + c.quantity, 0)}) :
                        <span className="font-bold text-2xl ml-3">
                          $
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
                        </span>{" "}
                        <strike className="text-ms text-gray-700/70">
                          $
                          {cartItems.reduce(
                            (a, c) =>
                              a +
                              c.quantity *
                                (c.service_price +
                                  Math.floor(
                                    c.car_price?.[selectedVehicle[0]?.model]
                                  )),
                            0
                          )}
                        </strike>
                        <p>
                          Total discount of $
                          {cartItems.reduce(
                            (a, c) =>
                              a + c.quantity * selectedVehicle[0].discount,
                            0
                          )}
                        </p>
                      </span>
                    </div>
                    <br />
                  </li>
                  <li>
                    <button
                      onClick={() => router.push("/shipping")}
                      className="w-full  hover:border-stone/300 capitalize rounded-md py-2 px-4 hover:border-2 hover:bg-white hover:text-gray-900 overflow-hidden bg-blue-700 text-white font-medium"
                    >
                      Check Out
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
}

export default cart;
