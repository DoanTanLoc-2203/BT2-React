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
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { Cart } from "../../interface";
import * as ActionCreator from "../../store/actionCreator";
export interface CartItemProps {
  data: Cart;
}

export function CartItem(props: CartItemProps) {
  const dispatch = useDispatch();
  const { deleteCart, updateCart } = bindActionCreators(
    ActionCreator,
    dispatch,
  );
  return (
    <Tr>
      <Td>
        <Avatar name="image" src={props.data.imageUrl} size="xl" />
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
          onChange={(valueString: string) =>
            updateCart(props.data.id, parseInt(valueString))
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
          onClick={() => deleteCart(props.data.id)}>
          Delete
        </Button>
      </Td>
    </Tr>
  );
}
