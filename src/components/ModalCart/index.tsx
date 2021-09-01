/** @format */

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  Tbody,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { CItem, GlobalData } from "../../App";
import { CartItem } from "../CartItem";
export interface ModalCartProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalCart(props: ModalCartProps) {
  const totalPrice = (cart: CItem[]) => {
    let total: number = 0;
    cart.forEach((element: CItem) => {
      let res: number = parseFloat(
        element.price.substring(0, element.price.length - 1),
      );
      total += res * element.quantity;
    });
    return total;
  };
  return (
    <GlobalData.Consumer>
      {({ mode, cart }) => (
        <Modal isOpen={props.isOpen} onClose={props.onClose} size="6xl">
          <ModalOverlay />
          <ModalContent backgroundColor={mode.background} color={mode.color}>
            <ModalHeader>Your Cart</ModalHeader>
            <ModalCloseButton _hover={{ backgroundColor: "#FFD700" }} />
            <ModalBody>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th color={mode.color}>Image</Th>
                    <Th color={mode.color}>Name</Th>
                    <Th textAlign="center" color={mode.color}>
                      Quantity
                    </Th>
                    <Th isNumeric color={mode.color}>
                      Price
                    </Th>
                    <Th color={mode.color}>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {cart.map((element: CItem, index: number) => {
                    return <CartItem data={element} key={element.id} />;
                  })}
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th></Th>
                    <Th></Th>
                    <Th fontSize="2xl" color={mode.color}>
                      TOTAL:
                    </Th>
                    <Th isNumeric fontSize="2xl" color={mode.color}>
                      {totalPrice(cart)}$
                    </Th>
                    <Th></Th>
                  </Tr>
                </Tfoot>
              </Table>
            </ModalBody>

            <ModalFooter>
              <Button backgroundColor="#FFD700" color="black" mr={3}>
                Checkout
              </Button>
              <Button
                variant="outline"
                backgroundColor="#020202"
                color="white"
                onClick={props.onClose}
                _hover={{ color: "black", backgroundColor: "#E2E8F0" }}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </GlobalData.Consumer>
  );
}
