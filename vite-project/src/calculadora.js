import styled from "styled-components";

export const CalculatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  background: white;
  box-shadow: 10px 9px 10px -3px rgba(0, 0, 0, 0.1);
`;

export const CalculatorButton = styled.button`
  height: 80px;
  width: 80px;
  transition: 0.1s linear;
  color: var(--number);
  cursor: pointer;

  &.numbersButton {
    background-color: var(--number_buttons);

    &:hover {
      background-color: var(--buttons_hover);
    }
  }

  &.numbersButtonOff {
    background-color: var(--number_buttons);

    &:hover {
      background: var(--number_buttons);
    }
  }

  &.operatorButton {
    background-color: var(--operator_button);

    &:hover {
      background-color: var(--buttons_hover);
    }
  }

  &.operatorButtonOff {
    background-color: var(--operator_button);
  }

  &.submitButton {
    background: var(--display);
    cursor: pointer;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const CalculatorForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Display = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 0 20px 15px 0;
  color: var(--display_number);
  height: 110px;
  width: 100%;
  font-size: 1.5rem;
  background: var(--display);
`;

export const ButtonsGrid = styled.div`
  display: flex;
  align-items: baseline;
`;

export const NumbersGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const OperatorsGrid = styled.div`
  display: flex;
  flex-direction: column;
`;
