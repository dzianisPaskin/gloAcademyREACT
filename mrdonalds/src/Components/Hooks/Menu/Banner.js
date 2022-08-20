import React from "react";
import styled from "styled-components";
import BannerImg from '../../../image/banner.png'


const BannerStyled = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${BannerImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`


export const Banner = () => {
  return (
    <BannerStyled/>
  )
}