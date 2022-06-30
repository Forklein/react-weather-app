import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Weather = () => {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    // console.log("Latitude is:", lat);
    // console.log("Longitude is:", long);
    // console.log(location);
  }, [lat, long]);

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      );
      setLocation(data);
      // console.log(data);
      // console.log(location);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="weather">
      <header className="d-flex justify-content-center align-items-center mt-3 text-white">
        <h1>Weather</h1>
        <i className="fa-solid fa-sun ms-2 fa-2x"></i>
      </header>
      <button className="btn btn-primary mb-3" onClick={getData}>
        Click for info weather
      </button>
      <Card location={location} />
    </div>
  );
};

export default Weather;
