import styled from "styled-components";
import {Button} from "antd";

export const NiceButton = styled(Button)`
  background-color: beige;
  color: black;
  border-color: white;
  width: 15em;
  max-width: 100%;

  :hover {
    background-color: #ff0000;
    color: #290047;
  }
`;

export const NiceButtonGreen = styled(Button)`
  background-color: beige;
  color: black;
  border-color: white;
  width: 15em;
  max-width: 100%;

  :hover {
    background-color: green;
    color: #290047;
  }`;