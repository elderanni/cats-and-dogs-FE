import React from "react";
import styled, { css } from "styled-components";

const MyButton = (props) => {
  return (
    <StButton
      shadow = {props.shadow}
      border={props.border}
      background={props.background}
      color={props.color}
      hoverBacground={props.hoverBacground}
      hoverBorderColor={props.hoverBorderColor}
      hoverColor={props.hoverColor}
      type={props.type || "button"}
      onClick={props.onClick}
      mg={props.mg}
    >
      {props.children}
    </StButton>
  );
};

export default MyButton;
const StButton = styled.button`
  font-size: 1.6rem;
  box-shadow:${({ shadow }) => shadow || 'non'};
  border: ${({ border }) => border || css`1px solid var(--color-point1)`};
  border-radius: 1rem;
  padding: 0.5rem 1.25rem;
  cursor: pointer;
  margin: ${({ mg }) => mg || "0.5rem"};
  background-color: white;
  color: ${({ color }) => color || css`var(--color-point3)`};
  &:active {
    background: ${({ hover }) => hover || css`var(--color-point2)`};
    border-color: ${({ hover }) => hover || css`var(--color-point2)`};
    color: white;
  }
  &:hover:enabled {
    background: ${({ hoverBacground }) =>
      hoverBacground || css`var(--color-point3)`};
    border-color: ${({ hoverBorderColor }) =>
      hoverBorderColor || css`var(--color-point3)`};
    color: ${({ hoverColor }) => hoverColor || "white"};
  }
  &:focus {
    outline: none;
  }
`;
