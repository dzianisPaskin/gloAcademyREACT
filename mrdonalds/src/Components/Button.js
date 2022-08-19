import React from "react";
import styled from "styled-components";

const StyledBdtn = styled.button`
  font-family: "Roboto";
  font-weight: 400;
  font-size: 21px;
  line-height: 25px;
  position: absolute;
  left: 175px;
  bottom: 43px;
  width: 265px;
  height: 65px;
  border: none;
  background-color: #299b01;
  color: #ffffff;
`;

export const Button = () => {
  return <StyledBdtn>Добавить товар</StyledBdtn>;
};
