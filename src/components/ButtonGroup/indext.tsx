/** @format */

import * as React from "react";
import styled from "styled-components";
import { GlobalData } from "../../App";
export interface ButtonGroupProps {}

const Button = styled.button`
  margin-left: 10px;
  margin-right: 10px;
  color: white;
  &:hover {
    border-bottom: 1px solid #ffd700;
  }
`;

export function ButtonGroup(props: ButtonGroupProps) {
  return (
    <GlobalData.Consumer>
      {({ mode }) => (
        <div>
          <Button style={{ color: mode.color }}>MODELS</Button>
          <Button style={{ color: mode.color }}>CUSTOM SOLUTION</Button>
          <Button style={{ color: mode.color }}>OWNERSHIP</Button>
          <Button style={{ color: mode.color }}>MOTORSPORT</Button>
        </div>
      )}
    </GlobalData.Consumer>
  );
}
