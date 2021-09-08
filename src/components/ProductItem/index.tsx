/** @format */

import { Button, Flex, Image, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { Item } from "../../interface";
import { ModalProduct } from "../ModalProduct";
import * as ActionCreator from "../../store/actionCreator";
import { bindActionCreators } from "redux";

export interface ProductItemProps {
  data: Item;
}

export function ProductItem(props: ProductItemProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { addToCart } = bindActionCreators(ActionCreator, dispatch);
  return (
    <Flex
      flexDirection="column"
      justifyContent="flex-start"
      w="500px"
      mt="20px"
      p="10px"
      borderRadius="10px"
      backgroundColor="gray">
      <Image
        borderRadius="10px"
        boxSize="auto"
        objectFit="cover"
        src={props.data.imageUrl}
        alt="car image"
        fallbackSrc="https://via.placeholder.com/2048x1152.png"
      />
      <Text fontSize="4xl" fontWeight="bold">
        {props.data.name}
      </Text>
      <Text fontSize="3xl">Price: {props.data.price}</Text>
      <Flex justify="center">
        <Button
          backgroundColor="#FFD700"
          m="5px"
          onClick={() => {
            addToCart({
              id: props.data.id,
              imageUrl: props.data.imageUrl,
              name: props.data.name,
              quantity: 1,
              price: props.data.price,
            });
          }}>
          Add to Cart
        </Button>
        <Button
          backgroundColor="#020202"
          color="white"
          m="5px"
          onClick={onOpen}
          _hover={{ color: "black", backgroundColor: "#E2E8F0" }}>
          Detail
        </Button>
      </Flex>
      <ModalProduct isOpen={isOpen} onClose={onClose} data={props.data} />
    </Flex>
  );
}
