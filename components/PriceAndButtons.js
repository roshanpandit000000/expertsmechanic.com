import { Store } from "@/utils/Store";
import CarCard from "@/components/CarCard";
import servicedata from "@/utils/servicedata";
import React, { Children, useContext } from "react";
import { useRouter } from "next/router";

const PriceAndButtons = ({
  
  weeksToArrive,
  service_price_object,
  service_price,
  serviceItem
}) => {
  const router = useRouter();
  const { state, dispatch, setModalOpen, modalOpen, selectedVehicle } =
    useContext(Store);
  const { query } = useRouter();
  const { slug } = query;
  const periodicservices = servicedata.services.find((x) => x.slug === slug)
// console.log(serviceItem)
  const findItems = () => {
    if (
      service_price_object &&
      service_price &&
      service_price_object?.[selectedVehicle[0]?.model]
    ) {
      return Math.floor(
        service_price_object?.[selectedVehicle[0]?.model] + service_price
      );
    } else return false;
  };

  //if product doesnt have a set price, then we automatically set it as unavailable , because no price is set
  const createExpectedDate = (weeksToArrive) => {
    const currentDate = new Date();

    const unavailableDate = currentDate.setDate(
      currentDate.getDate() + 7 * (weeksToArrive ? parseInt(weeksToArrive) : 2)
    );
    return new Date(unavailableDate).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find(
      (x) => x.name === serviceItem.name
    );

    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (serviceItem.countInStock < quantity) {
      alert("Sorry. Product is out of stock");
      return;
    }

    dispatch({
      type: "CART_ADD_ITEM",
      payload: { ...serviceItem, quantity },
    });
    router.push("/cart")
  };

  if (selectedVehicle.length > 0) {
    return (
      <div className="flex items-start justify-between flex-col gap-10">
        {service_price_object?.[selectedVehicle[0]?.model] && findItems() ? (
          <>
            <span className="flex items-center gap-2 lg:ml-20 sm:ml-0 ml-0">
              <h2 className="text-xl">
              ₹{findItems() - selectedVehicle[0].discount}.99
              </h2>
              <strike className="text-ms text-gray-700/70">
              ₹{findItems()}.99
              </strike>
            </span>
            <section className="h-24 lg:ml-20 sm:ml-0 ml-0">
              <button
                onClick={addToCartHandler}
                className="hover:border-stone/300  capitalize rounded-md py-2 px-4 hover:border-2 hover:bg-white hover:text-gray-900 overflow-hidden bg-blue-700 text-white font-medium"
              >
                Add to Cart
              </button>
            </section>
          </>
        ) : (
          <section className="flex flex-col lg:px-5 sm:p-10 md:p-10 px-10 lg:gap-5 sm:gap-3 gap:4">
            <span className=" text-red-500 font-bold  text-left">
              This Product Is Unavailable
            </span>
            <article className="text-left flex flex-col">
              <span>
                Available in {weeksToArrive ? weeksToArrive : 2} Weeks
              </span>

              <span>on {createExpectedDate(weeksToArrive)}</span>
              <span className="text-indigo-500 underline cursor-pointer text-sm">
                Learn more
              </span>
            </article>
          </section>
        )}
      </div>
    );
  }

  return (
    <span className="lg:ml-20 sm:ml-0 ml-0">
      {" "}
      <button
        onClick={() => setModalOpen(!modalOpen)}
        className="text-md hover:border-stone/300 capitalize rounded-md py-3 px-5 hover:border-2 hover:bg-white hover:text-gray-900 overflow-hidden bg-blue-700 text-white font-medium"
      >
        select Vehicle
      </button>
    </span>
  );
};

export default PriceAndButtons;
