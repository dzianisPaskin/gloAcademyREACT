import React from "react";
import styled from "styled-components";
import BannerImg from '../image/banner.jpg'


const BannerStyled = styled.div`
  width: 100%;
  height: 210px;
  background-image: ${`url(${BannerImg})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`


export const Banner = () => {
  return (
    <BannerStyled/>
  )
}