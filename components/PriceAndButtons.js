import { Store } from "@/utils/Store";
import CarCard from "@/components/CarCard";
import servicedata from "@/utils/servicedata";
import React, { useContext } from "react";
import { useRouter } from "next/router";

const PriceAndButtons = () => {
  const { state, dispatch, setModalOpen, modalOpen, selectedVehicle } =
    useContext(Store);
  const { query } = useRouter();
  const { slug } = query;
  const periodicservices = servicedata.periodics.find((x) => x.slug === slug);

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find(
      (x) => x.slug === periodicservices.slug
    );
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (periodicservices.countInStock < quantity) {
      alert("Sorry. Product is out of stock");
      return;
    }

    dispatch({
      type: "CART_ADD_ITEM",
      payload: { ...periodicservices, quantity },
    });
  };
  if (selectedVehicle.length > 0) {
    return (
      <div className="flex items-start justify-between flex-col gap-10">
        <span className="flex items-center gap-2 ">
          <h2 className="text-xl">$54.99</h2>
          <strike className="text-ms text-gray-700/70">$69.99</strike>
        </span>
        <section className="h-24">
        <button
          onClick={addToCartHandler}
          className="hover:border-stone/300  capitalize rounded-md py-2 px-4 hover:border-2 hover:bg-white hover:text-gray-900 overflow-hidden bg-blue-700 text-white font-medium"
        >
          Add to Cart
        </button></section>
      </div>
    );
  }
  return (
  <span className="w-40 h-16 p-2">
    <button
      onClick={() => setModalOpen(!modalOpen)}
      className="hover:border-stone/300 capitalize h-fit w-fit rounded-md py-2 px-4 hover:border-2 hover:bg-white hover:text-gray-900 overflow-hidden bg-blue-700 text-white font-medium 
      "
    >
      select Vehicle
    </button></span>
  );
};

export default PriceAndButtons;
