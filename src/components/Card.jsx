import React from "react";

const Card = (props) => {
  const { location } = props;
  if (location === null) return null;
  if (location.message) return <pre>{location.message}</pre>;

  return (
    <div className="card mx-auto" style={{ width: "18rem" }}>
      {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
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
        </div>
      </div>
      <div className="card-footer">
        <p>{location.weather[0].description.toUpperCase()}</p>
      </div>
    </div>
  );
};

export default Card;
