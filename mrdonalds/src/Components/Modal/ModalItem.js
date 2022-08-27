import React from "react";
import styled from "styled-components";
import { ButtonCheckOut } from "../Style/ButtonCheckOut";
import { CountItem } from "./CountItem";
import { useCount } from "../Hooks/useCount";
import { totalPriceItems } from "../Functions/secondaryFunction";
import { FormatCurrency } from "../Functions/secondaryFunction";
import { Toppings } from "./Toppings";
import { Choiсes } from "./Choiсes";
import { useToppings } from "../Hooks/useToppings";
import { useChoices } from "../Hooks/useChoices";

const TotalPriceItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

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

const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 200px);
  padding: 30px;
`;
const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  font-weight: 700;
  font-family: "Pacifico", cursive;
`;



export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {
  const counter = useCount();
  const toppings = useToppings(openItem);
  const choices = useChoices(openItem)
  const isEdit = openItem.index > -1;

  const closeModal = (e) => {
    if (e.target.id === "overlay") {
      setOpenItem(null);
    }
  };

  const order = {
    ...openItem,
    count: counter.count,
    topping: toppings.toppings,
    choice: choices.choice
  };

  const addToOrder = () => {
    setOrders([...orders, order]);
    setOpenItem(null);
  };

  const editOrder = () => {
    const  newOrders = [...orders];
    newOrders[openItem.index] = order;
    setOrders(newOrders);
  }

  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img} />
        <Content>
          <HeaderContent>
            <div>{openItem.name}</div>
            <div>{FormatCurrency(openItem.price)}</div>
          </HeaderContent>
          <CountItem {...counter} />
          {openItem.toppings && <Toppings {...toppings}/>}
          {openItem.choices && <Choiсes {...choices} openItem={openItem}/>}
          <TotalPriceItem>
            <span>Цена:</span>
            <span>{FormatCurrency(totalPriceItems(order))}</span>
          </TotalPriceItem>
          <ButtonCheckOut onClick={isEdit ? editOrder : addToOrder}
            disabled={order.choices && !order.choice}
          >Добавить</ButtonCheckOut>
        </Content>
      </Modal>
    </Overlay>
  );
};
