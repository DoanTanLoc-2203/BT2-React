/** @format */

import productRepo from "./productRepo";
import postsRepo from "./postRepo";

const repositories = {
  product: productRepo,
  posts: postsRepo,
};

export const repositoryFactory = {
  get: (name: string = "") => {
    if (name === "product") return repositories.product;
    if (name === "posts") return repositories.posts;
  },
};
