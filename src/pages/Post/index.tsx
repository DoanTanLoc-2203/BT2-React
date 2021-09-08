/** @format */

import * as React from "react";
import { Footer } from "../../components/Footer";
import { MenuUser } from "../../components/MenuUser";
import { PostFeed } from "../../components/PostFeed";

export interface PostProps {}

export function Post(props: PostProps) {
  return (
    <div>
      <MenuUser />
      <PostFeed />
      <Footer />
    </div>
  );
}
