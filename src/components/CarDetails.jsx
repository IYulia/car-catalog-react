import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./CarDetails.css";

const CarDetails = ({ car, onDeleteCar }) => {
  const { autoId } = car;
  const [carInfo, setCarInfo] = useState(null);

  useEffect(() => {
    const apiUrl = `https://developers.ria.com/auto/info?api_key=POjF0p3Wf5X2w5SS7Dsa0ANxQ0vmIVtsBvtrDKPh&auto_id=${autoId}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setCarInfo(response.data);
        console.log('autoId:', autoId);

      })
      .catch((err) => {
        console.error("Error fetching car info:", err);
      });
  }, [autoId]);

  const handleDeleteClick = () => {
    onDeleteCar(autoId);
  };

  return (
    <div className="car-details-container">
      {carInfo && (
        <div className="car-details-item">
          <div className="car-details-btn">
            <button onClick={handleDeleteClick}>&#10005;</button>
          </div>
          <div className="car-image-container">
            <img
              src={carInfo.photoData.seoLinkM}
              alt="Car"
              className="car-image"
            />
          </div>
          <div className="car-info-container">
            <div className="car-title">
              <div className="car-mark">
                <h3>{carInfo.markName}</h3>
              </div>
              <div className="car-model">
                <p>{carInfo.modelName}</p>
              </div>
            </div>
            <div className="car-year">
              <p> {carInfo.autoData.year}</p>
            </div>
            <div className="car-race">
              <p>{carInfo.autoData.race}</p>
            </div>
            <div className="car-fuelName">
              <p>{carInfo.autoData.fuelName}</p>
            </div>
            <div className="car-transmission">
              <p>{carInfo.autoData.gearboxName}</p>
            </div>
            <div className="car-city">
              <p>{carInfo.gearboxName}</p>
            </div>
            <div className="car-price">
              <p>{carInfo.USD} $</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDetails;
