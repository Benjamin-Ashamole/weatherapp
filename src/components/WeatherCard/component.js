import React from "react";
import styled from "@emotion/styled";

import Location from "./Location";
import Icon from "./Icon";
import Conditions from "./Conditions";

const WeatherCard = ({ temp, condition, city, country }) => {
  //   const red = 100;
  let highColor = 0;
  let lowColor = 0;

  let bg = null;

  if (temp > 12) {
    highColor = (1 - (temp - 12) / 28) * 255; // for hot weather
    lowColor = highColor - 150;
    bg = `linear-gradient(
        to top,
        rgba(255, ${highColor}, 0),
        rgb(255, ${lowColor}, 0)
      )`;
  } else if (temp <= 12) {
    highColor = (1 - (temp + 20) / 32) * 255; //for cold weather
    lowColor = highColor - 150;
    bg = `linear-gradient(
        to top,
        rgba(0, ${highColor}, 255),
        rgb(0, ${lowColor}, 255)
      )`;
  }

  const Card = styled.div`
    margin: 0 auto;
    background: ${bg};
    width: 200px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
  `;
  return (
    <Card>
      <Location city={city} country={country} />
      <Icon condition={condition} />
      <Conditions temp={temp} condition={condition} />
    </Card>
  );
};

export default WeatherCard;
