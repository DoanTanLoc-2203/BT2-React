/** @format */

import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Button = styled.button`
  margin-left: 10px;
  margin-right: 10px;
  color: white;
  &:hover {
    border-bottom: 1px solid #ffd700;
  }
`;

export function ButtonGroup() {
  return (
    <div>
      <Button>
        <Link to="/">HOME</Link>
      </Button>
      <Button>
        <Link to="/post">POST</Link>
      </Button>
      <Button>OWNERSHIP</Button>
      <Button>MOTORSPORT</Button>
    </div>
  );
}
