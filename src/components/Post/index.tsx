/** @format */

import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { PostFeed } from "../PostFeed";

export interface PostProps {}

export default function Post(props: PostProps) {
  let history = useHistory();

  useEffect(() => {
    history.push("/post/all");
  });

  return (
    <div>
      <PostFeed />
    </div>
  );
}
