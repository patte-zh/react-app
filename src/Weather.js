import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `the weather in ${response.data.name} is ${response.data.main.temp}º C`
    );
  }

  let url = `http://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=9cd8a2246f79707c08b7050e7b412588&units=metric`;
  axios.get(url).then(handleResponse);
  return (
    <div>
      <h2> I did it!!!</h2>{" "}
      <Loader type="Bars" color="grey" height={80} width={80} />
    </div>
  );
}
