import React from "react";
import styled from "styled-components";
const ChoiсeWrap = styled.div`
  max-width: 500px;
  margin: 0 auto;
  column-count: 2;
  column-gap: 15px;
`;
const ChoiсeRadio = styled.input`
  cursor: pointer;
  margin-right: 5px;
`;
const ChoiсeLabel = styled.label`
  cursor: pointer;
  display: block;
`;

export function Choiсes({ openItem, choice, changeChoices}) {
  return (
    <>
      <h3>Выбирайте: </h3>
      <ChoiсeWrap>
        {openItem.choices.map((item, i) => (
          <ChoiсeLabel key={i}>
            <ChoiсeRadio
              type="radio"
              name="choices"
              checked={choice === item}
              value={item}
              onChange={changeChoices}
            />
            {item}
          </ChoiсeLabel>
        ))}
      </ChoiсeWrap>
    </>
  );
}
