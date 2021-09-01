/** @format */

import {
  Avatar,
  Button,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Td,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { CItem, GlobalData } from "../../App";
export interface CartItemProps {
  data: CItem;
}

export function CartItem(props: CartItemProps) {
  const handleDelete = (cart: CItem[], setCart: (value: CItem[]) => void) => {
    let temp: CItem[] = cart.filter((obj) => obj.id !== props.data.id);
    setCart(temp);
  };
  const caculatePrice = (price: string, quantity: number) => {
    let res: number = parseFloat(price.substring(0, price.length - 1));
    return res * quantity;
  };
  const handleChangeQuantity = (
    value: number,
    cart: CItem[],
    setCart: (value: CItem[]) => void,
  ) => {
    let temp: CItem[] = Object.assign([], cart);
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].id === props.data.id) {
        temp[i].quantity = value;
        break;
      }
    }
    setCart(temp);
  };
  return (
    <GlobalData.Consumer>
      {({ cart, setCart }) => (
        <Tr>
          <Td>
            <Avatar name="image" src={props.data.image} size="xl" />
          </Td>
          <Td>{props.data.name}</Td>
          <Td>
            <NumberInput
              step={1}
              defaultValue={props.data.quantity}
              min={1}
              max={10}
              w="30%"
              m="auto"
              focusBorderColor="#FFD700"
              onChange={(valueString: string) => {
                handleChangeQuantity(parseInt(valueString), cart, setCart);
              }}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Td>
          <Td isNumeric>
            {caculatePrice(props.data.price, props.data.quantity)}$
          </Td>
          <Td>
            <Button
              backgroundColor="red.500"
              color="white"
              _hover={{
                color: "black",
                backgroundColor: "#F2F2F2",
              }}
              onClick={() => handleDelete(cart, setCart)}>
              Delete
            </Button>
          </Td>
        </Tr>
      )}
    </GlobalData.Consumer>
  );
}
