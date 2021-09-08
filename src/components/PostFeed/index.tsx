/** @format */

import { Button, ButtonGroup } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Container } from "@chakra-ui/layout";
import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { PostItem } from "../../interface";
import { RootState } from "../../store/reducers";
import { PostItemRow } from "../PostItemRow";
export interface PostFeedProps {}

const PostForm = lazy(() => import("../PostForm"));

const MyButton = styled.button`
  border-radius: none;
  border-bottom: 2px solid none;
  margin-right: 5px;
  &:hover {
    background-color: none;
    border-bottom: 2px solid #ffd700;
  }
`;

export function PostFeed(props: PostFeedProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const data: PostItem[] = useSelector((state: RootState) => state.postList);
  let { url } = useRouteMatch();
  return (
    <Container maxWidth="100%">
      <Container
        pt="20px"
        maxWidth="80%"
        height="100vh"
        display="flex"
        flexDirection="column">
        <Box display="flex" justifyContent="space-between" mb="20px">
          <ButtonGroup>
            <MyButton>
              <NavLink to={`${url}/all`} activeClassName="activeLink">
                All
              </NavLink>
            </MyButton>
            <MyButton>
              <NavLink to={`${url}/reviews`} activeClassName="activeLink">
                Reviews
              </NavLink>
            </MyButton>
            <MyButton>
              <NavLink to={`${url}/news`} activeClassName="activeLink">
                News
              </NavLink>
            </MyButton>
            <MyButton>
              <NavLink to={`${url}/others`} activeClassName="activeLink">
                Others
              </NavLink>
            </MyButton>
          </ButtonGroup>
          <Button backgroundColor="#FFD700" color="black" onClick={onOpen}>
            Post
          </Button>
          <Suspense fallback={null}>
            {isOpen ? <PostForm isOpen={isOpen} onClose={onClose} /> : null}
          </Suspense>
        </Box>
        <Box>
          <Switch>
            <Route path={`${url}/all`}>
              {data.map((element) => {
                return <PostItemRow data={element} key={element.id} />;
              })}
            </Route>
            <Route path={`${url}/reviews`}>
              {data.map((element) => {
                if (element.tag === "Review") {
                  return <PostItemRow data={element} key={element.id} />;
                }
                return null;
              })}
            </Route>
            <Route path={`${url}/news`}>
              {data.map((element) => {
                if (element.tag === "News") {
                  return <PostItemRow data={element} key={element.id} />;
                }
                return null;
              })}
            </Route>
            <Route path={`${url}/others`}>
              {data.map((element) => {
                if (element.tag === "Other") {
                  return <PostItemRow data={element} key={element.id} />;
                }
                return null;
              })}
            </Route>
          </Switch>
        </Box>
      </Container>
    </Container>
  );
}
