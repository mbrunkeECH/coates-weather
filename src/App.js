import { useState } from 'react';
import axios from "axios";
import './App.css';

import Input from './components/input/input';
import WeatherCard from './components/weatherCard/weatherCard';
import CityError from './components/error/cityError';
import Loading from './components/loader/loader';

function App() {
  const [city, setCity] = useState();
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState();
  const [error, setError] = useState(false);
  // This would ideally live in some kind of Keystore
  const key = process.env.REACT_APP_API_KEY;
  const cityBaseUrl = process.env.REACT_APP_CITY_URL;
  const weatherBaseUrl = process.env.REACT_APP_WEATHER_URL;

  const citySearchHandler = async () => {
    const cityUrl = `${cityBaseUrl}?q=${city}&appid=${key}`;
    setLoading(true);

    try {
      setError(false);
      const geo = await axios.get(cityUrl);
      if (geo.data.length) {
        let lat = geo.data[0].lat;
        let lon = geo.data[0].lon;
        const weatherUrl = `${weatherBaseUrl}?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts&units=metric&appid=${key}`;
        try {
          const res = await axios.get(weatherUrl);
          setWeather(res.data);
          setLoading(false);
        } catch {
          setError(true);
          setLoading(false);
        }
      } else {
        setLoading(false);
        setError(true);
        throw error;
      }
    } catch (e) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="Container">
      <div className="content">
        {loading && !weather &&
          <Loading />
        }
        {error &&
          <CityError />
        }
        {weather && !error &&
          <WeatherCard weather={weather} city={city} />
        }
        <div className="input">
          <Input placeholder='Search City?' buttonText='Search' onChange={(e) => setCity(e.target.value)} onClick={citySearchHandler} />
        </div>

      </div>
    </div>
  );
}

export default App;