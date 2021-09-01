/** @format */

import { useState } from "react";
import { Input, IconButton, Wrap, WrapItem } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { GlobalData } from "../../App";
export interface SearchProps {}

export function Search(props: SearchProps) {
  const [textSearch, settextSearch] = useState<string>("");
  return (
    <GlobalData.Consumer>
      {({ setText, mode }) => (
        <Wrap justify="center">
          <WrapItem>
            <Input
              placeholder="Model name..."
              color={mode.color}
              focusBorderColor="#FFD700"
              onChange={(event) => {
                settextSearch(event.target.value);
                setText(event.target.value);
              }}
            />
          </WrapItem>
          <WrapItem>
            <IconButton
              backgroundColor="#FFD700"
              aria-label="Search database"
              icon={<SearchIcon />}
              onClick={() => {
                setText(textSearch);
              }}
            />
          </WrapItem>
        </Wrap>
      )}
    </GlobalData.Consumer>
  );
}
