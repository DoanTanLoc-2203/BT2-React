/** @format */

import * as React from "react";
import { Footer } from "../../components/Footer";
import { MenuUser } from "../../components/MenuUser";
import { Product } from "../../components/Product";

export interface ProductStoreProps {}

export function ProductStore(props: ProductStoreProps) {
  return (
    <div>
      <MenuUser />
      <Product />
      <Footer />
    </div>
  );
}
