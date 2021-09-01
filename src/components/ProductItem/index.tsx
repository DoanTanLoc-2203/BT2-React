/** @format */

import { Button, Flex, Image, Text, useDisclosure } from "@chakra-ui/react";
import { CItem, GlobalData } from "../../App";
import { Item } from "../../services/getData";
import { ModalProduct } from "../ModalProduct";

export interface ProductItemProps {
  dataItem: Item;
}

export function ProductItem(props: ProductItemProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handelClickAdd = (
    cartArray: CItem[],
    setCart: (value: CItem[]) => void,
  ) => {
    let cart: CItem = {
      id: props.dataItem.id,
      image: props.dataItem.imageUrl,
      name: props.dataItem.name,
      quantity: 1,
      price: props.dataItem.price,
    };
    let tempCartArray: CItem[] = cartArray;
    let check: boolean = false;
    tempCartArray.forEach((element: CItem) => {
      if (element.id === cart.id) {
        element.quantity++;
        check = true;
      }
    });
    if (!check) {
      tempCartArray.push(cart);
    }
    setCart(tempCartArray);
  };
  return (
    <GlobalData.Consumer>
      {({ mode, cart, setCart }) => (
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          w="500px"
          mt="20px"
          p="10px"
          borderRadius="10px"
          backgroundColor={mode.backgroundItem}>
          <Image
            borderRadius="10px"
            boxSize="auto"
            objectFit="cover"
            src={props.dataItem.imageUrl}
            alt="car image"
          />
          <Text fontSize="4xl" fontWeight="bold" color={mode.color}>
            {props.dataItem.name}
          </Text>
          <Text fontSize="3xl" color={mode.color}>
            Price: {props.dataItem.price}
          </Text>
          <Flex justify="center">
            <Button
              backgroundColor="#FFD700"
              m="5px"
              onClick={() => handelClickAdd(cart, setCart)}>
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
            id={props.dataItem.id}
            name={props.dataItem.name}
            price={props.dataItem.price}
            detail={props.dataItem.detail}
            imageUrl={props.dataItem.imageUrl}
            setCart={() => handelClickAdd(cart, setCart)}
          />
        </Flex>
      )}
    </GlobalData.Consumer>
  );
}
