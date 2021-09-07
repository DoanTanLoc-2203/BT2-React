/** @format */

import * as React from "react";
import {
  Text,
  Avatar,
  IconButton,
  Wrap,
  WrapItem,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { ModalCart } from "../ModalCart";
export interface InfoProps {}

export function Info(props: InfoProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (

        <Wrap align="center">
          <WrapItem>
            <IconButton
              mr="10px"
              backgroundColor="#FFD700"
              color="black"
              aria-label="Search database"
              icon={<FaShoppingCart />}
              onClick={onOpen}
            />
            <ModalCart isOpen={isOpen} onClose={onClose} />
          </WrapItem>
          <WrapItem>
            <Flex flexDirection="column">
              <Avatar
                name="Dan Abrahmov"
                src="https://rockandbluescruise.com/wp-content/uploads/2020/10/tieu-su-ronaldo.jpg"
              />
              <Text fontSize="sm" color="white">
                Hello, Loc
              </Text>
            </Flex>
          </WrapItem>
        </Wrap>
  );
}
