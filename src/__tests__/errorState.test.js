import { render, screen } from "@testing-library/react";
import { useState } from "react";
import CityError from "../components/error/cityError";
import WeatherCard from "../components/weatherCard/weatherCard";
import { Weather } from "../components/testData/Weather";

const MockError = ({ visibleError }) => {
  const [error] = useState(visibleError);

  return (
    <>
      {!error && <WeatherCard weather={Weather} city="Brisbane" />};
      {error && <CityError />};
    </>
  );
};

describe("When error state is true, the weather card should not be showing", () => {
  test("error is true, weather card should not show", () => {
    render(<MockError visibleError={true} />);
    const weatherElementCount = screen.queryByAltText(/weather icon/);
    expect(weatherElementCount).toBeNull();
  });

  test("error is true, error state shows", () => {
    render(<MockError visibleError={true} />);
    const errorText = screen.getByText(
      /No weather data could be found for that city/i
    );
    expect(errorText).toBeInTheDocument();
  });
});
