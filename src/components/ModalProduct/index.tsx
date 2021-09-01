/** @format */

import {
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Stack,
  Text,
  ModalCloseButton,
} from "@chakra-ui/react";
import * as React from "react";
import styled from "styled-components";
import { Detail, Item } from "../../services/getData";

export interface ModalProductProps {
  isOpen: boolean;
  onClose: () => void;
  data: Item;
}

const ButtonGroup = styled.div`
  display: flex;
  width: 100%;
`;

const Config = styled.div`
  font-size: 26px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
`;

const Overview = styled.div`
  margin-bottom: 10px;
`;
const Color = styled.div`
  margin-bottom: 10px;
`;
const Technical = styled.div`
  margin-bottom: 10px;
`;
export function ModalProduct(props: ModalProductProps) {
  const detai: Detail = props.data.detail;
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} size={"6xl"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize="6xl" fontWeight="bold">
          {props.data.name}
          <ModalCloseButton _hover={{ backgroundColor: "#FFD700" }} />
        </ModalHeader>
        <ModalBody>
          <Flex flexDirection="column">
            <Image
              borderRadius="10px"
              boxSize="100%"
              objectFit="scale-down"
              src={props.data.imageUrl}
              alt="car image"
            />
            <Flex flexDirection="column" w="100%">
              <Overview>
                <Text fontSize="4xl" fontWeight="bold">
                  OVERVIEW
                </Text>
                <Text fontSize="2xl" textAlign="justify">
                  {detai.overview}
                </Text>
              </Overview>
              <Color>
                <Text fontSize="4xl" fontWeight="bold">
                  COLOR
                </Text>
                <RadioGroup defaultValue="1">
                  <Stack spacing={5} direction="row">
                    <Radio colorScheme="blue" value="1" size="lg">
                      Blue
                    </Radio>
                    <Radio colorScheme="green" value="2" size="lg">
                      Green
                    </Radio>
                  </Stack>
                </RadioGroup>
              </Color>
              <Technical>
                <Text fontSize="4xl" fontWeight="bold">
                  TECHNICAL SPECIFICATIONS
                </Text>
                <Config>
                  <Text>Displayment:</Text>
                  <Text>6498 cm³</Text>
                </Config>
                <Config>
                  <Text>Max. Power:</Text>{" "}
                  <Text>566 kW (770 CV) at 8.500 rpm</Text>
                </Config>
                <Config>
                  <Text>Top speed:</Text>
                  <Text>&gt;350 km/h</Text>{" "}
                </Config>
                <Config>
                  <Text>Acceleration 0-100 km/h (MPH 0-62):</Text>{" "}
                  <Text>2.8 s</Text>
                </Config>
              </Technical>
              <Text fontSize="4xl" mb="10px" fontWeight="bold">
                PRICE: {props.data.price}
              </Text>
              <ButtonGroup>
                <Button
                  backgroundColor="#FFD700"
                  color="black"
                  mr={3}
                  w="50%"
                  onClick={() => {
                    console.log(props.data.detail.overview);
                  }}>
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  w="50%"
                  backgroundColor="#020202"
                  color="white"
                  onClick={props.onClose}
                  _hover={{ color: "black", backgroundColor: "#E2E8F0" }}>
                  Back
                </Button>
              </ButtonGroup>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
