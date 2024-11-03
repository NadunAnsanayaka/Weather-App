import React, { useState } from "react";
import "./WeatherApp.css";

import search_icon from "./assets/search.png";
import clear_icon from "./assets/clear.png";
import cloud_icon from "./assets/cloud.png";
import drizzle_icon from "./assets/drizzle.png";
import rain_icon from "./assets/rain.png";
import snow_icon from "./assets/snow.png";
import wind_icon from "./assets/wind.png";
import humidity_icon from "./assets/humidity.png";

const WeatherApp = () => {
  let api_key = "ef602e1612a4e211227cb2cbf264895f";

  // State hooks for weather data and icon
  const [wicon, setWicon] = useState(cloud_icon);
  const [weather,setWeather] = useState("Clouds");
  const [temperature, setTemperature] = useState("24°C");
  const [location, setLocation] = useState("Kandy");
  const [humidity, setHumidity] = useState("55%");
  const [windSpeed, setWindSpeed] = useState("12 km/h");
  const [city, setCity] = useState("");

  const search = async () => {
    if (city === "") {
      return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${api_key}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("City not found");

      const data = await response.json();

      // Update state with fetched data
      setWeather(data.weather[0].main);
      setHumidity(data.main.humidity + " %");
      setWindSpeed(Math.floor(data.wind.speed) + " km/h");
      setTemperature(Math.floor(data.main.temp) + "°C");
      setLocation(data.name);

      // Set weather icon based on data
      const iconCode = data.weather[0].icon;
      if (iconCode === "01d" || iconCode === "01n") {
        setWicon(clear_icon);
      } else if (iconCode === "02d" || iconCode === "02n") {
        setWicon(cloud_icon);
      } else if (iconCode === "03d" || iconCode === "03n" || iconCode === "04d" || iconCode === "04n") {
        setWicon(drizzle_icon);
      } else if (iconCode === "09d" || iconCode === "09n" || iconCode === "10d" || iconCode === "10n") {
        setWicon(rain_icon);
      } else if (iconCode === "13d" || iconCode === "13n") {
        setWicon(snow_icon);
      } else {
        setWicon(clear_icon);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("Could not fetch weather data. Please check the city name and try again.");
    }
  };

  return (
    <div className="container">
      <div className="top-bar">
        <input
          type="text"
          className="cityInput"
          placeholder="Search"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <div className="search-icon" onClick={search}>
          <img src={search_icon} alt="search_icon" />
        </div>
      </div>
      <div className="weather-image">
        <img src={wicon} alt="weather-icon" />
        <div className="weather-name">{weather}</div>
      </div>
      <div className="weather-temp">{temperature}</div>
      <div className="weather-location">{location}</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="humidity_icon" className="icon" />
          <div className="data">
            <div className="humidity-percent">{humidity}</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="wind_icon" className="icon" />
          <div className="data">
            <div className="wind-rate">{windSpeed}</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
