import { Store } from "@/utils/Store";
import CarCard from "@/components/CarCard";

import React, { useContext } from "react";
import { cars } from "@/utils/cars";

const SelectedCar = () => {
  const {
    state,
    dispatch,
    setModalOpen,
    modalOpen,
    selectedVehicle,

  } = useContext(Store);

  if (selectedVehicle.length > 0) {
    return (
      <div className="flex w-full justify-end">
        <CarCard
          id={""}
          name={`${selectedVehicle[0].make} ${selectedVehicle[0].model}`}
          image={selectedVehicle[0].car_image}
          showAsSelected={true}
          desc={selectedVehicle[0].class}
          year={selectedVehicle[0].year}
          fuel_type={selectedVehicle[0].fuel_type}
        />
      </div>
    );
  }

  return <></>;
};

export default SelectedCar;
