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
      setLocation(error);
      console.log(error);
    }
  };

  return (
    <div className="weather">
      <header className="d-flex justify-content-center align-items-center text-white">
        <h1>Weather App</h1>
        <i className="fa-solid fa-sun ms-2 fa-2x"></i>
      </header>
      <main>
        <button className="btn btn-primary mb-3" onClick={getData}>
          Click Now !
        </button>
        <Card location={location} />
      </main>
      <footer className="mt-3 d-flex justify-content-between align-items-center text-white">
        <i class="fa-solid fa-spinner fa-spin-pulse fa-2x"></i>
        <pre>Powered By Forklein</pre>
        <i class="fa-solid fa-spinner fa-spin-pulse fa-2x"></i>
      </footer>
    </div>
  );
};

export default Weather;
