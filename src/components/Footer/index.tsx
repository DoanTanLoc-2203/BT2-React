/** @format */

import * as React from "react";
import { Text } from "@chakra-ui/react";
import { GlobalData } from "../../App";
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <GlobalData.Consumer>
      {({ mode }) => (
        <Text
          backgroundColor={mode.background}
          p="10px"
          color={mode.color}
          borderTop="5px solid #FFD700">
          Copyright © 2021 Automobili Lamborghini S.p.A. a sole shareholder
          company part of Audi Group. All rights reserved. VAT no. IT
          00591801204
        </Text>
      )}
    </GlobalData.Consumer>
  );
}
