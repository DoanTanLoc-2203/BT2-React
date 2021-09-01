/** @format */

import * as React from "react";
import styled from "styled-components";
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
    <div>
      <Button>MODELS</Button>
      <Button>CUSTOM SOLUTION</Button>
      <Button>OWNERSHIP</Button>
      <Button>MOTORSPORT</Button>
    </div>
  );
}
