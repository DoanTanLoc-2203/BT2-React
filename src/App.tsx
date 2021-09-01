/** @format */

import { ChakraProvider } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { MenuUser } from "./components/MenuUser";
import { Product } from "./components/Product";
import { getData, Item } from "./services/getData";

interface Store {
  productData: Item[];
  mode: Mode;
  setText: (value: string) => void;
  setMode: (value: Mode) => void;
}

interface Mode {
  background: string;
  color: string;
  backgroundItem: string;
}
export const darkMode: Mode = {
  background: "#020202",
  color: "white",
  backgroundItem: "#222222",
};
export const lightMode: Mode = {
  background: "white",
  color: "#020202",
  backgroundItem: "#F2F2F2",
};
export const GlobalData = React.createContext<Store>({
  productData: [],
  mode: lightMode,
  setText: () => {},
  setMode: () => {},
});

function App() {
  const [data, setdata] = useState<Item[]>([]);
  const [dataDisplay, setdataDisplay] = useState<Item[]>([]);
  const [textSearch, settextSearch] = useState<string>("");
  const [mode, setmode] = useState<Mode>(lightMode);
  useEffect(() => {
    getData("https://jsonblob.com/api/882457098991120384").then((dataRes) => {
      setdata(dataRes);
      setdataDisplay(dataRes);
    });
  }, []);
  useEffect(() => {
    let tempData: Item[] = [];
    data.forEach((element: Item) => {
      if (element.name.indexOf(textSearch) >= 0) {
        tempData.push(element);
      }
    });
    setdataDisplay(tempData);
  }, [textSearch, data]);
  return (
    <ChakraProvider>
      <GlobalData.Provider
        value={{
          productData: dataDisplay,
          setText: settextSearch,
          mode: mode,
          setMode: setmode,
        }}>
        <div className="App">
          <MenuUser />
          <Product />
          <Footer />
        </div>
      </GlobalData.Provider>
    </ChakraProvider>
  );
}

export default App;
