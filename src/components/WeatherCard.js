import React, { useEffect } from "react";

const Weathercard = ({
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
}) => {
  const [weatherState, setWeatheState] = React.useState("");

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatheState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatheState("wi-fog");
          break;
        case "Clear":
          setWeatheState("wi-day-sunny");
          break;
        case "Mist":
          setWeatheState("wi-dust");
          break;

        default:
          setWeatheState("wi-day-sunny");
          break;
      }
    }
  }, [weathermood]);

  // converting the seconds into time
  let sec = sunset;
  let sec2 = sunrise;
  let kelvin = 273.15;
  let date = new Date(sec * 1000);
  let date2 = new Date(sec2 * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  let timeStr2 = `${date2.getHours()}:${date2.getMinutes()}`;
  var temperat = parseFloat(temp - kelvin).toFixed(2);
  var minimum_temp = parseFloat(temp_min - kelvin).toFixed(2);
  var maximum_temp = parseFloat(temp_max - kelvin).toFixed(2);
  var feels_temp = parseFloat(feels_like - kelvin).toFixed(2);
  

  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>

        <div className="weatherInfo">
          <div className="temperature">
            <span>{temperat}&deg;</span>
          </div>

          <div className="description">
            <div className="weatherCondition">{weathermood}</div>
            <div className="place">
              {name}, {country}
            </div>
          </div>
        </div>

        <div className="date"> {new Date().toLocaleString()} </div>

        {/* our 4column section  */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunrise"}></i>
              </p>
              <p className="extra-info-leftside">
                {timeStr2} AM <br />
                Sunrise
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {timeStr} PM <br />
                Sunset
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-thermometer-exterior"}></i>
              </p>
              <p className="extra-info-leftside">
                {minimum_temp}
                <i className={"wi wi-degrees"}></i> <br />
                Minimum Temperature
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-thermometer"}></i>
              </p>
              <p className="extra-info-leftside">
                {maximum_temp}
                <i className={"wi wi-degrees"}></i> <br />
                Maximum Temperature
              </p>
            </div>
          </div>
          
          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-alien"}></i>
              </p>
              <p className="extra-info-leftside">
                {feels_temp}
                <i className={"wi wi-degrees"}></i> <br />
                Feels Like
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity} <br />
                Humidity
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure} <br />
                Pressure
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed} <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Weathercard;
