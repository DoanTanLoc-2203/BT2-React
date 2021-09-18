/** @format */

import { Button } from "@chakra-ui/button";
import * as React from "react";
import { Link } from "react-router-dom";
// const MyButton = styled(Button)`
//   box-sizing: border-box;
//   margin-left: 10px;
//   margin-right: 10px;
//   color: white;
//   border-bottom: 1px solid #020202;
//   &:hover {
//     border-bottom: 1px solid #ffd700;
//   }
// `;

export function ButtonGroup() {
  return (
    <div>
      <Button variant="ghost">
        <Link to="/">HOME</Link>
      </Button>
      <Button variant="ghost">
        <Link to="/post">POST</Link>
      </Button>
      <Button variant="ghost">OWNERSHIP</Button>
      <Button variant="ghost">MOTORSPORT</Button>
    </div>
  );
}
