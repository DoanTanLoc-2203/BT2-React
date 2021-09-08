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
export interface InfoProps {}

const ModalCart = React.lazy(() => import("../ModalCart"));

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
        <React.Suspense fallback={<div>loadding...</div>}>
          <ModalCart isOpen={isOpen} onClose={onClose} />
        </React.Suspense>
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
