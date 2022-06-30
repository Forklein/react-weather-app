import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = () => {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [location, setLocation] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    // console.log("Latitude is:", lat);
    // console.log("Longitude is:", long);
  }, [lat, long]);

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      );
      setLocation(data);
      console.log(location);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="weather">
      <h1>Weather</h1>
    </div>
  );
};

export default Weather;
