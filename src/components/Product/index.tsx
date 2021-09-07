/** @format */

import * as React from "react";
import { Flex } from "@chakra-ui/react";
import { ProductItem } from "../ProductItem";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";

export function Product() {
  const productList = useSelector((state: RootState) => state.fillterSearch);
  return (
    <Flex
      wrap="wrap"
      justify="space-evenly"
      alignItems="flex-start"
      backgroundColor="#020202"
      pb="50px"
      height="100%">
      {productList.map((element) => {
        return <ProductItem key={element.id} data={element} />;
      })}
    </Flex>
  );
}
