/** @format */

import { base } from "./api";

export const repositoryFactory = {
  get: (name: string) => {
    return base(name);
  },
};
