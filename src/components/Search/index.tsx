/** @format */

import * as React from "react";
import { Input, IconButton, Wrap, WrapItem } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
export interface SearchProps {}

export function Search(props: SearchProps) {
  return (
    <Wrap justify="center">
      <WrapItem>
        <Input
          placeholder="Model name..."
          color="white"
          focusBorderColor="#FFD700"
        />
      </WrapItem>
      <WrapItem>
        <IconButton
          backgroundColor="#FFD700"
          aria-label="Search database"
          icon={<SearchIcon />}
        />
      </WrapItem>
    </Wrap>
  );
}
