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
import * as React from "react";
import { CartItem } from "../CartItem";
export interface ModalCartProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalCart(props: ModalCartProps) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} size="6xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Your Cart</ModalHeader>
        <ModalCloseButton _hover={{ backgroundColor: "#FFD700" }} />
        <ModalBody>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Image</Th>
                <Th>Name</Th>
                <Th textAlign="center">Quantity</Th>
                <Th isNumeric>Price</Th>
              </Tr>
            </Thead>
            <Tbody>
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
            </Tbody>
            <Tfoot>
              <Tr>
                <Th></Th>
                <Th></Th>
                <Th fontSize="2xl">TOTAL:</Th>
                <Th isNumeric fontSize="2xl">
                  200$
                </Th>
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
  );
}
