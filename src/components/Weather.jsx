import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Weather = () => {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [location, setLocation] = useState(null);
  const [ip, setIp] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    getIp(`${process.env.REACT_APP_IP_URL}`);
    // console.log("Latitude is:", lat);
    // console.log("Longitude is:", long);
    // console.log(location);
  }, [lat, long]);

  useEffect(() => {
    getIp(`${process.env.REACT_APP_IP_URL}`);
  });

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

  const getIp = async (baseUrl) => {
    try {
      const res = await axios.get(baseUrl);
      const { ip } = res.data;
      if (!ip) {
        throw new Error("API error!!!");
      }
      setIp(ip);
      // console.log(ip);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="weather">
      <header className="d-flex justify-content-center align-items-baseline text-white">
        <h1>Weather App</h1>
        &nbsp;
        <i className="fa-solid fa-cloud-sun fa-2x"></i>
      </header>
      <main>
        <button className="btn btn-primary mb-3" onClick={getData}>
          Click Now !
        </button>
        <Card location={location} ip={ip} />
      </main>
      <footer className="mt-3 d-flex justify-content-center text-white ">
        <div className="icon">
          <i className="fa-solid fa-spinner fa-spin-pulse"></i>
        </div>
        <pre className="mx-2">Powered By Forklein</pre>
        <div className="icon">
          <i className="fa-solid fa-spinner fa-spin-pulse"></i>
        </div>
      </footer>
    </div>
  );
};

export default Weather;
