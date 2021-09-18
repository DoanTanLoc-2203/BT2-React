/** @format */

import {
  Button,
  Flex,
  Image,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React, { lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { Item } from "../../interface";
// import { ModalProduct } from "../ModalProduct";
import { addToCart } from "../../store/actionCreator";

export interface ProductItemProps {
  data: Item;
}

const ModalProduct = lazy(() => import("../ModalProduct"));

export default function ProductItem(props: ProductItemProps) {
  const bg = useColorModeValue("#f5f5f5", "#000316");
  const color = useColorModeValue("black", "white");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { addToCart: add } = bindActionCreators({ addToCart }, dispatch);
  return (
    <Flex
      flexDirection="column"
      justifyContent="flex-start"
      w="500px"
      mt="20px"
      p="10px"
      borderRadius="10px"
      backgroundColor={bg}
      color="white">
      <Image
        borderRadius="10px"
        boxSize="auto"
        objectFit="cover"
        src={props.data.imageUrl}
        alt="car image"
        fallbackSrc="https://via.placeholder.com/2048x1152.png"
      />
      <Text fontSize="4xl" fontWeight="bold" color={color}>
        {props.data.name}
      </Text>
      <Text fontSize="3xl" color={color}>
        Price: {props.data.price}
      </Text>
      <Flex justify="center">
        <Button
          backgroundColor="#FFD700"
          m="5px"
          color="black"
          onClick={() => {
            add({
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
          onClick={() => {
            onOpen();
          }}
          _hover={{ color: "black", backgroundColor: "#E2E8F0" }}>
          Detail
        </Button>
      </Flex>
      <Suspense fallback={null}>
        {isOpen ? (
          <ModalProduct isOpen={isOpen} onClose={onClose} data={props.data} />
        ) : null}
      </Suspense>
    </Flex>
  );
}
