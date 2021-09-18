/** @format */

import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Select } from "@chakra-ui/select";
import { Textarea } from "@chakra-ui/textarea";
import React, { useState } from "react";
import { PostItem } from "../../interface";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addToPost } from "../../store/actionCreator";
import { bindActionCreators } from "redux";

export interface PostFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const initalPost = {
  id: "",
  name: "",
  postat: "",
  tag: "Review",
  content: "",
};

export default function PostForm(props: PostFormProps) {
  const [data, setdata] = useState<PostItem>(initalPost);
  const handleClick = () => {
    if (data.name === "" || data.content === "") {
      alert("Empty value");
    } else {
      const date = new Date();
      data.id = uuidv4();
      data.postat = date.toLocaleTimeString() + " " + date.toLocaleDateString();
      add(data);
      props.onClose();
      setdata(initalPost);
    }
  };

  const dispatch = useDispatch();
  const { addToPost: add } = bindActionCreators({ addToPost }, dispatch);

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Post Comment</ModalHeader>
        <ModalCloseButton _hover={{ backgroundColor: "#FFD700" }} />
        <ModalBody>
          <FormControl id="Your name" isRequired>
            <FormLabel>Your name</FormLabel>
            <Input
              placeholder="Peter white..."
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setdata({ ...data, name: event.target.value });
              }}
            />
          </FormControl>
          <FormControl id="tag" isRequired>
            <FormLabel>Tag</FormLabel>
            <Select
              defaultValue="Review"
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                setdata({ ...data, tag: event.target.value });
              }}>
              <option value="Review">Review</option>
              <option value="News">News</option>
              <option value="Other">Other</option>
            </Select>
          </FormControl>
          <FormControl id="tag" isRequired>
            <FormLabel>Comment</FormLabel>
            <Textarea
              placeholder="Your comment"
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                setdata({ ...data, content: event.target.value });
              }}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            backgroundColor="#FFD700"
            color="black"
            mr={3}
            w="50%"
            onClick={() => handleClick()}>
            Post
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
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
