/** @format */

import {
  Button,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Td,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { Cart } from "../../interface";
import { deleteCart, updateCart } from "../../store/actionCreator";
export interface CartItemProps {
  data: Cart;
}

export function CartItem(props: CartItemProps) {
  const dispatch = useDispatch();
  const { deleteCart: del, updateCart: up } = bindActionCreators(
    { deleteCart, updateCart },
    dispatch,
  );
  return (
    <Tr>
      <Td>
        <Image src={props.data.imageUrl} objectFit="fill" />
      </Td>
      <Td>{props.data.name}</Td>
      <Td>
        <NumberInput
          step={1}
          defaultValue={props.data.quantity}
          min={1}
          max={10}
          // w="40%"
          m="auto"
          focusBorderColor="#FFD700"
          onChange={(valueString: string) =>
            up(props.data.id, parseInt(valueString))
          }>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Td>
      <Td isNumeric>{props.data.price}</Td>
      <Td>
        <Button
          backgroundColor="red.500"
          color="white"
          _hover={{
            color: "black",
            backgroundColor: "#F2F2F2",
          }}
          onClick={() => del(props.data.id)}>
          Delete
        </Button>
      </Td>
    </Tr>
  );
}
