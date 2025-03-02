import { useState, useEffect } from "react";

const WeatherPage = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const res = await fetch("/api/weather");
      const data = await res.json();
      setWeather(data);
    };

    fetchWeather();
  }, []);

  return (
    <div>
      <h1>Informasi Cuaca</h1>
      {weather ? (
        <div>
          <p>Kota: {weather.name}</p>
          <p>Suhu: {weather.main.temp}°C</p>
          <p>Cuaca: {weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Memuat data cuaca...</p>
      )}
    </div>
  );
};

export default WeatherPage;
