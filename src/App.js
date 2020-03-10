import React, { useState, useEffect } from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard/component";

function App() {
  const [query, setQuery] = useState("Sydney, AU");
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null
  });

  //async function
  const data = async q => {
    const apiRes = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=71a4ff8009450592f1c6b682005afbb6`
    );

    const resJSON = await apiRes.json();
    return resJSON;
  };

  const handleSearch = e => {
    e.preventDefault();
    data(query).then(res => {
      // console.log(res.coord);
      // console.log("It feels like " + res.main.feels_like);
      // console.log("But its actually " + res.main.temp);

      setWeather({
        temp: res.main.temp,
        city: res.name,
        condition: res.weather[0].main,
        country: res.sys.country
      });
    });
  };

  useEffect(() => {
    data(query).then(res => {
      setWeather({
        temp: res.main.temp,
        city: res.name,
        condition: res.weather[0].main,
        country: res.country
      });
    });
  }, []);

  return (
    <div className="App">
      <WeatherCard
        temp={weather.temp}
        condition={weather.condition}
        city={weather.city}
        country={weather.country}
      />
      <WeatherCard temp={30} condition="Cloud" city="Abuja" country="NG" />
      <WeatherCard temp={13} condition="Mist" city="New York" country="US" />
      <form>
        <input value={query} onChange={e => setQuery(e.target.value)} />
        <button onClick={e => handleSearch(e)}>Search</button>
      </form>
    </div>
  );
}

export default App;
