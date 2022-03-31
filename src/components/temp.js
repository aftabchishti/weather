import React, { useState, useEffect } from "react";
import Weathercard from "./WeatherCard";
import "./style.css";

const Temp = () => {
  const [searchValue, setSearchValue] = useState("lahore");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=20700d8b6a67d69cf20c714df98708d4`;

      let res = await fetch(url);
      let data = await res.json();

      const { lon, lat} = data.coord
      const { temp, feels_like, temp_min, temp_max, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunrise, sunset } = data.sys;

      const myNewWeatherInfo = {
        lon,
        lat,
        temp,
        feels_like,
        temp_min,
        temp_max,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunrise,
        sunset,
      };

      setTempInfo(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}
          >
            Search
          </button>
        </div>
      </div>

      {/* our temp card  */}
      <Weathercard {...tempInfo} />
    </>
  );
};

export default Temp;
