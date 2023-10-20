import React, { useState } from "react";
import "./CarForm.css";

const CarForm = ({ onAddCar }) => {
  const [car, setCar] = useState({
    name: "",
    manufacturer: "",
    year: "",
    volume: "",
    price: "",
    color: "",
    description: "",
  });

  const [nextCarId, setNextCarId] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar({ ...car, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCar = { ...car, autoId: nextCarId }; 
    onAddCar(newCar);
    setCar({
      name: "",
      manufacturer: "",
      year: "",
      volume: "",
      price: "",
      color: "",
      description: "",
    });
    setNextCarId(nextCarId + 1); 
  }
  

  return (
    <div className="car-form">
      <h1 className="add-car-title">Додати автомобіль</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-line-first">
          <label>
            Назва:
            <input
              type="text"
              name="name"
              value={car.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Виробник:
            <input
              type="text"
              name="manufacturer"
              value={car.manufacturer}
              onChange={handleChange}
            />
          </label>
          <label>
            Рік випуску:
            <input
              type="text"
              name="year"
              value={car.year}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-line-second">
          <label>
            Об'єм:
            <input
              type="text"
              name="volume"
              value={car.volume}
              onChange={handleChange}
            />
          </label>
          <label>
            Ціна:
            <input
              type="text"
              name="price"
              value={car.price}
              onChange={handleChange}
            />
          </label>
          <label>
            Колір:
            <input
              type="text"
              name="color"
              value={car.color}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-row-third">
          <label>
            Опис:
            <input
              type="text"
              name="description"
              className="description"
              value={car.description}
              onChange={handleChange}
            />
          </label>
        </div>
        <button className="btn" type="submit"><p>Додати</p></button>
      </form>
    </div>
  );
};

export default CarForm;
