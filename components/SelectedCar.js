import { Store } from "@/utils/Store";
import CarCard from "@/components/CarCard";

import React, { useContext } from "react";
import { cars } from "@/utils/cars";

const SelectedCar = () => {
  const { state, dispatch, setModalOpen, modalOpen, selectedVehicle, selectedVehicleImage } =
    useContext(Store);

  if (selectedVehicle.length > 0) {
    return (
      <div className="flex w-full justify-end">
        <CarCard
          id={""}
          name={`${selectedVehicle[0].make} ${selectedVehicle[0].model}`}
          image={cars[selectedVehicleImage].car_images}
          showAsSelected={true}
        />
      </div>
    );
  }

  return <></>;
};

export default SelectedCar;
