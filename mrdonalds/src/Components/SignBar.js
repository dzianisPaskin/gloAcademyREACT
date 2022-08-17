import React from "react";
import styled from "styled-components";
import SignLogo from "../image/sign.svg"


const SignBarStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`
const ImgLogo = styled.img`
  width: 20px;
`

const SignBtn = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  font-family: Roboto, sans-serif; 
`


export const SignBar = () => {
  return (

  <SignBarStyled>
    <ImgLogo src={SignLogo} alt="logo"/>
    <SignBtn>войти</SignBtn>
  </SignBarStyled>
  )
}
