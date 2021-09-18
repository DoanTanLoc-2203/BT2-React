/** @format */

import { Text } from "@chakra-ui/layout";
import { Avatar, Box, Tag, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";
import { PostItem } from "../../interface";

export interface PostItemProps {
  data: PostItem;
}

export function PostItemRow(props: PostItemProps) {
  const bg = useColorModeValue("#f5f5f5", "#000316");
  const bg2 = useColorModeValue("#d4d4d4", "#222222");
  const color = () => {
    if (props.data.tag === "Review") {
      return "red";
    } else if (props.data.tag === "News") {
      return "green";
    } else {
      return "blue";
    }
  };
  return (
    <Box
      maxWidth="100%"
      display="flex"
      justifyContent="space-evenly"
      backgroundColor={bg}
      p="15px"
      mb="10px"
      borderRadius="10px"
      borderBottom="2px solid #FFD700">
      <Avatar
        size="xl"
        name={props.data.name}
        src="https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg"
      />
      <Box pl="10px" width="90%">
        <Box display="flex" justifyContent="flex-start" alignItems="center">
          <Text textAlign="left" fontSize="2xl" fontWeight="bold" mr="10px">
            {props.data.name}
          </Text>
          <Tag size="sm" variant="solid" colorScheme={color()}>
            {props.data.tag}
          </Tag>
        </Box>
        <Text textAlign="left" color="#FFD700">
          Posted at {props.data.postat}
        </Text>
        <Text
          textAlign="justify"
          backgroundColor={bg2}
          p="10px"
          width="100%"
          borderRadius="10px">
          {props.data.content}
        </Text>
      </Box>
    </Box>
  );
}
