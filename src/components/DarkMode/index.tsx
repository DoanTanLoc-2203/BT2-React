/** @format */

import * as React from "react";
import { FormControl, FormLabel, Switch } from "@chakra-ui/react";

export interface DarkModeProps {}

export function DarkMode(props: DarkModeProps) {
  return (
        <div>
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="email-alerts" mb="0" color="white">
              Dark Mode
            </FormLabel>
            <Switch
              id="email-alerts"
              colorScheme="yellow"
            />
          </FormControl>
        </div>

  );
}
