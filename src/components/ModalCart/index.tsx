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
import { GlobalData } from "../../App";
import { CartItem } from "../CartItem";
export interface ModalCartProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalCart(props: ModalCartProps) {
  return (
    <GlobalData.Consumer>
      {({ mode }) => (
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
                    <Th fontSize="2xl" color={mode.color}>
                      TOTAL:
                    </Th>
                    <Th isNumeric fontSize="2xl" color={mode.color}>
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
      )}
    </GlobalData.Consumer>
  );
}
