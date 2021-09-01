/** @format */

import { Button, Flex, Image, Text, useDisclosure } from "@chakra-ui/react";
import { Item } from "../../services/getData";
import { ModalProduct } from "../ModalProduct";

export interface ProductItemProps {
  dataItem: Item;
}

export function ProductItem(props: ProductItemProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      flexDirection="column"
      w="500px"
      mt="20px"
      p="10px"
      borderRadius="10px"
      backgroundColor="#292929"
      border="1px solid white">
      <Image
        borderRadius="10px"
        boxSize="auto"
        objectFit="cover"
        src={props.dataItem.imageUrl}
        alt="car image"
      />
      <Text fontSize="4xl" fontWeight="bold" color="white">
        {props.dataItem.name}
      </Text>
      <Text fontSize="3xl" color="#FFD700">
        Price: {props.dataItem.price}
      </Text>
      <Flex justify="center">
        <Button backgroundColor="#FFD700" m="5px">
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
      <ModalProduct
        isOpen={isOpen}
        onClose={onClose}
        name={props.dataItem.name}
        price={props.dataItem.price}
        detail={props.dataItem.detail}
        imageUrl={props.dataItem.imageUrl}
      />
    </Flex>
  );
}
