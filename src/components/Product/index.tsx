/** @format */

import React, { lazy, Suspense } from "react";
import { Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
// import {ProductItem from "../ProductItem";

const ProductItem = lazy(() => import("../ProductItem"));

export default function Product() {
  const productList = useSelector((state: RootState) => state.fillterSearch);
  return (
    <Flex
      wrap="wrap"
      justify="space-evenly"
      alignItems="flex-start"
      pb="50px"
      height="100%">
      <Suspense fallback={null}>
        {productList.map((element) => {
          return <ProductItem key={element.id} data={element} />;
        })}
      </Suspense>
    </Flex>
  );
}
