import React from "react";

const Card = (props) => {
  const { location, ip } = props;

  if (location === null) return null;
  if (location.message) return <pre>{location.message}</pre>;

  return (
    <div
      className="card bg-dark text-white p-3 mx-auto shadow rounded"
      style={{ width: "18rem" }}
    >
      <div className="card-header">
        <h3>{location.name}</h3>
      </div>
      <div className="card-body">
        {/* <h5 className="card-title my-2">{location.name}</h5> */}
        <div className="card-text">
          <p>
            Temperatura: <strong>{location.main.temp}°C</strong>
          </p>
          <p>
            Temperatura Minima: <strong>{location.main.temp_min}°C</strong>
          </p>
          <p>
            Temperatura Massima: <strong>{location.main.temp_max}°C</strong>
          </p>
          <p>Ip Address: {ip}</p>
        </div>
      </div>
      <div className="card-footer">
        <p>{location.weather[0].description.toUpperCase()}</p>
        <img
          src={`http://openweathermap.org/img/wn/${location.weather[0].icon}.png`}
          alt=""
        />
      </div>
    </div>
  );
};

export default Card;
