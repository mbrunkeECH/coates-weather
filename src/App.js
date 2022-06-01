import { useState } from 'react';
import './App.css';
import Input from './components/input/input';
import WeatherCard from './components/weatherCard/weatherCard';

function App() {
  const [city, setCity] = useState('');

  const citySearchHandler = () => {
    console.log(city);
  };

  return (
    <div className="Container">
      <div className="content">
        <h3>{city}</h3>
        <WeatherCard />
        <div className="input">
          <Input placeholder='Search City?' buttonText='Search' onChange={(e) => setCity(e.target.value)} onClick={citySearchHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;
