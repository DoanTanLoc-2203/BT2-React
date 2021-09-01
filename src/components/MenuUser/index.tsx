/** @format */
import { Image, Wrap } from "@chakra-ui/react";
import { GlobalData } from "../../App";
import { ButtonGroup } from "../ButtonGroup/indext";
import { DarkMode } from "../DarkMode";
import { Info } from "../Info";
import { Search } from "../Search";
export interface MenuProps {}

export function MenuUser(props: MenuProps) {
  return (
    <GlobalData.Consumer>
      {({ mode }) => (
        <Wrap
          height="auto"
          justify="space-between"
          backgroundColor={mode.background}
          align="center"
          p="10px"
          borderBottom="5px solid #FFD700">
          <Image
            boxSize="100px"
            objectFit="cover"
            src="https://www.freepnglogos.com/uploads/lamborghini-logo-png/lamborghini-logo-wallpapers-pictures-images-1.png"
            alt="logo"
          />
          <ButtonGroup />
          <Search />
          <DarkMode />
          <Info />
        </Wrap>
      )}
    </GlobalData.Consumer>
  );
}
