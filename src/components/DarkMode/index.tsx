/** @format */

import { FormControl, FormLabel, Switch, useColorMode } from "@chakra-ui/react";
import * as React from "react";

export interface DarkModeProps {}

export function DarkMode(props: DarkModeProps) {
  const { toggleColorMode } = useColorMode();
  return (
    <div>
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="email-alerts" mb="0">
          Dark Mode
        </FormLabel>
        <Switch
          id="email-alerts"
          colorScheme="yellow"
          onChange={toggleColorMode}
        />
      </FormControl>
    </div>
  );
}
