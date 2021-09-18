/** @format */

import { SearchIcon } from "@chakra-ui/icons";
import { IconButton, Input, Wrap, WrapItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { fillterProductList } from "../../store/actionCreator";
import { RootState } from "../../store/reducers";

export interface SearchProps {}

export function Search(props: SearchProps) {
  const data = useSelector((state: RootState) => state.productList);
  const dispatch = useDispatch();
  const { fillterProductList: fillter } = bindActionCreators(
    { fillterProductList },
    dispatch,
  );
  const [text, settext] = useState<string>("");

  useEffect(() => {
    fillter(text, data);
  }, [fillter, text, data]);

  return (
    <Wrap justify="center">
      <WrapItem>
        <Input
          placeholder="Model name..."
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
