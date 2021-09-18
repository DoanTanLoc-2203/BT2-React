/** @format */

import repository from "./repository";

export const base = (resource: string) => {
  return {
    get() {
      return repository.get(`${resource}`);
    },
    getItem(itemId: number) {
      return repository.get(`${resource}/${itemId}`);
    },
  };
};
