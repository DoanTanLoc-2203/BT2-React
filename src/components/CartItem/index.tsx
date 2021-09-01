/** @format */

import {
  Td,
  Tr,
  Avatar,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import * as React from "react";
export interface CartItemProps {}

export function CartItem(props: CartItemProps) {
  return (
    <Tr>
      <Td>
        <Avatar
          name="image"
          src="https://www.wallpaperup.com/uploads/wallpapers/2015/09/04/799872/8d78f6b8720fa6359bc23e3c29188368-700.jpg"
        />
      </Td>
      <Td>Lamboghini Aventador</Td>
      <Td display="flex" justifyContent="center">
        <NumberInput
          step={1}
          defaultValue={1}
          min={1}
          max={10}
          w="20%"
          focusBorderColor="#FFD700">
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Td>
      <Td isNumeric>400,999$</Td>
    </Tr>
  );
}
