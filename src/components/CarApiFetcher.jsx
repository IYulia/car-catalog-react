import React, { useState, useEffect } from "react";
import CarDetails from "./CarDetails";
import CarForm from "./CarForm";

const CarApiFetcher = () => {
  const [cars, setCars] = useState([]);
  const [carIds, setCarIds] = useState([]);
  const [nextCarId, setNextCarId] = useState(1);

  const handleDeleteCar = (autoId) => {
    setCars((prevCars) => prevCars.filter((car) => car.autoId !== autoId));
    setCarIds((prevIds) => prevIds.filter((id) => id !== autoId));
  };

  const addCar = (newCar) => {
    const newCarId = nextCarId;
    setCars((prevCars) => [...prevCars, { ...newCar, autoId: newCarId }]);
    setCarIds((prevIds) => [...prevIds, newCarId]);
    setNextCarId((prevId) => prevId + 1);
  };

  useEffect(() => {
    const min = 35256443;
    const max = 35333387;
    const generatedAutoIds = Array.from(
      { length: 6 },
      () => Math.floor(Math.random() * (max - min + 1)) + min
    );
    setCars(generatedAutoIds);

    const generatedCars = generatedAutoIds.map((autoId) => ({ autoId }));
    setCars(generatedCars);
  }, []);

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginLeft: 40,
    marginRight: 40,
  };

  return (
    <div style={containerStyle}>
      <CarForm onAddCar={addCar} />

      {cars.map((car, index) => (
        <CarDetails key={car.autoId} car={car} onDeleteCar={handleDeleteCar} />
      ))}
    </div>
  );
};

export default CarApiFetcher;
