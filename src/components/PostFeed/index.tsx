/** @format */

import { Button, ButtonGroup } from "@chakra-ui/button";
import { Center, Container } from "@chakra-ui/layout";
import * as React from "react";

export interface PostFeedProps {}

export function PostFeed(props: PostFeedProps) {
  return (
    <Container maxWidth="100%">
      <Container
        pt="20px"
        maxWidth="80%"
        height="100vh"
        bgColor="#020202"
        display="flex"
        justifyContent="space-between">
        <ButtonGroup>
          <Button>All</Button>
          <Button>Review</Button>
          <Button>News</Button>
          <Button>Other</Button>
        </ButtonGroup>
        <Button>Post</Button>
      </Container>
    </Container>
  );
}
