import React, { useState } from 'react'

const api = {
  baseUrl: "https://api.openweathermap.org/data/2.5/weather",
  key: "19a629592b573953535ad2e5992de60f",
};

const App = () => {
  const [weather, setweather] = useState({});
  const [search, setSearch] = useState("");

  function Handle() {
    fetch(`${api.baseUrl}?q=${search}&appid=${api.key}`)
    .then(response => response.json())
    .then(d => setweather(d))
  }
  return (
    <div>
      <input 
      placeholder="Enter city name"
      onChange={(e) => setSearch(e.target.value)} />

      <button onClick={Handle} >Search</button>

      {weather.main !== undefined ? (
        <div>
          <h1>{weather.name}</h1>

          <p>Temperature: {weather.main.temp}</p>
          <p>{weather.weather[0].main}</p>
          <p>{weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}</p>
          </div>
      ):(
        <p>Not Found</p>
      )}
    </div>
  )
}

export default App