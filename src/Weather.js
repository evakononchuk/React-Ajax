import React, { useState } from "react";
import axios from "axios";

let apiKey = "bd5b4461863eddaa6ced0a0a67989e0a";
export default function Weather(props) {
  let [temperature, setTemperature] = useState(null);

  function showTemperature(response) {
    setTemperature(Math.round(response.data.main.temp));
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showTemperature);

  return (
    <h1>
      The temperature in {props.city} is {temperature}°C
    </h1>
  );
}
