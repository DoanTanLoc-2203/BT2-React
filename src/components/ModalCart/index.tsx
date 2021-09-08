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
import { useSelector } from "react-redux";
import { Cart } from "../../interface";
import { RootState } from "../../store/reducers";
import { CartItem } from "../CartItem";
export interface ModalCartProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalCart(props: ModalCartProps) {
  const data: Cart[] = useSelector((state: RootState) => state.cartList);
  const totalCart = () => {
    let total: number = 0;
    for (let i = 0; i < data.length; i++) {
      total += parseFloat(data[i].price.substring(0, data[i].price.length - 1));
    }
    return total.toString() + "$";
  };
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
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((element) => {
                return <CartItem key={element.id} data={element} />;
              })}
            </Tbody>
            <Tfoot>
              <Tr>
                {/* <Th></Th>
                <Th></Th> */}
                <Th fontSize="2xl">TOTAL:</Th>
                <Th isNumeric fontSize="2xl">
                  {totalCart()}
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
  );
}
