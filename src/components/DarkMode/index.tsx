/** @format */

import * as React from "react";
import { FormControl, FormLabel, Switch } from "@chakra-ui/react";
import { darkMode, GlobalData, lightMode } from "../../App";

export interface DarkModeProps {}

export function DarkMode(props: DarkModeProps) {
  return (
    <GlobalData.Consumer>
      {({ mode, setMode }) => (
        <div>
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="email-alerts" mb="0" color={mode.color}>
              Dark Mode
            </FormLabel>
            <Switch
              id="email-alerts"
              colorScheme="yellow"
              onChange={() => {
                if (mode === darkMode) setMode(lightMode);
                else setMode(darkMode);
              }}
            />
          </FormControl>
        </div>
      )}
    </GlobalData.Consumer>
  );
}
