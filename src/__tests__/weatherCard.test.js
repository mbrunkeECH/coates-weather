/* eslint-disable react/prop-types */
import { render, screen } from "@testing-library/react";
import { useState } from "react";
import WeatherCard from "../components/weatherCard/weatherCard";
import { Weather } from "../components/testData/Weather";

const MockWeather = ({ mockState }) => {
  const [weatherState] = useState(mockState);
  return (
    <>{weatherState && <WeatherCard weather={Weather} city="Brisbane" />}</>
  );
};

describe("If weather state is active, the weather card should be showing and have the next 5 days forcasted", () => {
  test("if weather state is active, the weather card should be visible", () => {
    render(<MockWeather mockState={true} />);
    const weatherElementCount = screen.getByText(/Brisbane/);
    expect(weatherElementCount).toBeInTheDocument();
  });

  test("weather card should show the next 5 days", async () => {
    render(<MockWeather mockState={true} />);
    const weatherElementCount = await screen.findAllByAltText(
      /current weather icon/
    );
    expect(weatherElementCount).toHaveLength(5);
  });
});
