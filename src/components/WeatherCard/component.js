import React from "react";
import styled from "@emotion/styled";

import Location from "./Location";
import Icon from "./Icon";
import Conditions from "./Conditions";

const WeatherCard = props => {
  const red = 360;
  const Card = styled.div`
    margin: 0 auto;
    background: linear-gradient(to bottom, rgba(${red}, 200, 200), pink);
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
      <Location />
      <Icon />
      <Conditions />
    </Card>
  );
};

export default WeatherCard;
