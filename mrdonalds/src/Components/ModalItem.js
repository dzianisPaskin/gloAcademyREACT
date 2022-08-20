import React from "react";
import styled from "styled-components";
import { ButtonCheckOut } from "./ButtonCheckOut";

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

const Modal = styled.div`
  position: relative;
  background-color: #fff;
  width: 600px;
  height: 600px;
`;

const Banner = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
`;

// const TitleWrap = styled.div`
//   display: flex;
//   justify-content: space-between;
//   padding: 20px 53px 0 37px;
// `;

// const Price = styled.h3`
//   font-family: "Pacifico";
//   font-weight: 400;
//   font-size: 30px;
//   line-height: 53px;
//   color: #000000;
// `;
// const ProductName = styled.h3`
//   font-family: "Pacifico";
//   font-weight: 400;
//   font-size: 30px;
//   line-height: 53px;
//   color: #000000;
// `;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 200px);
  padding: 30px;
`
const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  font-weight: 700;
  font-family: 'Pacifico', cursive;
`

export const ModalItem = ({ openItem, setOpenItem }) => {
  function closeModal(e) {
    if (e.target.id === "overlay") {
      setOpenItem(null);
    }
  }
  if (!openItem) return null;
  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img} />
        <Content>
    <HeaderContent>
      <div>{openItem.name}</div>
      <div>{openItem.price}</div>
    </HeaderContent>
        <ButtonCheckOut>Добавить</ButtonCheckOut>

        </Content>
      </Modal>
    </Overlay>
  );
};
