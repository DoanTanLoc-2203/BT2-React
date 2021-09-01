/** @format */

import {
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import styled from "styled-components";
import { GlobalData } from "../../App";
import { Detail } from "../../services/getData";

export interface ModalProductProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  price: string;
  imageUrl: string;
  detail: Detail;
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
  return (
    <GlobalData.Consumer>
      {({ mode }) => (
        <Modal isOpen={props.isOpen} onClose={props.onClose} size={"6xl"}>
          <ModalOverlay />
          <ModalContent backgroundColor={mode.background} color={mode.color}>
            <ModalHeader fontSize="6xl" fontWeight="bold">
              {props.name}
              <ModalCloseButton _hover={{ backgroundColor: "#FFD700" }} />
            </ModalHeader>
            <ModalBody>
              <Flex flexDirection="column">
                <Image
                  borderRadius="10px"
                  boxSize="100%"
                  objectFit="scale-down"
                  src={props.imageUrl}
                  alt="car image"
                />
                <Flex flexDirection="column" w="100%">
                  <Overview>
                    <Text fontSize="4xl" fontWeight="bold">
                      OVERVIEW
                    </Text>
                    <Text fontSize="2xl" textAlign="justify">
                      {props.detail.overView}
                    </Text>
                  </Overview>
                  <Color>
                    <Text fontSize="4xl" fontWeight="bold">
                      COLOR
                    </Text>
                    <RadioGroup defaultValue="0">
                      <Stack spacing={5} direction="row">
                        {props.detail.color.map(
                          (element: string, index: number) => {
                            return (
                              <Radio
                                colorScheme={element}
                                value={index.toString()}
                                size="lg"
                                key={index}>
                                {element}
                              </Radio>
                            );
                          },
                        )}
                      </Stack>
                    </RadioGroup>
                  </Color>
                  <Technical>
                    <Text fontSize="4xl" fontWeight="bold">
                      TECHNICAL SPECIFICATIONS
                    </Text>
                    <Config>
                      <Text>Displayment:</Text>
                      <Text>{props.detail.technical.displayment}</Text>
                    </Config>
                    <Config>
                      <Text>Max. Power:</Text>
                      <Text>{props.detail.technical.maxPower}</Text>
                    </Config>
                    <Config>
                      <Text>Top speed:</Text>
                      <Text>{props.detail.technical.topspeed}</Text>
                    </Config>
                    <Config>
                      <Text>Acceleration 0-100 km/h (MPH 0-62):</Text>
                      <Text>{props.detail.technical.acceleration}</Text>
                    </Config>
                  </Technical>
                  <Text fontSize="4xl" mb="10px" fontWeight="bold">
                    PRICE: {props.price}
                  </Text>
                  <ButtonGroup>
                    <Button
                      backgroundColor="#FFD700"
                      color="black"
                      mr={3}
                      w="50%"
                      onClick={() => {
                        console.log(props.detail.color);
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
      )}
    </GlobalData.Consumer>
  );
}
