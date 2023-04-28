import { cars } from "@/utils/cars";
import { Store } from "@/utils/Store";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import React, { useContext, useEffect } from "react";

const CarCard = ({
  name,
  image,
  showAsSelected,
  id,
  onClick,
  desc,
  fuel_type,
  year,
}) => {
  const { asPath,pathname } = useRouter();

  const {
    setSearchInfo,
    state,
    dispatch,
    setModalOpen,
    modalOpen,
    selectedVehicle,
    setSelectedVehicle,
  } = useContext(Store);

  if (showAsSelected) {
    return (
      <Link
        href={`${asPath}/?carModel=${id}&carMake=${name}`}
        as={`${asPath}`}
        onClick={() => {
          setSearchInfo("");
          setModalOpen(!modalOpen);
        }}
        className=" bg-white shadow-lg flex w-fit items-center justify-between gap-4 py-4 px-7"
      >
        <Image
          className="w-auto h-auto"
          src={image}
          alt={`${name} Logo`}
          width={80}
          height={0}
        />
        <section className="flex flex-col capitalize justify-center items-center ">
          <span className="text-gray-900 font-bold ">
            {name + " " + year } 
            
          </span>

          <span className="text-gray-600 text-sm">{desc}</span>

          <span className="text-gray-600 text-sm">fuel:{fuel_type}</span>
        </section>
      </Link>
    );
  }
  return (
    <Link
      href={`${asPath}/?carModel=${id}&carMake=${name}`}
      as={`${asPath}`}
      onClick={
        onClick
          ? () => {
              onClick();
              setSearchInfo("");
            }
          : () => setSearchInfo("")
      }
      className="shadow-md items-center justify-center py-5 px-8 flex flex-col gap-3"
    >
      <span>
        <Image
          className="w-auto h-auto"
          src={image}
          alt={`${name} Logo`}
          width={80}
          height={0}
        />
      </span>
      <span className="font-bold capitalize">{name}</span>
    </Link>
  );
};

export default CarCard;
