import React, { useState, useEffect } from "react";
import CarDetails from "./CarDetails";
import CarForm from "./CarForm";
import "./CarApiFetcher.css";

const CarApiFetcher = () => {
  const [cars, setCars] = useState([]);
  const [carIds, setCarIds] = useState([]);
  const [nextCarId, setNextCarId] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleDeleteCar = (autoId) => {
    setCars((prevCars) => prevCars.filter((car) => car.autoId !== autoId));
    setCarIds((prevIds) => prevIds.filter((id) => id !== autoId));
  };

  const handleSearch = () => {
    const filteredCars = cars.filter((car) => {
      return (
        car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.manufacturer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    setSearchResults(filteredCars);
  };

  const addCar = (newCar) => {
    const newCarId = nextCarId;
    setCars((prevCars) => [...prevCars, { ...newCar, autoId: newCarId }]);
    setCarIds((prevIds) => [...prevIds, newCarId]);
    setNextCarId((prevId) => prevId + 1);
  };

  return (
    <div className="containerStyle">
      <CarForm onAddCar={addCar} />
      <div className="search">
      <input
        type="text"
        className="car-search"
        placeholder="Пошук за назвою або виробником"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Пошук</button>
      </div>


      {searchResults.length === 0 ? (
        <h3>Нажаль, постів не знайдено</h3>
      ) : (
        searchResults.map((car, index) => (
          <CarDetails className="containerStyle2" key={car.autoId} car={car} onDeleteCar={handleDeleteCar} />
        ))
      )}
    </div>
  );
};


export default CarApiFetcher;
