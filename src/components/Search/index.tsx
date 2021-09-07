/** @format */

import { SearchIcon } from "@chakra-ui/icons";
import { IconButton, Input, Wrap, WrapItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreator from "../../store/actionCreator";
import { RootState } from "../../store/reducers";

export interface SearchProps {}

export function Search(props: SearchProps) {
  const data = useSelector((state: RootState) => state.productList);
  const dispatch = useDispatch();
  const { fillterProductList } = bindActionCreators(ActionCreator, dispatch);
  const [text, settext] = useState<string>("");

  useEffect(() => {
    fillterProductList(text, data);
  }, [fillterProductList, text, data]);

  return (
    <Wrap justify="center">
      <WrapItem>
        <Input
          placeholder="Model name..."
          color="white"
          focusBorderColor="#FFD700"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            settext(event.target.value);
          }}
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
